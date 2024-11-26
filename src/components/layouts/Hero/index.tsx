import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div className="container h-[calc(100vh-65px)] flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl  font-bold text-center">
            Selamat Datang di Ansori{" "}
            <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
              Dev
            </span>
          </h1>
          <p className="text-base sm:text-xl font-semibold text-center">
            Dapatkan informasi terbaru seputar teknologi dan programming di
            sini, {""}
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
              Never Stop Learning!
            </span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Button size={"lg"} asChild>
            <Link
              href="/CV Muh. Fitron Ansori.pdf"
              download="CV_Fitron Ansori"
              target="_blank">
              Download CV
            </Link>
          </Button>

          <Button size={"lg"} asChild>
            <Link href="/" target="_blank">
              Kontak Saya
            </Link>
          </Button>
        </div>

        <Button size={"lg"} variant={"link"} asChild>
          <Link href="/blog">
            Lihat Artikel Terbaru <ArrowRight className="size-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};
export default Hero;
