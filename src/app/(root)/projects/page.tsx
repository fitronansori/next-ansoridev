import Title from "@/components/common/Title";
import CardProject from "@/components/layouts/card/CardProject";
import { projectData } from "@/constants/data";

const ProjectsPage = () => {
  return (
    <section className="py-5 lg:py-10">
      <div className="container space-y-5 md:space-y-10">
        <Title title="Projects" desc="Lihat project yang telah saya kerjakan" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData
            .slice()
            .sort((a, b) => b.id - a.id)
            .map((item) => (
              <CardProject
                key={item.id}
                title={item.title}
                github={item.github}
                website={item.website}
                image={item.image}
                desc={item.desc}
                tools={item.tools}
                badge={item.badge}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsPage;
