import Title from "@/components/common/Title";
import CardCertificates from "@/components/layouts/card/CardCertificate";
import { certificatesData } from "@/constants/data";

const CertificatesPage = () => {
  return (
    <section className="py-5 lg:py-10">
      <div className="container space-y-4">
        <Title
          title="Certificates"
          desc="Lihat sertifikat yang telah saya dapatkan"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center lg:place-items-start gap-4 lg:gap-x-0 lg:gap-y-8">
          {certificatesData.map((item) => (
            <CardCertificates
              key={item.id}
              title={item.title}
              link={item.link}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default CertificatesPage;
