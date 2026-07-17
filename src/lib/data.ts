export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const services = [
  {
    title: "Custom Business Software",
    description:
      "Tailored software solutions built specifically for your business operations — from workflow automation to data management systems that scale with your growth.",
    icon: "Layers",
  },
  {
    title: "Web Application Development",
    description:
      "Modern, responsive web applications built with Python and JavaScript frameworks. Secure, fast, and designed for real-world business use.",
    icon: "Globe",
  },
  {
    title: "Desktop Application Development",
    description:
      "Robust desktop software for Windows using C# and .NET. Offline-capable, high-performance applications for businesses that need reliability.",
    icon: "Monitor",
  },
  {
    title: "POS System Development",
    description:
      "Complete point-of-sale systems with inventory tracking and sales reporting.",
    icon: "ShoppingCart",
  },
  {
    title: "Restaurant Management Software",
    description:
      "End-to-end restaurant operations: order management, kitchen display systems, table reservations, and real-time reporting dashboards.",
    icon: "UtensilsCrossed",
  },
  {
    title: "Retail & Inventory Management",
    description:
      "Comprehensive inventory tracking, stock management, purchase orders, and sales analytics — keeping your operations lean and efficient.",
    icon: "Package",
  },
] as const;

export const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React.js"],
  Backend: ["Python", "Django", "Node.js", "FastAPI", "C#", ".NET Core", "WPF"],
  Database: ["PostgreSQL", "SQLite", "MongoDB"],
  Tools: ["Git"],
} as const;

export const projects = [
  {
    title: "Hospital Management System",
    image: "/projects/hospital-management.svg",
    description:
      "A complete hospital management solution covering patient registration, appointment scheduling, doctor profiles, billing, and medical records. Built for efficiency and ease of use in healthcare environments.",
    technologies: ["Python", "Django", "PostgreSQL", "HTML", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Restaurant Management System",
    image: "/projects/restaurant-management.svg",
    description:
      "End-to-end restaurant operations software: order management, kitchen display systems, table reservations, staff scheduling, and real-time reporting dashboards for owners.",
    technologies: ["Python", "Django", "JavaScript", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Store & Inventory Management",
    image: "/projects/store-inventory.svg",
    description:
      "Comprehensive inventory tracking system with stock management, purchase orders, sales analytics, barcode scanning support, and automated low-stock alerts for retail businesses.",
    technologies: ["Python", "Django", "SQLite", "HTML", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Distribution Management System",
    image: "/projects/distribution.svg",
    description:
      "Distribution tracking platform for managing supply chain operations, delivery routes, warehouse inventory, and real-time shipment monitoring across multiple locations.",
    technologies: ["Python", "Django", "PostgreSQL", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "POS System",
    image: "/projects/pos-system.svg",
    description:
      "A complete point-of-sale system with inventory tracking, sales reporting, receipt printing, and multi-terminal support. Designed for speed and reliability in retail environments.",
    technologies: ["C#", ".NET Core", "WPF", "SQLite"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "E-commerce Website",
    image: "/projects/ecommerce.svg",
    description:
      "Modern, responsive e-commerce platform with product catalog, shopping cart, secure checkout, order tracking, and an admin dashboard for managing products and orders.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
] as const;

export const processSteps = [
  {
    step: 1,
    title: "Discovery Call",
    description:
      "We discuss your business, challenges, and goals. I learn how your operations work so I can build the right solution.",
    icon: "Phone",
  },
  {
    step: 2,
    title: "Design & Proposal",
    description:
      "I create a detailed plan with features, timeline, and transparent pricing — so you know exactly what you're getting.",
    icon: "FileText",
  },
  {
    step: 3,
    title: "Development",
    description:
      "I build your software with regular updates and demos. You see progress at every stage and can provide feedback along the way.",
    icon: "Code",
  },
  {
    step: 4,
    title: "Launch & Support",
    description:
      "After deployment, I provide training, documentation, and ongoing support to make sure everything runs smoothly.",
    icon: "Rocket",
  },
] as const;

export const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on complexity. A small business tool might take 2–4 weeks, while a full POS or inventory system could take 6–12 weeks. I provide a clear timeline during the proposal phase so you know what to expect.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing is based on project scope and complexity. I provide a fixed-price quote after the discovery phase — no hidden fees, no surprise costs. For ongoing work, I offer flexible monthly arrangements.",
  },
  {
    question: "What happens after launch — do you offer support?",
    answer:
      "Yes. I provide post-launch support including bug fixes, minor feature additions, and technical assistance. I also offer maintenance packages for businesses that need ongoing updates and support.",
  },
  {
    question: "Do I need to know anything technical to work with you?",
    answer:
      "Not at all. I handle all the technical details. You just tell me what your business needs, and I translate that into software. I keep communication clear and jargon-free throughout the process.",
  },
] as const;

export const contact = {
  email: "hassnainarain2000@gmail.com",
  whatsapp: "+92 330 2920396",
  whatsappLink: "https://wa.me/923302920396",
  github: "https://github.com/hassnainarain2000-hub",
};
