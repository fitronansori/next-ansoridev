import { cn } from "@/lib/utils";

type TitleProps = {
  title: string;
  desc: string;
  className?: string;
};

const Title = ({ title, desc, className }: TitleProps) => {
  return (
    <div className={cn("", className)}>
      <h3 className="text-xl sm:text-2xl font-bold text-center lg:text-start">
        {title}
      </h3>

      <p className="text-sm text-center lg:text-start text-muted-foreground">
        {desc}
      </p>
    </div>
  );
};
export default Title;
