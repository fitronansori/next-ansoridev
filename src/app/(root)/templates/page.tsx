import Title from "@/components/common/Title";
import CardTemplate from "@/components/layouts/card/CardTemplate";
import { templateData } from "@/constants/data";

const TemplatesPage = () => {
  return (
    <section className="py-5 lg:py-10">
      <div className="container space-y-5 md:space-y-10">
        <Title
          title="Templates"
          desc="Berikut adalah beberapa template untuk membantu Anda dalam pengembangan website atau aplikasi Anda."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templateData.map((template) => (
            <CardTemplate key={template.id} template={template} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplatesPage;
