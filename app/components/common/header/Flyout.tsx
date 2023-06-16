"use client";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { classNames } from "@/lib/classNames";
import { CategoryAttributes, CategoryTagAttributes, Page } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { extractLargestPhoto } from "@/lib/extractPhotos";

export default function Flyout({ data }: { data: Page }) {
  return (
    <Popover.Group className="hidden lg:block lg:self-stretch">
      <div className="flex h-full space-x-8">
        {data.data.map(({ attributes }: any) =>
          attributes.categories.data.length >= 1 ? (
            <Popover key={attributes.slug} className="flex">
              {({ open }) => (
                <>
                  <div className="relative flex">
                    <Popover.Button
                      className={classNames(
                        open
                          ? "border-indigo-600 text-indigo-600"
                          : "border-transparent text-gray-700 hover:text-gray-800",
                        "relative z-10 -mb-px flex items-center  pt-px text-sm font-medium transition-colors duration-200 ease-out"
                      )}
                    >
                      {attributes.title}
                    </Popover.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                      {" "}
                      <div
                        className="absolute inset-0 top-1/2 bg-white shadow"
                        aria-hidden="true"
                      />
                      <div className="relative bg-white">
                        <div className="mx-auto max-w-7xl px-8">
                          <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                            <div className="col-start-2 grid grid-cols-2 gap-x-8">
                              {attributes.categories.data.map(
                                ({
                                  attributes,
                                }: {
                                  attributes: CategoryAttributes;
                                }) => (
                                  <>
                                    {attributes.category_tags.data.map(
                                      ({
                                        attributes,
                                      }: {
                                        attributes: CategoryTagAttributes;
                                      }) => (
                                        <>
                                          {attributes.feature?.data && (
                                            <div>
                                              <div
                                                key={
                                                  attributes.feature?.data
                                                    ?.attributes?.category_tag
                                                    ?.data.attributes.slug
                                                }
                                                className="group relative text-base sm:text-sm cursor-pointer shadow-sm"
                                              >
                                                <div className=" bg-gray-100 group-hover:opacity-50 transition h-64">
                                                  <Image
                                                    src={
                                                      extractLargestPhoto(
                                                        attributes.feature.data
                                                          .attributes.cover
                                                      ).url
                                                    }
                                                    fill
                                                    alt={
                                                      extractLargestPhoto(
                                                        attributes.feature.data
                                                          .attributes.cover
                                                      ).alternativeText
                                                    }
                                                    className="border object-cover h-64"
                                                  />
                                                </div>
                                              </div>
                                              <div>
                                                <Link
                                                  href={
                                                    attributes.feature?.data
                                                      ?.attributes?.category_tag
                                                      ?.data.attributes.slug ||
                                                    ""
                                                  }
                                                  className="mt-6 block font-medium text-gray-900"
                                                >
                                                  <span
                                                    className=""
                                                    aria-hidden="true"
                                                  />
                                                  {
                                                    attributes.feature?.data
                                                      ?.attributes?.category_tag
                                                      ?.data.attributes.title
                                                  }
                                                </Link>
                                                <p
                                                  aria-hidden="true"
                                                  className="mt-1"
                                                >
                                                  Shop now
                                                </p>
                                              </div>
                                            </div>
                                          )}
                                        </>
                                      )
                                    )}
                                  </>
                                )
                              )}
                            </div>
                            <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                              {attributes.categories.data.map(
                                ({
                                  attributes,
                                }: {
                                  attributes: CategoryAttributes;
                                }) => (
                                  <div key={attributes.title}>
                                    <Link
                                      href={attributes.slug}
                                      id={`${attributes.title}-heading`}
                                      className="text-gray-900 text-xs font-bold"
                                    >
                                      {attributes.title}
                                    </Link>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${attributes.title}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {attributes.category_tags.data.map(
                                        ({ attributes }) => (
                                          <li
                                            key={attributes.slug}
                                            className="flex"
                                          >
                                            <Link
                                              href={attributes.slug}
                                              className="hover:text-gray-800"
                                            >
                                              {attributes.title}
                                            </Link>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          ) : (
            <div key={attributes.slug} className="relative flex">
              <Link
                href={`/${attributes.slug || ""}`}
                className={
                  "border-transparent text-gray-700 hover:text-gray-800 relative z-10 -mb-px flex items-center  pt-px text-sm font-medium transition-colors duration-200 ease-out"
                }
              >
                {attributes.title}
              </Link>
            </div>
          )
        )}
      </div>
    </Popover.Group>
  );
}
