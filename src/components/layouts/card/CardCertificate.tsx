import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type CardCertificateType = {
  title: string;
  desc: string;
  link: string;
  image: string;
  badge: string;
  awardBy: string;
  date: string;
};

const CardCertificates = ({
  title,
  desc,
  link,
  image,
  badge,
  awardBy,
  date,
}: CardCertificateType) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 pt-0 pb-4 gap-4">
      <div className="relative aspect-video bg-gray-100">
        <Image
          src={image || "/assets/images/placeholder.webp"}
          alt="Sertifikat AWS"
          fill
          className="size-full object-fill"
        />

        <div className="absolute top-3 right-3">
          <Badge className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white">
            {badge}
          </Badge>
        </div>
      </div>

      <CardHeader className="px-4">
        <div className="flex items-center gap-2 mb-1">
          <Award className="h-4 w-4" />
          <CardDescription>{awardBy}</CardDescription>
        </div>

        <CardTitle className="text-lg line-clamp-2">{title}</CardTitle>
      </CardHeader>

      <CardContent className="px-4">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>Diperoleh: {date}</span>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3">{desc}</p>
      </CardContent>

      <CardFooter className="px-4">
        <Button size={"sm"} asChild>
          <Link href={link} target="_blank">
            <ExternalLink className="size-5" /> Verifikasi
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
export default CardCertificates;
