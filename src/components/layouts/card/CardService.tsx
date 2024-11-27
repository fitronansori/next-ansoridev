import ButtonWA from "@/components/common/ButtonWA";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";

type CardServiceType = {
  title: string;
  desc: string;
  image: string;
};

const CardService = ({ title, desc, image }: CardServiceType) => {
  return (
    <Card className="relative max-w-sm">
      <Image
        src={image}
        alt={title + " Ansori Dev"}
        width={400}
        height={600}
        sizes="100%"
        loading="lazy"
        className="w-[360px] h-[450px] object-cover rounded-md brightness-[0.3]"
      />

      <CardContent className="absolute left-4 bottom-4 p-0 pr-4 space-y-2">
        <CardTitle className="font-semibold text-white">{title}</CardTitle>
        <CardDescription className="text-sm text-white font-medium line-clamp-3">
          {desc}
        </CardDescription>

        <div>
          <ButtonWA icon>Hubungi Kami</ButtonWA>
        </div>
      </CardContent>
    </Card>
  );
};
export default CardService;
