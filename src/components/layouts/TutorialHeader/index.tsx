import { ThemeSwitcher } from "@/components/theme-switcher";
import { SidebarTrigger } from "@/components/ui/sidebar";

type TutorialHeaderProps = {
  title?: string;
};

const TutorialHeader = ({ title }: TutorialHeaderProps) => {
  return (
    <section className="border-b">
      <div className="p-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SidebarTrigger />

          <p className="text-lg font-semibold capitalize">Tutorial {title}</p>
        </div>

        <ThemeSwitcher />
      </div>
    </section>
  );
};
export default TutorialHeader;
