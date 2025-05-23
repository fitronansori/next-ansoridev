interface MDXLayoutProps {
  children: React.ReactNode;
}

export default function MDXLayout({ children }: MDXLayoutProps) {
  return (
    <div className="lg:!max-w-none prose dark:prose-invert">{children}</div>
  );
}
