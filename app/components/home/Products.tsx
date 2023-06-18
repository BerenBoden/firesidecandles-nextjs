"use client";
import { Product, Products } from "@/types/types";
import { extractLastPhotos } from "@/lib/extractPhotos";
import Image from "next/image";

export default function Products(data: Products) {
  return (
    <div className="bg-white">
      <div className="mx-auto">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.data?.map(({ attributes, id }: Product) => (
            <div key={id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden shadow border transition bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src={extractLastPhotos(attributes.covers).url}
                  alt={extractLastPhotos(attributes.covers).alternativeText}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={attributes.slug}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {attributes.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {attributes.content}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {attributes.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
