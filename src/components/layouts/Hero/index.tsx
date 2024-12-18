import ButtonWA from "@/components/common/ButtonWA";
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

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <ButtonWA size={"lg"}>Kontak Saya</ButtonWA>

          <Button size={"lg"} variant={"link"} asChild>
            <Link href="/blog">
              Lihat Artikel Terbaru <ArrowRight className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
