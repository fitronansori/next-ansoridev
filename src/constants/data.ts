import { IconType } from "react-icons";

export const navLinks = [
  {
    name: "Digital Product",
    href: "/digital-product",
  },
  {
    name: "Tutorial",
    href: "/tutorial",
  },
  {
    name: "Templates",
    href: "/templates",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Services",
    href: "/services",
  },
];

import { DiPhp } from "react-icons/di";
import { FaVuejs } from "react-icons/fa6";
import {
  RiCss3Fill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiNuxtdotjs } from "react-icons/si";
import { TbBrandLaravel } from "react-icons/tb";

type TechStackType = {
  name: string;
  icon: IconType;
}[];

export const techStack: TechStackType = [
  {
    name: "HTML",
    icon: RiHtml5Fill,
  },
  {
    name: "CSS",
    icon: RiCss3Fill,
  },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
  },
  {
    name: "JavaScript",
    icon: RiJavascriptFill,
  },
  {
    name: "React",
    icon: RiReactjsFill,
  },
  {
    name: "Next.js",
    icon: RiNextjsFill,
  },
  {
    name: "PHP",
    icon: DiPhp,
  },
  {
    name: "Laravel",
    icon: TbBrandLaravel,
  },
  {
    name: "Vue.js",
    icon: FaVuejs,
  },
  {
    name: "Nuxt.js",
    icon: SiNuxtdotjs,
  },
];

import {
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiWhatsappFill,
} from "react-icons/ri";

type SocialType = {
  name: string;
  url: string;
  icon: IconType;
}[];

export const socialData: SocialType = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/ansori.dev",
    icon: RiInstagramLine,
  },
  {
    name: "GitHub",
    url: "https://github.com/fitrondev",
    icon: RiGithubFill,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/fitron-ansori-b671521b3/",
    icon: RiLinkedinBoxFill,
  },
  {
    name: "WhatsApp",
    url: "https://api.whatsapp.com/send?phone=085738224566&text=Halo%20Fitron%20Ansori",
    icon: RiWhatsappFill,
  },
];

export const projectData = [
  {
    id: 1,
    title: "Suxz Platform",
    desc: "Platform layanan web seperti pengembangan, desain, dan optimasi SEO profesional.",
    tools: ["React", "Tailwind CSS", "TypeScript"],
    badge: "Web Development",
    github: "https://github.com/fitrondev/next-suxz",
    website: "https://next-suxz.vercel.app/",
    image: "/assets/images/p1.jpeg",
  },
  {
    id: 2,
    title: "Zone Tech",
    desc: "Website penyedia layanan pembuatan website, desain modern, dan optimasi SEO berkualitas.",
    tools: ["React", "Tailwind CSS", "TypeScript"],
    badge: "Web Development",
    github: "https://github.com/fitrondev/react-zonetech",
    website: "https://react-zonetech.vercel.app/",
    image: "/assets/images/p2.jpeg",
  },
  {
    id: 3,
    title: "Bookmark Landing Page",
    desc: "Template landing page sederhana untuk layanan penyimpanan dan manajemen tautan online.",
    tools: ["React", "Tailwind CSS", "TypeScript"],
    badge: "Web Development",
    github: "https://github.com/fitrondev/bookmark-landing-page",
    website: "https://bookmark-landing-page-neon.vercel.app/",
    image: "/assets/images/p3.png",
  },
  {
    id: 4,
    title: "Easy Bank Landing Page",
    desc: "Template landing page modern untuk promosi layanan dan fitur dari bank digital.",
    tools: ["React", "Tailwind CSS", "TypeScript"],
    badge: "Web Development",
    github: "https://github.com/fitrondev/easybank-landing-page",
    website: "https://easybank-landing-page-xi-bay.vercel.app/",
    image: "/assets/images/p4.png",
  },
  {
    id: 5,
    title: "Aqiqah Lombok",
    desc: "Website layanan aqiqah di Lombok dengan tampilan responsif dan fitur lengkap.",
    tools: ["Next.js", "Tailwind CSS", "TypeScript"],
    badge: "Web Development",
    github: "",
    website: "https://www.aqiqahlombok.online/",
    image: "/assets/images/p5.png",
  },
];

export const certificatesData = [
  {
    id: 1,
    title:
      "HTML, CSS dan JavaScript : Pemula sampai Mahir - Programmer Zaman Now",
    desc: "Pelatihan dasar hingga mahir tentang HTML, CSS, dan JavaScript untuk web modern.",
    link: "https://www.udemy.com/certificate/UC-e4f366c3-a76f-4e9e-915c-6d54e61fc2ea/",
    image: "/assets/images/c3.jpg",
    badge: "Web Development",
    awardBy: "Udemy",
    date: "November 2023",
  },
  {
    id: 2,
    title: "FRONT-END WEB DEVELOPMENT - MSIB CYCLE 3",
    desc: "Program magang front-end web development dengan kurikulum praktis berbasis proyek nyata.",
    link: "https://drive.google.com/file/d/1KfE2ddax-GrisYa8xJqEuNhB8ReVioLh/view",
    image: "/assets/images/c1.png",
    badge: "Web Development",
    awardBy: "MSIB Skilvul",
    date: "Desember 2022",
  },
  {
    id: 3,
    title:
      "TOP 9 DEMO SKILVUL #TECH4IMPACT: FRONT-END & BACK-END WEB DEVELOPMENT",
    desc: "Penghargaan sebagai peserta terbaik dalam demo proyek web fullstack Tech4Impact.",
    link: "https://drive.google.com/file/d/1Qh6zP382PsHDUADAXhjfoN4eFWc5pokg/view",
    image: "/assets/images/c2.png",
    badge: "Web Development",
    awardBy: "MSIB Skilvul",
    date: "Desember 2022",
  },
  {
    id: 4,
    title: "Data Science MSIB Batch 5 Rakamin Academy",
    desc: "Pelatihan intensif data science dengan studi kasus dan praktik menggunakan Python.",
    link: "https://drive.google.com/file/d/1jjAXnZk_BUQy4vbXRDEjjUSUgvSpnlZe/view?usp=drive_link",
    image: "/assets/images/c4.png",
    badge: "Data Science",
    awardBy: "MSIB Rakamin Academy",
    date: "Desember 2023",
  },
];
