"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  ShoppingBagIcon,
  HeartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Flyout from "./Flyout";
import MobileMenu from "./MobileMenu";
import { Page } from "@/types/types";
import { useSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setCartOpen } from "@/app/store/slices/cartReducer";

export default function SecondaryHeader(data: Page) {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.cart.products);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(selector.reduce((acc, curr) => acc + curr.quantity, 0));
  }, []);
  // console.log(total);
  return (
    <div className="bg-white">
      <MobileMenu data={data} open={open} setOpen={setOpen} />
      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl 2xl:px-8 xl:px-8 lg:px-8 md:px-8 px-2"
        >
          <div className=" border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              {/* Flyout menus */}
              <Flyout data={data} />
              {session ? (
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    href="/dashboard"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    My Account
                  </Link>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                </div>
              ) : (
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
              )}
              <div className="ml-auto flex items-center">
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
                  <div className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      onClick={() => dispatch(setCartOpen())}
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      {total && total}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
