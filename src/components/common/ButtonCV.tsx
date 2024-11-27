import Link from "next/link";
import { Button } from "../ui/button";

type ButtonCVType = {
  size?: "default" | "sm" | "lg";
};

const ButtonCV = ({ size = "default" }: ButtonCVType) => {
  return (
    <Button size={size} asChild>
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
