import { Page } from "@/types/types";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import SecondaryHeader from "./SecondaryHeader";

async function getNavigation(): Promise<Page> {
  const res = await fetch(
    "https://firesidecandles-strapi-production.up.railway.app/api/pages?sort=id&populate[categories][populate][category_tags][populate][feature][populate][0]=cover,category_tag"
  );
  const navigation = await res.json();
  return navigation;
}

export default async function Header() {
  const NavigationData = await getNavigation();
  return (
    <header className="bg-white fixed w-full ">
      <div className="flex max-w-7xl items-center justify-between py-6 mx-auto px-8 xl:px-0">
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
      <SecondaryHeader {...NavigationData} />
    </header>
  );
}
