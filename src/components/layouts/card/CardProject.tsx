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
import { RiChromeFill, RiGithubFill } from "react-icons/ri";

type CardProjectType = {
  title: string;
  github: string;
  website: string;
  image: string;
};

const CardProject = ({ title, github, website, image }: CardProjectType) => {
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
        <CardTitle>{title}</CardTitle>
      </CardContent>
      <CardFooter className="px-4 pb-4 justify-between">
        <Button asChild>
          <Link href={website} target="_blank" rel="noopener noreferrer">
            <RiChromeFill /> Live Website
          </Link>
        </Button>
        {github === "" ? null : (
          <Button asChild>
            <Link href={github} target="_blank" rel="noopener noreferrer">
              <RiGithubFill /> Github
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
export default CardProject;
