import Featured from "@/app/components/home/Featured";
import Showcase from "@/app/components/home/Showcase";
import Special from "@/app/components/home/Special";
import Products from "@/app/components/home/Products";
import Incentives from "./components/home/Incentives";
import { Metadata } from "next";

async function getHomePage() {
  const res = await fetch(
    "https://firesidecandles-strapi-production.up.railway.app/api/home?populate[featured_products][populate][0]=covers&populate=meta_data"
  );
  const data = await res.json();
  return data;
}

export async function generateMetadata() {
  const { data } = await getHomePage();

  const metadata: Metadata = {
    title: data.attributes.meta_data.meta_title,
    description: data.attributes.meta_data.description,
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
      <Showcase />
      <div className="max-w-7xl mx-auto xl:px-0 px-8">
        <div className="my-16" />
        <Featured />
        <div className="my-16" />
        <Special />
        <div className="my-16" />
        <Products data={data.attributes.featured_products} />
        <div className="my-16" />
        <Incentives />
        <div className="my-16" />
      </div>
    </>
  );
}
