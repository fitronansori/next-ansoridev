import {
  Pagination as UIPagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  list: Array<{ clean_file_name: string }>;
  selected: string;
  onNavigate?: (file_name: string) => void;
}

function getPagination(
  list: Array<{ clean_file_name: string }>,
  selected: string
) {
  const index = list.findIndex((item) => item.clean_file_name === selected);
  const prev = index > 0 ? list[index - 1].clean_file_name : null;
  const next = index < list.length - 1 ? list[index + 1].clean_file_name : null;
  return { prev, next };
}

const Pagination: React.FC<PaginationProps> = ({ list, selected }) => {
  const { prev, next } = getPagination(list, selected);

  return (
    <UIPagination>
      <PaginationContent className="gap-0 border rounded-lg divide-x overflow-hidden">
        <PaginationItem>
          <PaginationPrevious
            href={prev ? `?content=${encodeURIComponent(prev)}` : undefined}
            className="rounded-none"
            aria-disabled={!prev}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={next ? `?content=${encodeURIComponent(next)}` : undefined}
            className="rounded-none"
            aria-disabled={!next}
          />
        </PaginationItem>
      </PaginationContent>
    </UIPagination>
  );
};

export default Pagination;
