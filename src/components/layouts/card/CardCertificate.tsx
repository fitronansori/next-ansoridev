import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { TbFileCertificate } from "react-icons/tb";

type CardCertificateType = {
  title: string;
  link: string;
  image: string;
};

const CardCertificates = ({ title, link, image }: CardCertificateType) => {
  return (
    <Card className="max-w-sm shadow-md">
      <CardHeader className="p-4">
        <Image
          src={image}
          alt=""
          width={1000}
          height={300}
          sizes="100%"
          loading="lazy"
          className="w-full h-[200px] object-fill rounded-md dark:brightness-90"
        />
      </CardHeader>

      <CardContent className="px-4 pb-4">
        <CardTitle className="text-lg line-clamp-2">{title}</CardTitle>
      </CardContent>
      <CardFooter className="px-4 pb-4 justify-between">
        <Button asChild>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <TbFileCertificate /> Link Certificate
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
export default CardCertificates;
