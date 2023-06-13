import { Page } from "@/types/types";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import SecondaryHeader from "./SecondaryHeader";

// const navigation: Navigation = {
//   pages: [
//     {
//       id: "home",
//       name: "Home",
//       href: "/",
//       features: [],
//       categories: [],
//     },
//     {
//       id: "candles",
//       name: "Candles",
//       features: [
//         {
//           id: "christmas-candles",
//           name: "Christmas Candles",
//           href: "/christmas-candles",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
//           imageAlt:
//             "Models sitting back to back, wearing Basic Tee in black and bone.",
//         },
//         {
//           id: "winter-candles",
//           name: "Winter Candles",
//           href: "/winter-candles",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
//           imageAlt:
//             "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
//         },
//       ],
//       categories: [
//         {
//           id: "seasonal-candles",
//           name: "Seasonal Candles",
//           href: "/seasonal-candles",
//           tags: [
//             {
//               id: "christmas-candles",
//               name: "Christmas Candles",
//               href: "/winter-candles",
//        // const navigation: Navigation = {
//   pages: [
//     {
//       id: "home",
//       name: "Home",
//       href: "/",
//       features: [],
//       categories: [],
//     },
//     {
//       id: "candles",
//       name: "Candles",
//       features: [
//         {
//           id: "christmas-candles",
//           name: "Christmas Candles",
//           href: "/christmas-candles",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
//           imageAlt:
//             "Models sitting back to back, wearing Basic Tee in black and bone.",
//         },
//         {
//           id: "winter-candles",
//           name: "Winter Candles",
//           href: "/winter-candles",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
//           imageAlt:
//             "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
//         },
//       ],
//       categories: [
//         {
//           id: "seasonal-candles",
//           name: "Seasonal Candles",
//           href: "/seasonal-candles",
//             },
//             {
//               id: "winter-candles",
//               name: "Winter Candles",
//               href: "/winter-candles",
//             },
//             {
//               id: "spring-candles",
//               name: "Spring Candles",
//               href: "/scented-candles",
//             },
//             {
//               id: "summer-candles",
//               name: "Summer Candles",
//               href: "/scented-candles",
//             },
//             {
//               id: "holiday-candles",
//               name: "Holiday Candles",
//               href: "/scented-candles",
//             },
//             {
//               id: "autumn-candles",
//               name: "Autumn Candles",
//               href: "/scented-candles",
//             },
//             {
//               id: "scented-candles",
//               name: "Scented Candles",
//               href: "/scented-candles",
//             },
//           ],
//         },
//         {
//           id: "candle-varities",
//           name: "Candle Varities",
//           href: "/candle-varities",
//           tags: [
//             {
//               id: "scented-candles",
//               name: "Scented Candles",
//               href: "/scented-candles",
//             },
//             {
//               id: "pillar-candles",
//               name: "Pillar Candles",
//               href: "/pillar-candles",
//             },
//             {
//               id: "floating-candles",
//               name: "Floating Candles",
//               href: "/floating-candles",
//             },
//             {
//               id: "votive-candles",
//               name: "Votive Candles",
//               href: "/votive-candles",
//             },
//             {
//               id: "tealight-candles",
//               name: "Tealight Candles",
//               href: "/tealight-candles",
//             },
//             {
//               id: "taper-candles",
//               name: "Taper Candles",
//               href: "/taper-candles",
//             },
//             {
//               id: "beeswax-candles",
//               name: "Beeswax Candles",
//               href: "/beeswax-candles",
//             },
//             { id: "soy-candles", name: "Soy Candles", href: "/soy-candles" },
//           ],
//         },
//         {
//           id: "candle-sets",
//           name: "Candle Sets",
//           href: "/candle-sets",
//           tags: [
//             {
//               id: "wedding-candles",
//               name: "Wedding Candle Sets",
//               href: "/wedding-candles",
//             },
//             {
//               id: "holiday-candle-sets",
//               name: "Holiday Candle Sets",
//               href: "/holiday-candle-sets",
//             },
//             {
//               id: "gift-candle-sets",
//               name: "Gift Candle Sets",
//               href: "/gift-candle-sets",
//             },
//             {
//               id: "luxury-candle-sets",
//               name: "Luxury Candle Sets",
//               href: "/luxury-candle-sets",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: "oils-&-fragrances",
//       name: "Oils & Fragrances",
//       features: [
//         {
//           id: "essential-oils",
//           name: "Essential Oils",
//           href: "/essential-oils",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
//           imageAlt:
//             "Models sitting back to back, wearing Basic Tee in black and bone.",
//         },
//         {
//           id: "fragrance-oils",
//           name: "Winter Candles",
//           href: "/winter-candles",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
//           imageAlt:
//             "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
//         },
//       ],
//       categories: [
//         {
//           id: "essential-oils",
//           name: "Essential Oils",
//           href: "/essential-oils",
//           tags: [
//             { id: "lavender-oil", name: "Lavender Oil", href: "/lavender-oil" },
//             {
//               id: "peppermint-oil",
//               name: "Peppermint Oil",
//               href: "/peppermint-oil",
//             },
//             {
//               id: "eucalyptus-oil",
//               name: "Eucalyptus Oil",
//               href: "/eucalyptus-oil",
//             },
//             { id: "tea-tree-oil", name: "Tea Tree Oil", href: "/tea-tree-oil" },
//             { id: "lemon-oil", name: "Lemon Oil", href: "/lemon-oil" },
//             {
//               id: "frankincense-oil",
//               name: "Frankincense Oil",
//               href: "/frankincense-oil",
//             },
//             { id: "rosemary-oil", name: "Rosemary Oil", href: "/rosemary-oil" },
//             {
//               id: "ylang-ylang-oil",
//               name: "Ylang Ylang Oil",
//               href: "/ylang-ylang-oil",
//             },
//           ],
//         },
//         {
//           id: "essential-oil-sets",
//           name: "Essential Oil Sets",
//           href: "/essential-oil-sets",
//           tags: [
//             { id: "starter-sets", name: "Starter Sets", href: "/starter-sets" },
//             {
//               id: "therapeutic-sets",
//               name: "Therapeutic Sets",
//               href: "/therapeutic-sets",
//             },
//             {
//               id: "aromatherapy-sets",
//               name: "Aromatherapy Sets",
//               href: "/aromatherapy-sets",
//             },
//             { id: "floral-sets", name: "Floral Sets", href: "/floral-sets" },
//             { id: "citrus-sets", name: "Citrus Sets", href: "/citrus-sets" },
//             { id: "woodsy-sets", name: "Woodsy Sets", href: "/woodsy-sets" },
//           ],
//         },
//         {
//           id: "essential-oil-diffusers",
//           name: "Essential Oil Diffusers",
//           href: "/essential-oil-diffusers",
//           tags: [
//             {
//               id: "ultrasonic-diffusers",
//               name: "Ultrasonic Diffusers",
//               href: "/ultrasonic-diffusers",
//             },
//             {
//               id: "nebulizing-diffusers",
//               name: "Nebulizing Diffusers",
//               href: "/nebulizing-diffusers",
//             },
//             {
//               id: "evaporative-diffusers",
//               name: "Evaporative Diffusers",
//               href: "/evaporative-diffusers",
//             },
//             {
//               id: "heat-diffusers",
//               name: "Heat Diffusers",
//               href: "/heat-diffusers",
//             },
//             {
//               id: "humidifying-diffusers",
//               name: "Humidifying Diffusers",
//               href: "/humidifying-diffusers",
//             },
//             {
//               id: "portable-diffusers",
//               name: "Portable Diffusers",
//               href: "/portable-diffusers",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: "soap-&-bodaycare",
//       name: "Soap & Bodycare",
//       features: [
//         {
//           id: "shower-gels",
//           name: "Shower Gels",
//           href: "/shop",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
//           imageAlt:
//             "Drawstring top with elastic loop closure and textured interior padding.",
//         },
//         {
//           id: "bath-salts",
//           name: "Bath Salts",
//           href: "/bath-salts",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//       ],
//       categories: [
//         {
//           id: "bodycare",
//           name: "Hand Soaps",
//           href: "/hand-soaps",
//           tags: [
//             { id: "hand-soaps", name: "Hand Soaps", href: "/hand-soaps" },
//             { id: "body-soaps", name: "Body Soaps", href: "/body-soaps" },
//             { id: "shower-gels", name: "Shower Gels", href: "/shower-gels" },
//             { id: "body-scrubs", name: "Body Scrubs", href: "/body-scrubs" },
//             { id: "body-oils", name: "Body Oils", href: "/body-oils" },
//             { id: "bath-salts", name: "Bath Salts", href: "/bath-salts" },
//             { id: "bath-bombs", name: "Bath Bombs", href: "/bath-bombs" },
//           ],
//         },
//         {
//           id: "soaps",
//           name: "Soaps",
//           href: "/soaps",
//           tags: [
//             {
//               id: "soap-making-kits",
//               name: "Soap Making Kits",
//               href: "/soap-making-kits",
//             },
//             {
//               id: "melt-&-pour-soap",
//               name: "Melt & Pour Soap",
//               href: "/melt-&-pour-soap",
//             },
//             { id: "sanitizers", name: "Sanitizers", href: "/sanitizers" },
//           ],
//         },
//       ],
//     },
//     {
//       id: "blog",
//       name: "Blog",
//       href: "/blog",
//       features: [],
//       categories: [],
//     },
//     {
//       id: "contact",
//       name: "Contact",
//       href: "/contact",
//       features: [],
//       categories: [],
//     },
//   ],
// };

async function getNavigation(): Promise<Page> {
  const res = await fetch(
    "https://firesidecandles-strapi-production.up.railway.app/api/pages?sort=id&populate[categories][populate][category_tags][populate][feature][populate][0]=cover,category_tag"
  );
  const navigation = await res.json();
  return navigation;
}

export default async function Header() {
  const NavigationData = await getNavigation();
  console.log(NavigationData);
  return (
    <header className="bg-white fixed w-full ">
      <div className="flex max-w-7xl items-center justify-between py-6 mx-auto px-8 xl:px-0">
        <Link href="/">
          <h1 className="font-dancing text-3xl">firesidecandles</h1>
        </Link>
        <div className="lg:flex flex-1 items-center ml-6 justify-end hidden">
          <div className="w-full max-w-lg">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <input
                id="search"
                name="search"
                className="block w-full bg-white py-1.5 pl-10 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search"
                type="search"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b" />
      <SecondaryHeader {...NavigationData} />
    </header>
  );
}
