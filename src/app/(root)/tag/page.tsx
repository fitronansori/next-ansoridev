import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import { wisp } from "@/lib/wisp";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Tags",
    description: "Different blog post categories",
    openGraph: {
      title: "Tags",
      description: "Different blog post categories",
      images: [
        signOgImageUrl({
          title: "Blog Post Categories",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

export default async function Page() {
  const result = await wisp.getTags();

  return (
    <div className="container py-5 lg:py-10">
      <div className="text-center">
        <h1 className="mb-2 text-3xl md:text-5xl font-bold">Tags</h1>
        <p className="md:text-lg opacity-50">List of all tags</p>
      </div>

      <div className="my-10 max-w-6xl mx-auto text-balance text-center text-xl mb-48">
        {result.tags.map((tag) => (
          <Link
            key={tag.id}
            href={`/tag/${tag.name}`}
            className="text-primary mr-2 inline-block"
          >
            #{tag.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
