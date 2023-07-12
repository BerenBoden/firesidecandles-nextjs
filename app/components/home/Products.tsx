"use client";
import { Product as ProductData, Products } from "@/types/types";
import Product from "../common/elements/Product";

export default function Products(data: Products) {
  return (
    <div className="bg-white">
      <div className="mx-auto">
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 xl:gap-x-8">
          {data.data?.map(({ attributes, id }: ProductData) => (
            <Product attributes={attributes} id={id} />
          ))}
        </div>
      </div>
    </div>
  );
}
