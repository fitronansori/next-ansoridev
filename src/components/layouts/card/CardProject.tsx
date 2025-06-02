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
import Image from "next/image";
import Link from "next/link";
import { RiChromeFill, RiGithubFill } from "react-icons/ri";

type CardProjectType = {
  title: string;
  desc: string;
  tools: string[];
  badge: string;
  github: string;
  website: string;
  image: string;
};

const CardProject = ({
  title,
  desc,
  tools,
  badge,
  github,
  website,
  image,
}: CardProjectType) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col pt-0 pb-4 gap-4">
      <div className="relative aspect-video bg-gray-100">
        <Image
          src={image || "/assets/images/placeholder.webp"}
          alt="E-Commerce Website"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="size-full object-fill"
        />

        <div className="absolute top-3 right-3">
          <Badge className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white">
            {badge}
          </Badge>
        </div>
      </div>

      <CardHeader className="px-4">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>

      <CardContent className="px-4 flex-grow">
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
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

      <CardFooter className="flex justify-between px-4">
        <Button size="sm" asChild>
          <Link href={website}>
            <RiChromeFill className="size-5" /> Demo
          </Link>
        </Button>

        {github && (
          <Button variant="outline" size="sm" asChild>
            <Link href={github}>
              <RiGithubFill className="size-5" /> Github
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
export default CardProject;
