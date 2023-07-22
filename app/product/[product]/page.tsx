import axios from "@/lib/axios";
import ProductDetails from "../components/ProductDetails";
import { Product } from "@/types/types";

async function getProduct(product: string): Promise<Product> {
  const { data } = await axios.get(`products/${product}?populate=*`, {});
  return data.data;
}

export default async function Product({
  params,
}: {
  params: { product: string };
}) {
  const productData = await getProduct(params.product);
  console.log(productData);
  return <ProductDetails data={productData} />;
}
