import Title from "@/components/common/Title";
import CardProject from "@/components/layouts/card/CardProject";
import { projectData } from "@/constants/data";

const ProjectsPage = () => {
  return (
    <section className="py-5 lg:py-10">
      <div className="container space-y-4">
        <Title title="Projects" desc="Lihat project yang telah saya kerjakan" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center lg:place-items-start gap-4 lg:gap-x-0 lg:gap-y-8">
          {projectData.map((item) => (
            <CardProject
              key={item.id}
              title={item.title}
              github={item.github}
              website={item.website}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsPage;
