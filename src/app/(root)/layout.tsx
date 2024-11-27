import ButtonCV from "@/components/common/ButtonCV";
import Header from "@/components/layouts/Header";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header>
        <ButtonCV className="hidden lg:flex" />
      </Header>
      {children}
    </div>
  );
};
export default HomeLayout;
