"use client";
import { Page } from "@/types/types";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import SecondaryHeader from "./SecondaryHeader";

export default function Header({ data }: { data: Page }) {
  return (
    <header className="bg-white fixed w-full h-38">
      <div className="flex items-center justify-between py-6 mx-auto max-w-7xl 2xl:px-8 xl:px-8 lg:px-8 md:px-8 px-2">
        <Link href="/">
          <h1 className="font-dancing text-3xl">firesidecandles</h1>
        </Link>
        <div className="lg:flex flex-1 items-center ml-6 justify-end hidden">
          <div className="w-full max-w-lg">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <input
                id="search"
                name="search"
                className="block w-full bg-white py-1.5 pl-10 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search"
                type="search"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b" />
      <SecondaryHeader {...data} />
    </header>
  );
}
