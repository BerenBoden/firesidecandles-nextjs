import Image from "next/image";
import Button from "@/app/components/common/elements/Button";

export default function CallToAction({
  text,
  image,
}: {
  text: string;
  image: string;
}) {
  return (
    <div className="embla__slide">
      <div className="relative h-full">
        <div className="absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent z-0 w-full md:w-3/4 lg:w-1/2 xl:w-1/2 2xl:w-1/2 ">
          <div className="bg-white opacity-80 backdrop-blur-xl p-4 shadow-lg h-32 sm:h-48 md:h-48 xl:h-72 2xl:h-72 w-full border-solid z-20 flex items-center justify-center">
            <div className="flex flex-col h-full justify-evenly">
              <div className="">
                <h3 className="font-dancing text-lg text-center text-brown-600">
                  This weekend only
                </h3>
              </div>
              <div className="">
                <h1 className="text-xs md:text-lg lg:text-4xl 2xl:text-4xl xl:text-4xl text-center text-black">
                  {text}
                </h1>
              </div>
              <div className="">
                <h3 className="font-dancing text-xs md:text-lg lg:text-lg 2xl:text-lg xl:text-lg text-center text-brown-600">
                  Excape the mundane and restore your energy with our new
                  collection.
                </h3>
              </div>
              <Button text="Shop now" />
            </div>
          </div>
        </div>
        <Image
          src={image}
          alt="banner"
          layout="responsive"
          width={500} // replace with your image width
          height={100} // replace with your image height
          className="object-contain z-10 h-64"
        />
      </div>
    </div>
  );
}
