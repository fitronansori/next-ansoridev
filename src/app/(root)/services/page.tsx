import ButtonWA from "@/components/common/ButtonWA";
import Title from "@/components/common/Title";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Code, Globe, Rocket } from "lucide-react";

const ServicesPage = () => {
  return (
    <section className="py-5 lg:py-10">
      <div className="container space-y-5 md:space-y-10">
        <Title
          title="Layanan Ansori Dev"
          desc="Lihat layanan yang saya tawarkan untuk Anda"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
          <Card className="w-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Website Dasar</CardTitle>
                  <CardDescription className="mt-1">
                    Cocok untuk usaha kecil
                  </CardDescription>
                </div>
                <Badge variant="outline" className="bg-gray-100">
                  Populer
                </Badge>
              </div>
              <div className="mt-4">
                <span className="text-3xl font-bold">Rp 750.000</span>
                <span className="text-gray-500 ml-1">/proyek</span>
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Website responsif 5 halaman</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Optimasi SEO dasar</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Formulir kontak</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Desain responsif untuk mobile</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Pengerjaan 2 minggu</span>
                </li>
              </ul>
            </CardContent>

            <CardFooter>
              <ButtonWA size="lg" className="w-full" icon>
                Pesan Sekarang
              </ButtonWA>
            </CardFooter>
          </Card>

          <Card className="w-full border-primary hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 left-0 h-1 bg-primary"></div>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Website Bisnis</CardTitle>
                  <CardDescription className="mt-1">
                    Untuk bisnis yang berkembang
                  </CardDescription>
                </div>
                <Badge className="bg-primary text-primary-foreground">
                  Direkomendasikan
                </Badge>
              </div>
              <div className="mt-4">
                <span className="text-3xl font-bold">Rp 3.000.000</span>
                <span className="text-gray-500 ml-1">/proyek</span>
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Website responsif 10 halaman</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Optimasi SEO lanjutan</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Sistem manajemen konten</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Integrasi media sosial</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Pengaturan Google Analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Pengerjaan 3 minggu</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <ButtonWA size="lg" className="w-full" icon>
                Pesan Sekarang
              </ButtonWA>
            </CardFooter>
          </Card>

          {/* Paket Premium */}
          <Card className="w-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Website E-Commerce</CardTitle>
                  <CardDescription className="mt-1">
                    Solusi toko online lengkap
                  </CardDescription>
                </div>
                <Badge variant="outline" className="bg-gray-100">
                  Premium
                </Badge>
              </div>
              <div className="mt-4">
                <span className="text-3xl font-bold">Rp 10.000.000</span>
                <span className="text-gray-500 ml-1">/proyek</span>
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Fungsionalitas e-commerce lengkap</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Sistem manajemen produk</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Integrasi gateway pembayaran</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Manajemen akun pelanggan</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Sistem pelacakan inventaris</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Pengerjaan 5 minggu</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <ButtonWA size="lg" className="w-full" icon>
                Pesan Sekarang
              </ButtonWA>
            </CardFooter>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Mengapa Memilih Layanan Pengembangan Web Kami?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="flex flex-col items-center p-4">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">Kode Bersih</h3>
              <p className="text-sm text-muted-foreground text-center mt-1">
                Kode terstruktur dan mudah dikelola
              </p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">Ramah SEO</h3>
              <p className="text-sm text-muted-foreground text-center mt-1">
                Dioptimalkan untuk mesin pencari
              </p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">Performa Cepat</h3>
              <p className="text-sm text-muted-foreground text-center mt-1">
                Dioptimalkan untuk kecepatan dan efisiensi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServicesPage;
