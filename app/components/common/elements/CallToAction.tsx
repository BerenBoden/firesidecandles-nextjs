"use client";
import Image from "next/image";
import Button from "@/app/components/common/elements/Button";
import { CallToAction } from "@/types/types";
import { extractLargestPhoto } from "@/utils/extractPhotos";

export default function CallToAction(props: any) {
  return (
    <div className="embla__slide">
      <div className="relative h-full">
        <div className="absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent z-20 w-full md:w-3/4 lg:w-1/2 xl:w-1/2 2xl:w-1/2 ">
          <div className="bg-white opacity-80 backdrop-blur-xl p-4 shadow-lg h-42 lg:h-56 xl:h-72 2xl:h-72 w-full border-solid z-20 flex items-center justify-center">
            <div className="flex flex-col h-full justify-evenly">
              <div className="">
                <h3 className="font-dancing text-lg text-center text-brown-600">
                  {props.short_heading}
                </h3>
              </div>
              <div className="">
                <h1 className="text-xs md:text-lg lg:text-4xl 2xl:text-4xl xl:text-4xl text-center text-black">
                  {props.large_heading}
                </h1>
              </div>
              <div className="">
                <h3 className="text-md text-center text-brown-600">
                  {props.short_description}
                </h3>
              </div>
              <Button className="w-full bg-amber-900 text-white hover:bg-amber-950">
                Shop now
              </Button>
            </div>
          </div>
        </div>
        <div className="2xl:h-112 xl:h-112 lg:h-96 h-80">
          <Image
            src={extractLargestPhoto(props.cover).url}
            alt="banner"
            layout="fill"
            objectFit="cover"
            className="z-10"
          />
        </div>
      </div>
    </div>
  );
}
