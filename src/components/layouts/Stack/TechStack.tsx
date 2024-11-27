import { Button } from "@/components/ui/button";
import Stack from "./index";
import { techStack } from "@/constants/data";

const TechStack = () => {
  return (
    <Stack title="Tech Stack">
      <div className="grid grid-cols-5 gap-3 place-content-center">
        {techStack.map((item, index) => (
          <Button key={index} size={"icon"}>
            <item.icon />
          </Button>
        ))}
      </div>
    </Stack>
  );
};
export default TechStack;
