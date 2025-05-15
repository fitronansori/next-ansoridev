import { BlogPostsPagination } from "@/components/layouts/Blog/BlogPostPagination";
import { BlogPostsPreview } from "@/components/layouts/Blog/BlogPostPreview";
import { wisp } from "@/lib/wisp";

const BlogPage = async (props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParams = await props.searchParams;
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const result = await wisp.getPosts({ limit: 6, page });

  return (
    <section className="py-5 lg:py-10">
      <div className="container">
        <BlogPostsPreview posts={result.posts} />
        <BlogPostsPagination pagination={result.pagination} />
      </div>
    </section>
  );
};
export default BlogPage;
