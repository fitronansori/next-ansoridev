import ButtonWA from "@/components/common/ButtonWA";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div className="container flex min-h-[calc(100vh-65px)] flex-col items-center justify-center px-4 py-12">
        {/* Hero Content */}
        <div className="max-w-4xl text-center">
          {/* Main Heading - Optimized for LCP */}
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl leading-tight">
            Selamat Datang di{" "}
            <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
              Ansori Dev
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-6 text-base font-semibold text-muted-foreground sm:text-xl">
            Dapatkan informasi terbaru seputar teknologi dan programming di sini
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Never Stop Learning!
            </span>
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <ButtonWA size="lg">Kontak Saya</ButtonWA>

          <Button size="lg" variant="link" asChild>
            <Link href="/blog" className="flex items-center gap-2">
              Lihat Artikel Terbaru
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
