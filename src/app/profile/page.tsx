import ButtonCV from "@/components/common/ButtonCV";
import ButtonWA from "@/components/common/ButtonWA";
import SocialMedia from "@/components/layouts/Stack/SocialMedia";
import TechStack from "@/components/layouts/Stack/TechStack";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  return (
    <section>
      <div className="relative max-w-md mx-auto px-4 flex items-center justify-center py-4">
        <div className="absolute top-4 right-4">
          <ThemeSwitcher />
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <Image
            src={"/assets/images/pp.png"}
            alt="Profile Picture Ansori Dev"
            width={300}
            height={300}
            sizes="100%"
            className="size-[120px] rounded-full object-cover"
          />

          <div className="text-3xl font-extrabold text-center">
            <h1>Fitron Ansori</h1>
            <p>
              <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                Frontend
              </span>{" "}
              Developer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <ButtonCV />

            <ButtonWA variant="outline">Kontak Saya</ButtonWA>
          </div>

          <div className="w-full flex flex-col gap-4">
            <Button asChild>
              <Link href="/projects">Lihat Portofolio</Link>
            </Button>

            <Button asChild>
              <Link href="/certificates">Lihat Sertifikat</Link>
            </Button>

            <Button className="w-full" asChild>
              <Link href="/templates">Lihat Templates</Link>
            </Button>
          </div>

          <div className="space-y-4">
            <TechStack />
            <SocialMedia />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProfilePage;
