import { Button } from "@/components/ui/button";
import Stack from "./index";
import { socialData } from "@/constants/data";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <Stack title="Terhubung Dengan Saya">
      <div className="grid grid-cols-4 gap-3">
        {socialData.map((item, index) => (
          <Button key={index} size={"icon"} asChild>
            <Link href={item.url}>
              <item.icon />
            </Link>
          </Button>
        ))}
      </div>
    </Stack>
  );
};
export default SocialMedia;
