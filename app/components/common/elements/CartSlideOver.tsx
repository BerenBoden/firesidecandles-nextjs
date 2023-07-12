"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setCartOpen } from "@/app/store/slices/cartReducer";
import CartItem from "@/app/cart/components/CartItem";
import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import useCallWithRefresh from "@/hooks/useCallWithRefresh";
import { api } from "@/app/store/api";
import { Products, Product as ProductData } from "@/types/types";
type Product = {
  id: number;
  quantity: number;
};
export default function CartSlideOver({ title }: { title: string }) {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.cart.open);
  const products = useAppSelector((state) => state.cart.products);
  const ids = products.map((product: Product) => product.id);
  const { data }: { data: Products } = useCallWithRefresh(
    api.endpoints.getCartProducts,
    {
      ids,
    }
  );
  console.log(data);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden z-10"
        onClose={() => dispatch(setCartOpen())}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full ">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="pointer-events-auto w-screen max-w-lg h-screen">
                <div className="flex flex-col bg-white shadow-xl h-full overflow-x-hidden">
                  <div className="h-20 flex items-center  px-4 sm:px-6">
                    <div className="h-20 flex items-center justify-center">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          {title}
                        </Dialog.Title>
                        <div className="xl:ml-3 2xl:xl:ml-3 lg:xl:ml-3 md:xl:ml-3 m-0 flex items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onClick={() => dispatch(setCartOpen())}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <form className="">
                    <section
                      aria-labelledby="cart-heading"
                      className="w-full px-4"
                    >
                      <h2 id="cart-heading" className="sr-only">
                        Items in your shopping cart
                      </h2>

                      <ul
                        role="list"
                        className={`divide-y divide-gray-200 border-b ${
                          data?.data?.length > 0 && "border-t"
                        } border-gray-200`}
                      >
                        {data?.data?.map((product: ProductData) => (
                          <CartItem product={product} />
                        ))}
                      </ul>
                    </section>

                    {/* Order summary */}
                    <section
                      aria-labelledby="summary-heading"
                      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
                    >
                      <h2
                        id="summary-heading"
                        className="text-lg font-medium text-gray-900"
                      >
                        Order summary
                      </h2>

                      <dl className="mt-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <dt className="text-sm text-gray-600">Subtotal</dt>
                          <dd className="text-sm font-medium text-gray-900">
                            $99.00
                          </dd>
                        </div>
                        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                          <dt className="flex items-center text-sm text-gray-600">
                            <span>Shipping estimate</span>
                            <a
                              href="#"
                              className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">
                                Learn more about how shipping is calculated
                              </span>
                              <QuestionMarkCircleIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </a>
                          </dt>
                          <dd className="text-sm font-medium text-gray-900">
                            $5.00
                          </dd>
                        </div>
                        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                          <dt className="flex text-sm text-gray-600">
                            <span>Tax estimate</span>
                            <a
                              href="#"
                              className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">
                                Learn more about how tax is calculated
                              </span>
                              <QuestionMarkCircleIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </a>
                          </dt>
                          <dd className="text-sm font-medium text-gray-900">
                            $8.32
                          </dd>
                        </div>
                        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                          <dt className="text-base font-medium text-gray-900">
                            Order total
                          </dt>
                          <dd className="text-base font-medium text-gray-900">
                            $112.32
                          </dd>
                        </div>
                      </dl>

                      <div className="mt-6">
                        <button
                          type="submit"
                          className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                        >
                          Checkout
                        </button>
                      </div>
                    </section>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
