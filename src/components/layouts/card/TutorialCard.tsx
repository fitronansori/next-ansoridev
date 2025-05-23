import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { TutorialType } from "@/constants/data";

type TutorialCardProps = {
  tutorial: TutorialType;
};

const TutorialCard = ({ tutorial }: TutorialCardProps) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden transition-all hover:shadow-lg p-0 gap-4">
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          <Image
            src={tutorial.image || "/assets/images/placeholder.webp"}
            alt={tutorial.title}
            fill
            className="size-full object-cover"
          />
        </div>
      </CardHeader>

      <CardContent className="px-4 space-y-4">
        <div className="space-y-1">
          <h3 className="font-semibold text-lg line-clamp-2">
            {tutorial.title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {tutorial.desc}
          </p>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full" asChild>
          <Link href={`/tutorial/${tutorial.slug}`}>Lihat Tutorial</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TutorialCard;
