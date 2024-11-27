import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type ButtonCVType = {
  size?: "default" | "sm" | "lg";
  className?: string;
};

const ButtonCV = ({ size = "default", className }: ButtonCVType) => {
  return (
    <Button size={size} className={cn("", className)} asChild>
      <Link
        href="/CV_FitronAnsori.pdf"
        download="CV_Fitron Ansori"
        target="_blank">
        Download CV
      </Link>
    </Button>
  );
};
export default ButtonCV;
