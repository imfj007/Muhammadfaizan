import type { Metadata } from "next";
export const links = {
  sourceCode: "",
  ownerName: "Muhammad Faizan",
  ownerEmail: "faizanjarral000@gmail.com",
} as const;
export const siteConfig: Metadata = {
  title: "Muhammad Faizan | Frontend Developer",
  description: "Modern & Minimalist Next.js Portfolio.",
  keywords: [
    "reactjs", "nextjs", "vercel", "react", "portfolio",
    "frontend developer", "muhammad faizan", "next.js portfolio",
    "tailwindcss", "typescript", "javascript", "three.js",
    "framer-motion", "animated-portfolio", "react-portfolio",
  ] as Array<string>,
  authors: {
    name: "Muhammad Faizan",
    url: "https://www.linkedin.com/in/faizan007/",
  },
} as const;
