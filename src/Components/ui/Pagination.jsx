"use client";
import { useEffect, useState } from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import clsx from 'clsx';
import Link from 'next/link';
import { generatePagination } from '@/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Math.max(1, Number(searchParams.get('page'))) || 1;
  const [allPages, setAllPages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const pages = await generatePagination(currentPage, totalPages.value); 
      setAllPages(pages);
    };

    fetchData();
  }, [currentPage, totalPages]);

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  return (
    <div className="inline-flex p-2">
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      >
        <AiOutlineDoubleLeft />
      </PaginationArrow>

      <div className="flex -space-x-px">
        {allPages.map((page, index) => {
          let position;

          if (index === 0) position = "first";
          if (index === allPages.length - 1) position = "last";
          if (allPages.length === 1) position = "single";
          if (page === "...") position = "middle";

          return (
            <PaginationNumber
              key={page}
              href={createPageURL(page)}
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          );
        })}
      </div>

      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages.value}
      >
        <AiOutlineDoubleRight />
      </PaginationArrow>
    </div>
  );
}

function PaginationNumber({ page, href, isActive, position }) {
  const className = clsx(
    "flex h-8 w-8 items-center justify-center text-sm border rounded",
    {
      "": position === "first" || position === "single",
      "": position === "last" || position === "single",
      "z-10 bg-verde text-black": isActive,
      "hover:bg-gray-100 hover:shadow-lg": !isActive && position !== "middle",
      "text-gray-300": position === "middle",
    }
  );

  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
     <span>{page}</span>
    </Link>
  );
}

function PaginationArrow({ href, direction, isDisabled, children }) {
  const className = clsx("flex h-8 w-8 items-center justify-center border rounded", {
    "pointer-events-none text-gray-400": isDisabled,
    "hover:bg-gray-100 hover:shadow-lg": !isDisabled,
    "mr-2 md:mr-4": direction === "left",
    "ml-2 md:ml-4": direction === "right",
  });

  return isDisabled ? (
    <div className={className}>{children}</div>
  ) : (
    <Link href={href}>
      <span className={className}>{children}</span>
    </Link>
  );
}
