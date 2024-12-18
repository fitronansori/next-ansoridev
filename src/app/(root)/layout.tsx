import Header from "@/components/layouts/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header>
        <Button className="hidden sm:flex" asChild>
          <Link href={"/sign-in"}>Login</Link>
        </Button>
      </Header>
      {children}
    </div>
  );
};
export default HomeLayout;
