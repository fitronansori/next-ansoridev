import Header from "@/components/layouts/Header";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};
export default HomeLayout;
