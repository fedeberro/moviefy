import {
  Pagination as PaginationUI,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useMemo } from "react";

interface Props {
  pageSize: number;
  page: number;
  totalResults: number;
  changePage: (value: number) => void;
}

export function Pagination({
  pageSize,
  page,
  totalResults,
  changePage,
}: Props) {
  const totalPages = useMemo(
    () => Math.ceil(totalResults / pageSize),
    [pageSize, totalResults]
  );
  const handleAddPage = () => {
    if (page < totalPages) changePage(page + 1);
  };

  const handleRemovePage = () => {
    if (page > 0) changePage(page - 1);
  };

  const handleSetPage = (value: number) => {
    if (value <= totalPages) changePage(value);
  };

  return (
    <PaginationUI>
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious href="#" onClick={handleRemovePage} />
          </PaginationItem>
        )}
        {page !== 1 && (
          <>
            <PaginationItem className="hidden md:flex">
              <PaginationLink href="#" onClick={() => handleSetPage(1)}>
                1
              </PaginationLink>
            </PaginationItem>

            <PaginationItem className="hidden md:flex">
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}
        {page - 1 > 0 && (
          <PaginationItem>
            <PaginationLink href="#" onClick={handleRemovePage}>
              {page - 1}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href="#" isActive>
            {page}
          </PaginationLink>
        </PaginationItem>
        {page + 1 <= totalPages && (
          <PaginationItem>
            <PaginationLink href="#" onClick={handleAddPage}>
              {page + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {page !== totalPages && (
          <>
            <PaginationItem className="hidden md:flex">
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem className="hidden md:flex">
              <PaginationLink
                href="#"
                onClick={() => handleSetPage(totalPages)}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        {page !== totalPages && (
          <PaginationItem>
            <PaginationNext href="#" onClick={handleAddPage} />
          </PaginationItem>
        )}
      </PaginationContent>
    </PaginationUI>
  );
}
