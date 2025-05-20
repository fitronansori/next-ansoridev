import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useMDXComponents } from "@/mdx-components";
import TutorialHeader from "@/components/layouts/TutorialHeader";

interface PageProps {
  params: Promise<{ slug: string }>;

  searchParams?: Promise<{ content?: string }>;
}

const TUTORIALS_PATH = path.join(process.cwd(), "src/content/tutorial");

function getContentList(slug: string) {
  const dir = path.join(TUTORIALS_PATH, slug);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .sort()
    .map((f) => ({
      file_name: f,
      clean_file_name: f.replace(/^[0-9]+-/, "").replace(/\.mdx$/, ""),
      title: f
        .replace(/^[0-9]+-/, "")
        .replace(/\.mdx$/, "")
        .replace(/-/g, " "),
    }));
}

function getContent(slug: string, file: string) {
  const file_path = path.join(TUTORIALS_PATH, slug, file);
  if (!fs.existsSync(file_path)) return null;
  return fs.readFileSync(file_path, "utf8");
}

export default async function Page(props: PageProps) {
  const awaitedParams = await props.params;
  const awaitedSearchParams = props.searchParams
    ? await props.searchParams
    : {};
  const { slug } = awaitedParams;
  const list = getContentList(slug);
  const selected =
    awaitedSearchParams?.content || (list[0]?.clean_file_name ?? null);
  const fileObj = list.find((l) => l.clean_file_name === selected);
  const source =
    selected && fileObj ? getContent(slug, fileObj.file_name) : null;
  if (!source) return notFound();

  return (
    <>
      <SidebarProvider>
        <AppSidebar
          items={list.map((item) => ({
            title: item.title.charAt(0).toUpperCase() + item.title.slice(1),
            url: `?content=${encodeURIComponent(item.clean_file_name)}`,
            is_active: selected === item.clean_file_name,
          }))}
        />

        <div className="w-full bg-background">
          <TutorialHeader title={slug} />

          <div className="max-w-screen prose flex gap-4">
            <div className="w-full p-4">
              <MDXRemote source={source} components={useMDXComponents} />
            </div>

            <div className="hidden w-full max-w-[350px] border-l p-4">asas</div>
          </div>
        </div>
      </SidebarProvider>
    </>
  );
}
