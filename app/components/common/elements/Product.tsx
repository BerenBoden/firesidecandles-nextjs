"use client";
import { useEffect, useState } from "react";
import { extractLastPhotos } from "@/utils/extractPhotos";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { Product } from "@/types/types";
import { ShoppingBagIcon, HeartIcon } from "@heroicons/react/24/outline";
import { addProductToItemList } from "@/app/store/slices/itemListReducer";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

export default function Product({ attributes, id }: Product) {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number | null>(null);
  const { type } = useAppSelector((state) => state.itemList.openState);
  console.log(type);
  const { products } = useAppSelector((state) => state.itemList[type]);
  useEffect(() => {
    let items;
    if (products) {
      items = products.find((product) => product.id === id);
      setQuantity(items?.quantity || null);
    }
  }, [products]);
  return (
    <div key={id} className="group relative">
      <div className="mb-1 aspect-h-1 aspect-w-1 w-full overflow-hidden shadow-sm border transition bg-gray-200 lg:aspect-none group-hover:opacity-75 cursor-pointer lg:h-80">
        <Image
          src={extractLastPhotos(attributes.covers).url}
          alt={extractLastPhotos(attributes.covers).alternativeText}
          width={500}
          height={500}
          className="h-64 w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="w-full flex">
        <Button
          onClick={() => dispatch(addProductToItemList({ id, type: "cart" }))}
          className="w-1/2 py-2 flex justify-center text-black items-center bg-opacity-0 border shadow-sm hover:opacity-50 cursor-pointer"
        >
          <ShoppingBagIcon className="w-6  text-black mr-2" />{" "}
          {/* <p className="text-black font-thin">{quantity}</p> */}
        </Button>{" "}
        <Button
          onClick={() =>
            dispatch(addProductToItemList({ id, type: "wishlist" }))
          }
          className="w-1/2 py-2 flex justify-center items-center bg-opacity-0 border shadow-sm hover:opacity-50 cursor-pointer"
        >
          <HeartIcon className="w-6 text-black" />
        </Button>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/shop/${attributes.slug}`}>
              {/* <span aria-hidden="true" className="absolute inset-0" /> */}
              {attributes.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{attributes.content}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{attributes.price}</p>
      </div>
    </div>
  );
}
