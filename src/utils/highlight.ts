// Helper function to highlight keywords in text
export const highlightText = (text: string): string => {
  const keywords = [
    "Spring Boot",
    "MySQL",
    "Hibernate",
    "Postman",
    "REST API",
    "CRUD",
    "AWS",
    "EC2",
    "S3",
    "RDS",
    "Docker",
    "Kubernetes",
    "K8s",
    "Terraform",
    "Node.js",
    "WordPress",
    "Minikube",
    "GitHub Actions",
    "Controller",
    "Service",
    "Repository",
    "LoadBalancer",
    "Persistent Volume Claims",
    "PVCs",
    "Secrets",
    "Virtual Machines",
    "VMs",
    "Edge Computing",
    "Database",
    "Security Groups",
    "HTTP",
    "HTTPS",
    "SSH",
    "API",
  ];

  let result = text;
  keywords.forEach((keyword) => {
    const regex = new RegExp(`\\b(${keyword})\\b`, "gi");
    result = result.replace(
      regex,
      `<mark class="bg-cyan-500/10 text-cyan-300 px-1 rounded font-medium not-italic">$1</mark>`,
    );
  });
  return result;
};
