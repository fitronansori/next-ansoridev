type StackProps = {
  title: string;
  children: React.ReactNode;
};

const Stack = ({ title, children }: StackProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h3 className="text-xl font-extrabold tracking-wider uppercase text-center">
        {title}
      </h3>

      <div>{children}</div>
    </div>
  );
};
export default Stack;
