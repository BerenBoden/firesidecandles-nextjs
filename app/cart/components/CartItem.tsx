import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { Product } from "@/types/types";
import { extractLastPhotos } from "@/utils/extractPhotos";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  removeProductFromItemList,
  addProductToItemList,
} from "@/app/store/slices/itemListReducer";
import Button from "@/app/components/common/elements/Button";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function CartItem({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  const { type } = useAppSelector((state) => state.itemList.openState);
  const products = useAppSelector((state) => state.itemList[type].products);
  const { id, attributes } = product;
  return (
    <li key={id} className="flex py-6 sm:py-10">
      <div className="flex-shrink-0 cursor-pointer">
        <Link href={attributes.slug}>
          <Image
            src={extractLastPhotos(product.attributes.covers).url}
            alt={extractLastPhotos(product.attributes.covers).alternativeText}
            width={500}
            height={500}
            className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
          />
        </Link>
      </div>

      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <div className="flex justify-between">
              <h3 className="text-sm">
                <Link
                  href={`shop/${attributes.slug}`}
                  className="font-medium text-gray-700 hover:text-gray-800"
                >
                  {attributes.title}
                </Link>
              </h3>
            </div>
          </div>

          <div className="mt-4 sm:mt-0 sm:pr-9">
            <label htmlFor={`quantity`} className="sr-only">
              Quantity,{" "}
              {products.find((product) => product.id === id)?.quantity || 0}
            </label>

            {products.find((product) => product.id === id)?.quantity || 0}
            <div className="absolute right-0 top-0">
              <Button
                onClick={() =>
                  dispatch(removeProductFromItemList({ id, type }))
                }
                type="button"
                className="-m-2 mr-2 bg-opacity-0 inline-flex p-2 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Remove</span>
                {type === "cart" ? (
                  <MinusIcon
                    className="h-5 w-5 text-black"
                    aria-hidden="true"
                  />
                ) : (
                  <XMarkIcon className="h-5 w-5 text-black" />
                )}
              </Button>
              {type === "cart" && (
                <Button
                  onClick={() => dispatch(addProductToItemList({ id, type }))}
                  type="button"
                  className="-m-2 bg-opacity-0 inline-flex p-2 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Remove</span>
                  <PlusIcon className="h-5 w-5 text-black" aria-hidden="true" />
                </Button>
              )}
            </div>
          </div>
        </div>

        <p className="mt-4 flex space-x-2 text-sm text-gray-700">
          {/* {product.inStock ? (
            <CheckIcon
              className="h-5 w-5 flex-shrink-0 text-green-500"
              aria-hidden="true"
            />
          ) : (
            <ClockIcon
              className="h-5 w-5 flex-shrink-0 text-gray-300"
              aria-hidden="true"
            />
          )}

          <span>
            {product.inStock ? "In stock" : `Ships in ${product.leadTime}`}
          </span> */}
        </p>
      </div>
    </li>
  );
}
