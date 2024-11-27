import Title from "@/components/common/Title";
import CardService from "@/components/layouts/card/CardService";
import { servicesData } from "@/constants/data";

const ServicesPage = () => {
  return (
    <section className="py-5 lg:py-10">
      <div className="container space-y-4">
        <Title
          title="Layanan Ansori Dev"
          desc="Lihat layanan yang saya tawarkan untuk Anda"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-4">
          {servicesData.map((item) => (
            <CardService
              key={item.id}
              title={item.title}
              desc={item.desc}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesPage;
