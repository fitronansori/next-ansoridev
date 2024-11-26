import { Code } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="inline-flex items-center gap-2">
      <Code className="size-10" />
      <p className="text-2xl font-bold">
        ansori.
        <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
          dev
        </span>
      </p>
    </Link>
  );
};
export default Logo;
