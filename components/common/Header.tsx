"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
  HeartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/home" },
  { name: "Shop", href: "/shop" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white fixed w-full">
      <div className="flex max-w-7xl items-center justify-between p-6 lg:px-8 mx-auto">
        <Link href="/">
          <h1 className="font-dancing text-3xl">firesidecandles</h1>
        </Link>
        <div className="md:flex flex-1 items-center ml-6 justify-end hidden">
          <div className="w-full max-w-lg">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <input
                id="search"
                name="search"
                className="block w-full border-b bg-white py-1.5 pl-10 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="md:flex items-center gap-x-12 hidden">
          <div className="hidden md:flex gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm leading-6 text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className=" rounded-md text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex items-center">
          <div className="flex items-center px-4">
            <Link href="/">
              <HeartIcon className="h-6" />
            </Link>
            <p className="text-xs">0</p>
          </div>
          <div className="flex items-center">
            <Link href="/">
              <ShoppingBagIcon className="h-6" />
            </Link>
            <p className="text-xs">0</p>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-40" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="sm:hidden">
              <h1 className="font-dancing text-3xl">firesidecandles</h1>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
