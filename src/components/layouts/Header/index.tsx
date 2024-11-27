import Logo from "@/components/common/Logo";
import { ThemeSwitcher } from "@/components/theme-switcher";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Header = ({ children }: { children?: React.ReactNode }) => {
  return (
    <header className="border-b bg-transparent">
      <div className="container h-16 flex items-center justify-between">
        <div>
          <Logo />
        </div>

        <div className="flex items-center gap-4">
          <NavLinks className="hidden lg:block" />
          <ThemeSwitcher />

          {children}

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
export default Header;
