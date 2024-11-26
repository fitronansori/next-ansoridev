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
      {navLinks.map((item, index) => (
        <Button
          variant={"link"}
          key={index}
          className={cn("font-semibold", classNameLink)}
          asChild>
          <Link href={item.href}>{item.name}</Link>
        </Button>
      ))}
    </nav>
  );
};
export default NavLinks;
