import type { MDXComponents } from "mdx/types";
import MDXLayout from "./components/mdx/MDXLayout";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    layout: MDXLayout,
    ...components,
  };
}
