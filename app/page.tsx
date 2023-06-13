import Featured from "@/components/page/Featured";
import Showcase from "@/components/page/Showcase";
import Special from "@/components/page/Special";
import Products from "@/components/page/Products";

export default function Home() {
  return (
    <>
      <Showcase />
      <div className="max-w-7xl mx-auto xl:px-0 px-8">
        <div className="my-16" />
        <Featured />
        <div className="my-16" />
        <Special />
        <div className="my-16" />
        <Products />
        <div className="my-16" />
      </div>
    </>
  );
}
