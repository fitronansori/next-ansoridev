import Header from "@/components/layouts/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header>
        <Button className="hidden lg:flex" asChild>
          <Link
            href="/CV Muh. Fitron Ansori.pdf"
            download="CV_Fitron Ansori"
            target="_blank">
            Download CV
          </Link>
        </Button>
      </Header>
      {children}
    </div>
  );
};
export default HomeLayout;
