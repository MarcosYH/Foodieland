import clsx from "clsx";
import Link from "next/link";
import React from "react";

type Pagination = {
  pages: number[];
  className?: string;
};
export const Pagination = ({ pages, className }: Pagination) => {
  return (
    <>
      <nav className={clsx("text-center", className)}>
        <ul className="inline-flex text-base h-10">
          {pages.map((page) => (
            <li key={page}>
              <Link
                href="#"
                className="font-semibold border border-gray-400 py-4 px-6 rounded-2xl hover:bg-gray-950 hover:text-white"
              >
                {page}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#"
              className=" font-semibold border border-gray-400 py-4 px-6 rounded-2xl hover:bg-gray-950 hover:text-white"
            >
              ...
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className=" font-semibold border border-gray-400 py-4 px-6 rounded-2xl hover:bg-gray-950 hover:text-white"
            >
              &gt;
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
