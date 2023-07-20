import axios from "@/lib/axios";
import ProductDetails from "../components/ProductDetails";
import { Product } from "@/types/types";

async function getProduct(product: string): Promise<Product> {
  const { data } = await axios.get(
    `products?filters[slug][$eq]=${product}`,
    {}
  );
  return data;
}

export default async function Product({
  params,
}: {
  params: { product: string };
}) {
  const productData = await getProduct(params.product);
  console.log(productData);
  console.log(params.product);
  return <ProductDetails data={productData} />;
}
