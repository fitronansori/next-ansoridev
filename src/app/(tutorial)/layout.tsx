import Header from "@/components/layouts/Header";

const TutorialLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};
export default TutorialLayout;
