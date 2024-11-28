import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { RiWhatsappFill } from "react-icons/ri";

type ButtonWAProps = {
  className?: string;
  icon?: boolean;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
};

const ButtonWA = ({
  children,
  className,
  icon = false,
  variant = "default",
  size = "default",
}: ButtonWAProps) => {
  return (
    <Button size={size} variant={variant} className={cn("", className)} asChild>
      <Link href="https://api.whatsapp.com/send?phone=+6285738224566&text=Halo%20Fitron%20Ansori">
        {children}{" "}
        <RiWhatsappFill className={cn("", icon ? "block" : "hidden")} />
      </Link>
    </Button>
  );
};
export default ButtonWA;
