import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default component$(() => {
  return (
    <>
      <div class="pointer-events-none fixed inset-0 z-[-1] opacity-30">
        <div class="animate-float absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-purple-500/20 blur-[120px]"></div>
        <div
          class="animate-float absolute right-[-10%] bottom-[-10%] h-[40%] w-[40%] rounded-full bg-cyan-500/20 blur-[120px]"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          class="animate-float absolute top-[40%] left-[40%] h-[30%] w-[30%] rounded-full bg-pink-500/10 blur-[100px]"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>
      <Header />
      <main class="min-h-screen">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
