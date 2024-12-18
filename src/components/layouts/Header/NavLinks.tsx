"use client";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

type NavLinksProps = {
  className?: string;
  classNameLink?: string;
};

const NavLinks = ({ className, classNameLink }: NavLinksProps) => {
  return (
    <nav className={cn("", className)}>
      {navLinks.slice(0, 3).map((item, index) => (
        <Button
          variant={"link"}
          key={index}
          className={cn("font-semibold", classNameLink)}
          asChild>
          <Link href={item.href}>{item.name}</Link>
        </Button>
      ))}

      {navLinks.slice(3, 4).map((item, index) => (
        <Button
          variant={"link"}
          key={index}
          className={cn("font-semibold sm:hidden", classNameLink)}
          asChild>
          <Link href={item.href}>{item.name}</Link>
        </Button>
      ))}
    </nav>
  );
};
export default NavLinks;
