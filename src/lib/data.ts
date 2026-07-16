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
  Web: ["Node.js", "HTML", "CSS", "JavaScript"],
  Desktop: ["Python", "Django", "C#", ".NET Core", "WPF"],
  Database: ["PostgreSQL", "SQLite"],
  Tools: ["Git"],
} as const;

export const projects = [
  {
    title: "Distribution Management System",
    description:
      "A complete software solution for managing distribution operations — tracking orders, managing deliveries, handling customer accounts, and generating business reports. Built to replace manual paperwork and spreadsheets with a reliable digital system.",
    tech: ["Python", "Django", "PostgreSQL"],
    features: [
      "Order tracking and delivery management",
      "Customer account management",
      "Automated business reports",
      "Real-time inventory visibility",
    ],
    value:
      "Eliminated manual tracking errors and reduced order processing time by 60%, giving the business owner real-time visibility into operations.",
  },
  {
    title: "POS / Inventory Management System",
    description:
      "A full point-of-sale system with integrated inventory management. Handles sales transactions, tracks stock levels in real-time, manages suppliers, and generates detailed sales and inventory reports.",
    tech: ["Python", "PostgreSQL", "Django"],
    features: [
      "Fast sales processing with barcode scanning",
      "Real-time inventory tracking",
      "Supplier and purchase order management",
      "Sales analytics and reporting dashboard",
    ],
    value:
      "Unified sales and inventory into one system, preventing stockouts and giving the business complete control over their retail operations.",
  },
  {
    title: "Restaurant Management Software",
    description:
      "A desktop application built for restaurant operations — managing tables, orders, kitchen workflow, and billing. Designed for speed and reliability in a busy restaurant environment.",
    tech: ["C#", ".NET Core", "WPF"],
    features: [
      "Table management and order routing",
      "Kitchen display and order tracking",
      "Menu management with categories and pricing",
      "Bill generation and payment processing",
    ],
    value:
      "Streamlined restaurant operations from order to payment, reducing wait times and eliminating order errors in a fast-paced environment.",
  },
  {
    title: "E-commerce Website with Admin Panel",
    description:
      "A full-featured online store with a customer-facing storefront and a complete admin dashboard. Handles product listings, shopping cart, checkout, order management, and business analytics.",
    tech: ["Node.js", "Express", "MongoDB"],
    features: [
      "Responsive storefront with product browsing",
      "Shopping cart and secure checkout",
      "Admin dashboard for products, orders, and users",
      "Sales analytics and revenue tracking",
    ],
    value:
      "Enabled the business to sell online with a professional storefront, while giving them full control through an intuitive admin panel.",
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
