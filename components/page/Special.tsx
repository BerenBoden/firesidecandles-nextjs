import Image from "next/image";
import Link from "next/link";

export default function Special() {
  return (
    <div className="sm:flex w-full">
      <div className="xl:text-center text-left sm:w-1/2 w-full h-80 flex flex-col justify-center">
        <h2 className="text-3xl mt-6 font-bold text-black  sm:text-xl">
          Unique present with a personal touch
        </h2>
        <p className="text-lg mt-6 text-black">
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
        </p>
        <div className="flex mt-6 items-center justify-center gap-x-6">
          <Link
            href="/shop"
            className="rounded-md px-3.5 py-2.5 text-xs font-semibold border text-black hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Shop now
          </Link>
        </div>
      </div>
      <div className="relative h-80 w-full sm:w-1/2">
        <Image
          width={400}
          height={400}
          alt="banner"
          className="sm:ml-auto m-auto"
          src={"/special.jpg"}
        />
      </div>
    </div>
  );
}
