import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import { TbError404 } from "react-icons/tb";

const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>

      <div className="max-w-md mx-auto text-center space-y-6">
        {/* Error Icon */}
        <div className="flex justify-center">
          <TbError404 className="text-8xl text-muted-foreground" />
        </div>

        {/* Error Message */}
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold">Halaman Tidak Ditemukan</h1>
          <p className="text-muted-foreground">
            Maaf, halaman yang Anda cari tidak dapat ditemukan atau mungkin
            telah dipindahkan.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="gap-2">
            <Link href="/">
              <FaHome className="size-4" />
              Kembali ke Beranda
            </Link>
          </Button>

          <Button variant="outline" asChild className="gap-2">
            <Link href="/profile">
              <FaArrowLeft className="size-4" />
              Lihat Profil
            </Link>
          </Button>
        </div>

        {/* Additional Info */}
        <div className="pt-4 space-y-2">
          <p className="text-sm text-muted-foreground">
            Atau kunjungi halaman lainnya:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/projects">Portofolio</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/blog">Blog</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/certificates">Sertifikat</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/templates">Templates</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
