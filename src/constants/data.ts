import { IconType } from "react-icons";

export const navLinks = [
  {
    name: "Profile",
    href: "/profile",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Certificates",
    href: "/certificates",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Templates",
    href: "/templates",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Login",
    href: "/sign-in",
  },
];

import {
  RiHtml5Fill,
  RiCss3Fill,
  RiTailwindCssFill,
  RiJavascriptFill,
  RiReactjsFill,
  RiNextjsFill,
} from "react-icons/ri";
import { DiPhp } from "react-icons/di";
import { TbBrandLaravel } from "react-icons/tb";
import { FaVuejs } from "react-icons/fa6";
import { SiNuxtdotjs } from "react-icons/si";

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
  RiInstagramLine,
  RiGithubFill,
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
