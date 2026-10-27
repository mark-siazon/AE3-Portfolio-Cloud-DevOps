import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import { join, dirname, parse } from "path";
import { fileURLToPath } from "url";
import { existsSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PUBLIC_DIR = join(__dirname, "../public");
const CARD_IMG_DIR = join(PUBLIC_DIR, "card-img");
const TARGET_WIDTH = 850; // 2x for retina displays (425px displayed size)

async function optimizeImages() {
  console.log("🖼️  Starting image optimization...\n");

  try {
    // Check if card-img directory exists
    if (!existsSync(CARD_IMG_DIR)) {
      console.error(`❌ Directory not found: ${CARD_IMG_DIR}`);
      return;
    }

    // Read all files in card-img directory
    const files = await readdir(CARD_IMG_DIR);
    const imageFiles = files.filter(
      (file) => file.match(/\.(webp|jpg|jpeg|png)$/i) && !file.includes("-opt"),
    );

    console.log(`Found ${imageFiles.length} images to optimize\n`);

    for (const file of imageFiles) {
      const inputPath = join(CARD_IMG_DIR, file);
      const parsedPath = parse(file);
      const outputFilename = `${parsedPath.name}-opt${parsedPath.ext}`;
      const outputPath = join(CARD_IMG_DIR, outputFilename);

      try {
        // Get original image metadata
        const metadata = await sharp(inputPath).metadata();
        const originalSize = metadata.size;
        const originalWidth = metadata.width;

        // Skip if image is already smaller than target
        if (originalWidth <= TARGET_WIDTH) {
          console.log(`✅ ${file} - Already optimized (${originalWidth}px)`);
          console.log(`   Creating copy as ${outputFilename}\n`);

          // Just copy with optimization
          await sharp(inputPath).webp({ quality: 85 }).toFile(outputPath);
          continue;
        }

        // Resize and optimize
        await sharp(inputPath)
          .resize(TARGET_WIDTH, null, {
            withoutEnlargement: true,
            fit: "inside",
          })
          .webp({ quality: 85 })
          .toFile(outputPath);

        // Get new file size
        const newMetadata = await sharp(outputPath).metadata();
        const newSize = newMetadata.size;
        const savings = (
          ((originalSize - newSize) / originalSize) *
          100
        ).toFixed(1);

        console.log(`✅ ${file} → ${outputFilename}`);
        console.log(`   ${originalWidth}px → ${TARGET_WIDTH}px`);
        console.log(
          `   ${(originalSize / 1024).toFixed(1)} KB → ${(newSize / 1024).toFixed(1)} KB (${savings}% smaller)\n`,
        );
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message);
      }
    }

    console.log("✨ Image optimization complete!");
    console.log(
      "\n📝 Next step: Update src/data/projects.tsx to use -opt.webp files",
    );
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

optimizeImages();
