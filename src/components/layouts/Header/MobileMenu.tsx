import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import NavLinks from "./NavLinks";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <AlignJustify className="size-7" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="hidden">
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>

        <NavLinks
          className="h-full flex flex-col justify-center gap-4"
          classNameLink="text-2xl"
        />
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;
