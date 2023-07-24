"use client";
import { extractLastPhotos } from "@/utils/extractPhotos";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { Product } from "@/types/types";
import { ShoppingBagIcon, HeartIcon } from "@heroicons/react/24/outline";
import {
  ShoppingBagIcon as ShoppingBagIconSolid,
  HeartIcon as HeartIconSolid,
} from "@heroicons/react/24/solid";
import { addProductToItemList } from "@/app/store/slices/itemListReducer";
import { useAppDispatch } from "@/app/store/hooks";
import { useItemStatus } from "@/hooks/useItemStatus";

export default function Product({ attributes, id }: Product) {
  const dispatch = useAppDispatch();
  const { isInWishlist, isInCart } = useItemStatus(id);

  return (
    <div key={id} className="group relative">
      <Link href={`/product/${attributes.slug}`}>
        <div className="mb-1 aspect-h-1 aspect-w-1 w-full overflow-hidden shadow-sm border transition bg-gray-200 lg:aspect-none group-hover:opacity-75 cursor-pointer lg:h-80">
          <Image
            src={extractLastPhotos(attributes.covers).url}
            alt={extractLastPhotos(attributes.covers).alternativeText}
            width={500}
            height={500}
            className="h-64 w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
      </Link>
      <div className="w-full flex">
        <Button
          onClick={() => dispatch(addProductToItemList({ id, type: "cart" }))}
          className="w-1/2 py-2 flex justify-center text-black items-center bg-opacity-0 border shadow-sm hover:opacity-50 cursor-pointer"
        >
          {isInCart ? (
            <ShoppingBagIconSolid className="w-6  text-black mr-2" />
          ) : (
            <ShoppingBagIcon className="w-6  text-black mr-2" />
          )}
          {/* <p className="text-black font-thin">{quantity}</p> */}
        </Button>{" "}
        <Button
          onClick={() =>
            dispatch(addProductToItemList({ id, type: "wishlist" }))
          }
          className="w-1/2 py-2 flex justify-center items-center bg-opacity-0 border shadow-sm hover:opacity-50 cursor-pointer"
        >
          {isInWishlist ? (
            <HeartIconSolid className="w-6 text-black" />
          ) : (
            <HeartIcon className="w-6 text-black" />
          )}
        </Button>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/product/${attributes.slug}`}>
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
