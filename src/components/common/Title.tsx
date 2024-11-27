type TitleProps = {
  title: string;
  desc: string;
};

const Title = ({ title, desc }: TitleProps) => {
  return (
    <div>
      <h3 className="text-3xl sm:text-4xl font-bold text-center lg:text-start">
        {title}
      </h3>
      <p className="sm:text-lg font-semibold text-center lg:text-start">
        {desc}
      </p>
    </div>
  );
};
export default Title;
