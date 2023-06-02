import Featured from "@/components/page/Featured";
import Showcase from "@/components/page/Showcase";
import Special from "@/components/page/Special";
import Footer from "@/components/common/Footer";
import Products from "@/components/page/Products";

export default function Home() {
  return (
    <>
      <div className="h-42" />
      <Showcase />
      <div className="max-w-7xl mx-auto p-6 lg:px-8">
        <Featured />
        <Special />
        <Products />
      </div>
      <Footer />
    </>
  );
}
