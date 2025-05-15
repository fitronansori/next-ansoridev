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
    github: "https://github.com/fitrondev/next-suxz",
    website: "https://next-suxz.vercel.app/",
    image: "/assets/images/p1.jpeg",
  },
  {
    id: 2,
    title: "Zone Tech",
    github: "https://github.com/fitrondev/react-zonetech",
    website: "https://react-zonetech.vercel.app/",
    image: "/assets/images/p2.jpeg",
  },
  {
    id: 3,
    title: "Bookmark Landing Page",
    github: "https://github.com/fitrondev/bookmark-landing-page",
    website: "https://bookmark-landing-page-neon.vercel.app/",
    image: "/assets/images/p3.png",
  },
  {
    id: 4,
    title: "Easy Bank Landing Page",
    github: "https://github.com/fitrondev/easybank-landing-page",
    website: "https://easybank-landing-page-xi-bay.vercel.app/",
    image: "/assets/images/p4.png",
  },
  {
    id: 5,
    title: "Aqiqah Lombok",
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
    link: "https://www.udemy.com/certificate/UC-e4f366c3-a76f-4e9e-915c-6d54e61fc2ea/",
    image: "/assets/images/c3.jpg",
  },
  {
    id: 2,
    title: "FRONT-END WEB DEVELOPMENT - MSIB CYCLE 3",
    link: "https://drive.google.com/file/d/1KfE2ddax-GrisYa8xJqEuNhB8ReVioLh/view",
    image: "/assets/images/c1.png",
  },
  {
    id: 3,
    title:
      "TOP 9 DEMO SKILVUL #TECH4IMPACT: FRONT-END & BACK-END WEB DEVELOPMENT",
    link: "https://drive.google.com/file/d/1Qh6zP382PsHDUADAXhjfoN4eFWc5pokg/view",
    image: "/assets/images/c2.png",
  },
  {
    id: 4,
    title: "Data Science MSIB Batch 5 Rakamin Academy",
    link: "https://drive.google.com/file/d/1jjAXnZk_BUQy4vbXRDEjjUSUgvSpnlZe/view?usp=drive_link",
    image: "/assets/images/c4.png",
  },
];

export const servicesData = [
  {
    id: 1,
    title: "Web Development",
    desc: "Membuat website yang sesuai dengan kebutuhan Anda. Mulai dari website company profile, e-commerce, blog, dan lainnya.",
    image: "/assets/images/s1.jpg",
  },
  {
    id: 2,
    title: "Web Design",
    desc: "Mendesain website yang menarik dan responsif. Dengan desain yang menarik, website Anda akan lebih menarik.",
    image: "/assets/images/s2.jpg",
  },
  {
    id: 3,
    title: "SEO Optimization",
    desc: "Meningkatkan peringkat website Anda di mesin pencari. Dengan SEO, website Anda akan lebih mudah ditemukan.",
    image: "/assets/images/s3.jpg",
  },
];
