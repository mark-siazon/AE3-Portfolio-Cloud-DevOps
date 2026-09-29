// Use Vite's base URL for asset paths
const BASE_URL = import.meta.env.BASE_URL || "/";

export const projects = [
  {
    title: "Ass#1: Spring Boot RESTful Web Services",
    description:
      "A comprehensive User Management REST API with layered architecture, MySQL integration, and Postman testing.",
    tags: ["Java SpringBoot", "REST API", "MySQL", "Postman"],
    pdf: `${BASE_URL}files/Project-Ass-1.pdf`,
    image: `${BASE_URL}card-img/Project-Ass-1-opt.webp`,
    fullDescription: `
        Developed a comprehensive User Management REST API using Spring Boot and MySQL.
        The project implements a standard layered architecture (Controller, Service, Repository) to handle CRUD operations for user data.

        Key Features:
        - Database configuration with Hibernate.
        - Entity modeling.
        - API testing using Postman.
      `,
  },
  {
    title: "Ass#2: AWS Deployment Guide",
    description:
      "A comprehensive guide for setting up a website hosting project using key AWS services like EC2, S3, and RDS.",
    tags: ["AWS", "EC2", "S3", "RDS", "Cloud Hosting"],
    pdf: `${BASE_URL}files/Project-Ass-2.pdf`,
    image: `${BASE_URL}card-img/Project-Ass-2-opt.webp`,
    fullDescription: `
        A step-by-step guide for deploying a simple website on AWS, mirroring real-world cloud practices.
        This project demonstrates the integration of core AWS services to build a scalable and secure hosting environment.

        Key Components:
        - EC2 (Virtual Server): Launching and configuring a t3.micro instance for the web server.
        - S3 (Storage): Managing static files and enabling static website hosting.
        - RDS (Database): Setting up a MySQL database instance for dynamic data.
        - Security & Networking: Configuring Security Groups for HTTP/HTTPS/SSH access.
      `,
  },
  {
    title: "Ass#3: Intro to Docker & Containerization",
    description:
      "A comprehensive two-week learning plan covering Docker fundamentals, multi-container applications, and best practices.",
    tags: ["Docker", "Containerization", "DevOps", "Learning Plan"],
    pdf: `${BASE_URL}files/Project-Ass-3.pdf`,
    image: `${BASE_URL}card-img/Project-Ass-3.svg`,
    fullDescription: `
        A structured two-week curriculum designed to master Docker fundamentals and containerization best practices.
        The plan progresses from running basic containers to building and deploying multi-container applications.

        Key Modules:
        - Week 1: Foundations: Installation, basic commands (run, ps, exec), and networking.
        - Week 2: Build & Ship: Dockerfile optimization, multi-stage builds, and Docker Compose.
        - Milestone Project: Containerizing a full-stack application with a database and reverse proxy.
      `,
  },
  {
    title: "Lab Activity: Docker Image Deployment",
    description:
      "A simple Node.js web app containerized with Docker, demonstrating build, run, and compose workflows.",
    tags: ["Docker", "Node.js", "Containerization", "Docker Compose"],
    github: "https://github.com/Iron-Mark/Elec3-Docker",
    local: true,
    image: `${BASE_URL}card-img/Project-LabAct-opt.webp`,
    fullDescription: `
        A hands-on lab activity demonstrating the fundamentals of containerizing a web application.
        The project uses a simple Node.js app to showcase the Docker lifecycle: building images, running containers, and managing services with Docker Compose.

        Key Concepts:
        - Dockerfile: Defining the image environment and dependencies.
        - Docker CLI: Practical experience with build, run, stop, and rm commands.
        - Docker Compose: Orchestrating the application with a declarative YAML configuration.
      `,
  },
  {
    title: "Ass#4: Narrative Report - Virtualization vs. Containerization",
    description:
      "A comparative analysis of Virtual Machines and Docker containers in Edge Computing environments.",
    tags: ["Research", "Virtualization", "Docker", "Edge Computing"],
    pdf: `${BASE_URL}files/Project-Ass-4.pdf`,
    image: `${BASE_URL}card-img/Project-Ass-4-opt.webp`,
    fullDescription: `
        A critical review of the research article "Virtualization vs. Containerization... Focused on the Edge".
        The report evaluates the performance and efficiency of VMs vs. Docker in resource-constrained environments.

        Key Findings:
        - Short-Term Jobs: Containers (Docker/Podman) are ~40% more efficient for quick tasks.
        - Long-Running Services: Kubernetes surpasses Docker in power efficiency for sustained workloads.
        - Edge Efficiency: Native ARM containers on Raspberry Pi perform comparably to native execution, while cross-arch emulation is poor.

        Conclusion:
        - Containers: Best for flexibility and edge efficiency.
        - Kubernetes: Optimal for complex, long-term services.
        - VMs: Essential for strict isolation or specific OS requirements.
      `,
  },
  {
    title: "Ass#5: Kubernetes Home Lab Activity",
    description:
      "Hands-on container orchestration using Minikube: Deployments, Services, Debugging, and Stateful Apps.",
    tags: ["Kubernetes", "Minikube", "MySQL", "WordPress", "PVC", "Secrets"],
    pdf: `${BASE_URL}files/Project-Ass-5.pdf`,
    image: `${BASE_URL}card-img/Project-Ass-5-opt.webp`,
    fullDescription: `
        A comprehensive hands-on lab focused on deploying and managing applications with Kubernetes (Minikube).
        The project covers three key practical tutorials demonstrating core orchestration skills.

        Key Activities:
        - Hello Minikube: Cluster creation, deploying a sample node app, and exposing it via LoadBalancer.
        - Container Debugging: Using 'kubectl exec' to access shell, debug containers, and perform file operations.
        - Stateful Deployment: Deploying a two-tier WordPress & MySQL stack using Persistent Volume Claims (PVCs) and Secrets for data persistence and security.
      `,
  },
  {
    title: "Ass#6: Terraform Survivor",
    description:
      "A browser-based survival RPG where Terraform controls game difficulty. Features interactive UI, crafting system, and IaC principles.",
    tags: ["Terraform", "Game Dev", "IaC", "GitHub Actions"],
    github: "https://github.com/mark-siazon/AE3-Terraform_Survivor",
    demo: "https://mark-siazon.github.io/AE3-Terraform_Survivor/",
    image: `${BASE_URL}card-img/Project-Ass-6.svg`,
    fullDescription: `
        Infrastructure as Code meets Survival RPG. This project demonstrates clean architecture and IaC principles by using Terraform to control game mechanics.

        How Terraform Controls the Game:
        - Configuration as Code: Game settings (difficulty, resource decay, spawn rates) are defined in \`variables.tf\`.
        - Infrastructure Provisioning: Running \`terraform apply\` generates a \`config.js\` file that the game engine reads.
        - Automated Deployment: A GitHub Actions workflow triggers on push, applying the Terraform configuration and deploying the updated game to GitHub Pages.

        Key Features:
        - Interactive UI: A fully functional browser-based survival game with crafting, inventory, and health systems.
        - Dynamic Difficulty: Adjust the game's challenge level simply by changing Terraform variables and redeploying.
      `,
  },
];
