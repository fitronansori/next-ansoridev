import Logo from "@/components/common/Logo";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="border-b bg-transparent">
      <div className="container h-16 flex items-center justify-between">
        <div>
          <Logo />
        </div>

        <div className="flex items-center gap-4">
          <NavLinks className="hidden lg:block" />
          <ThemeSwitcher />

          <Button className="hidden lg:flex" asChild>
            <Link
              href="/CV Muh. Fitron Ansori.pdf"
              download="CV_Fitron Ansori"
              target="_blank">
              Download CV
            </Link>
          </Button>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
export default Header;
