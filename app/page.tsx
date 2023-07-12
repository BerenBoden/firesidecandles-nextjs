import Featured from "@/app/components/home/Featured";
import Showcase from "@/app/components/home/Showcase";
import Special from "@/app/components/home/Special";
import Products from "@/app/components/home/Products";
import Posts from "@/app/components/home/Posts";
import Testimonials from "@/app/components/home/Testimonials";
import Incentives from "./components/home/Incentives";
import { Metadata } from "next";
import Image from "next/image";
import { Home } from "@/types/types";
import { Page } from "@/types/types";
import axios from "@/lib/axios";

async function getHomePage(): Promise<Home> {
  const { data } = await axios.get(
    `home?populate[featured_products][populate][0]=covers&populate=meta_data&populate[call_to_action][populate][0]=cover&populate[features][populate][0]=cover`,
    {}
  );
  return data;
}

export async function generateMetadata() {
  const { data } = await getHomePage();

  const metadata: Metadata = {
    title: data.attributes.meta_data.meta_title,
    description: data.attributes.meta_data.meta_description,
    robots: `${
      data.attributes.meta_data.indexed ? "FOLLOW, INDEX" : "NOFOLLOW, NOINDEX"
    }`,
  };
  return metadata;
}

export default async function Home() {
  const { data } = await getHomePage();

  return (
    <>
      <div className="w-full">
        <Showcase data={data.attributes.call_to_action} />
      </div>
      <div className="max-w-7xl mx-auto 2xl:px-8 xl:px-8 lg:px-8 md:px-8 px-2">
        <div className="my-16" />
        <Featured data={data.attributes.features.data} />
      </div>
      <div className="max-w-7xl mx-auto 2xl:px-8 xl:px-8 lg:px-8 md:px-8 px-2">
        <div className="my-16" />
        <Special />
      </div>
      <div className="max-w-7xl mx-auto 2xl:px-8 xl:px-8 lg:px-8 md:px-8 px-2">
        <div className="my-16" />
        <Products data={data.attributes.featured_products.data} />
      </div>
      <div className="relative">
        <div className="absolute w-full h-full">
          <Image src={"/banner4.jpg"} fill alt="background" />
        </div>
        <div className="max-w-7xl mx-auto 2xl:px-8 xl:px-8 lg:px-8 md:px-8 px-2">
          <div className="my-16" />
          <Testimonials />
        </div>
      </div>
      <div className="max-w-7xl mx-auto 2xl:px-8 xl:px-8 lg:px-8 md:px-8 px-2">
        <div className="my-16" />
        {/* <Posts posts={data.attributes.featured_products} /> */}
      </div>
      <div className="max-w-7xl mx-auto 2xl:px-8 xl:px-8 lg:px-8 md:px-8 px-2">
        <div className="my-16" />
        <Incentives />
      </div>
      <div className="my-16" />
    </>
  );
}
