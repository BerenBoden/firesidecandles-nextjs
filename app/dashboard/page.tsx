"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
// import { useGetOrdersQuery } from "../store/services/orderService";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect, useState } from "react";
import { api } from "@/app/store/api";

const orders = [
  {
    number: "WU88191111",
    href: "#",
    invoiceHref: "#",
    createdDate: "Jul 6, 2021",
    createdDatetime: "2021-07-06",
    deliveredDate: "July 12, 2021",
    deliveredDatetime: "2021-07-12",
    total: "$160.00",
    products: [
      {
        id: 1,
        name: "Micro Backpack",
        description:
          "Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.",
        href: "#",
        price: "$70.00",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg",
        imageAlt:
          "Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.",
      },
      // More products...
    ],
  },
  // More orders...
];

export default function Page() {
  const dispatch = useAppDispatch();
  const { data: session, update } = useSession();
  useEffect(() => {
    const result = dispatch(api.endpoints.getOrders.initiate("Orders"));
    return result.unsubscribe;
  }, [dispatch]);
  const orders = useAppSelector(api.endpoints.getOrders.select("Orders"));
  console.log(`BEFORE:`, session?.jwt);
  console.log(`BEFORE:`, orders);
  useEffect(() => {
    if (orders.error) {
      (async () => {
        await update({
          ...session,
          jwt: orders.error.data.error.details,
        });
      })();
    }
  }, []);
  console.log(`AFTER:`, session?.jwt);
  console.log(`AFTER:`, orders);
  return (
    <main className="py-24">
      <div className="mx-auto max-w-7xl 2xl:px-8 xl:px-8 lg:px-8 md:px-8 px-2">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Order history
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Check the status of recent orders, manage returns, and discover
          similar products.
        </p>
      </div>

      <section aria-labelledby="recent-heading" className="mt-16">
        <h2 id="recent-heading" className="sr-only">
          Recent orders
        </h2>
        <div className="mx-auto max-w-7xl 2xl:px-8 xl:px-8 lg:px-8 md:px-8 px-2">
          {/*  */}
        </div>
      </section>
    </main>
  );
}
