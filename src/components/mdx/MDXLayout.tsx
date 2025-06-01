interface MDXLayoutProps {
  children: React.ReactNode;
}

export default function MDXLayout({ children }: MDXLayoutProps) {
  return (
    <div className="p-4 lg:p-0 prose dark:prose-invert max-w-full w-full break-words prose-img:mx-auto prose-img:max-w-full prose-table:w-full prose-table:overflow-x-auto prose-pre:whitespace-pre-wrap prose-pre:break-words">
      {children}
    </div>
  );
}
