import { tutorials_data } from "@/constants/data";
import TutorialCard from "@/components/layouts/card/TutorialCard";
import Header from "@/components/layouts/Header";
import Title from "@/components/common/Title";

export default function TutorialPage() {
  return (
    <>
      <Header />

      <section className="py-5 lg:py-10">
        <div className="container space-y-5 md:space-y-10">
          <Title
            title="Tutorial"
            desc="Never stop learning, always keep learning"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials_data.map((tutorial) => (
              <TutorialCard key={tutorial.slug} tutorial={tutorial} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
