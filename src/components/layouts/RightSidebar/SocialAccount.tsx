import { Button } from "@/components/ui/button";
import { socialAccountData } from "@/constants/data";
import Link from "next/link";

const SocialAccount = () => {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold">Media Sosial :</h3>
      <div className="flex items-center gap-2">
        {socialAccountData.map((item, index) => (
          <Button key={index} size={"icon"} asChild>
            <Link href={item.url} target="_blank">
              <item.icon />
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};
export default SocialAccount;
