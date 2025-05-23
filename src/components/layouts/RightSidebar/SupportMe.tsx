import { Button } from "@/components/ui/button";
import { supportData } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

const SupportMe = () => {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold">Dukungan / Support</h3>
      <div className="flex items-center gap-2">
        {supportData.map((item, index) => (
          <Button key={index} size={"icon"} asChild>
            <Link href={item.link} target="_blank">
              <Image src={item.icon} alt={item.title} width={24} height={24} />
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};
export default SupportMe;
