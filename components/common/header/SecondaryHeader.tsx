"use client";
import { useState, Fragment } from "react";
import { Transition, Dialog, Tab } from "@headlessui/react";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
  HeartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Flyout from "./Flyout";
import { classNames } from "@/lib/classNames";
import { Page } from "@/types/types";

export default function SecondaryHeader(data: Page) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white px-8 xl:px-0">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {data.data.data.map(({ attributes }: any) => (
                        <Tab
                          key={attributes.title}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {attributes.title}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {data.data.data.map(({ attributes }) => (
                      <Tab.Panel
                        key={attributes.slug}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {/* {attributes.feature.data.map(({attributes}) => (
                            <div
                              key={attributes.title}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={attributes.imageSrc}
                                  alt={attributes.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <Link
                                href={attributes.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {attributes.title}
                              </Link>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))} */}
                        </div>
                        {attributes.categories.data.map(({attributes}) => (
                          <div key={attributes.title}>
                            <p
                              id={`${attributes.slug}-${attributes.slug}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {attributes.title}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${attributes.slug}-${attributes.slug}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {attributes.category_tags.data.map(({attributes}) => (
                                <li key={attributes.title} className="flow-root">
                                  <Link
                                    href={attributes.slug}
                                    className="-m-2 block p-2 text-gray-500"
                                  >
                                    {attributes.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <Link
                      href="/login"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link
                      href="/register"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Create account
                    </Link>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <nav aria-label="Top" className="mx-auto max-w-7xl">
          <div className=" border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              {/* Flyout menus */}
              <Flyout open={open} setOpen={setOpen} data={data} />

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    href="/login"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Sign in
                  </Link>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <Link
                    href="/register"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Create account
                  </Link>
                </div>
                {/* Search */}
                <div className="lg:hidden flex lg:ml-6">
                  <Link
                    href="#"
                    className="p-2 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    href="/wishlist"
                    className="group -m-2 flex items-center p-2"
                  >
                    <HeartIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">
                      items in wishlist, view wishlist
                    </span>
                  </Link>
                </div>
                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    href="/cart"
                    className="group -m-2 flex items-center p-2"
                  >
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
