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
import { ITemplate } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa6";
import { RiChromeFill, RiGithubFill } from "react-icons/ri";

type CardTemplateType = {
  template: ITemplate;
};

const CardTemplate = ({ template }: CardTemplateType) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col pt-0 pb-4 gap-4">
      <div className="relative aspect-video bg-gray-100">
        <Image
          src={template.image || "/assets/images/placeholder.webp"}
          alt={template.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="size-full object-fill"
        />

        <div className="absolute top-3 right-3">
          <Badge className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white">
            {template.badge}
          </Badge>
        </div>
      </div>
      <CardHeader className="px-4">
        <CardTitle className="text-xl">{template.title}</CardTitle>
        <CardDescription>{template.desc}</CardDescription>
      </CardHeader>
      <CardContent className="px-4 flex-grow">
        <div className="flex flex-wrap gap-2">
          {template.tools.map((tool, index) => (
            <Badge
              key={index}
              variant={"outline"}
              className="bg-gray-100 dark:text-background"
            >
              {tool}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-4 flex-col lg:flex-row flex-wrap gap-2">
        <Button size="lg" className="w-full lg:w-auto" asChild>
          <Link
            href={template.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiChromeFill className="size-5" /> Demo
          </Link>
        </Button>

        <Button
          size="lg"
          variant={"destructive"}
          className="w-full lg:w-auto"
          asChild
        >
          <Link
            href={template.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="size-5" /> Youtube
          </Link>
        </Button>

        {template.github && (
          <Button
            variant="outline"
            size="lg"
            className="w-full lg:w-auto"
            asChild
          >
            <Link
              href={template.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubFill className="size-5" /> Github
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CardTemplate;
