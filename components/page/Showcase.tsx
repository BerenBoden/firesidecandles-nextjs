"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

export default function Showcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  return (
    <div>
      <div className="relative w-full h-full xl:h-128 2xl:h-136 embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <Image
              src="/banner1.jpg"
              alt="banner"
              layout="responsive"
              width={500} // replace with your image width
              height={100} // replace with your image height
              className="object-contain"
            />
          </div>
          <div className="embla__slide">
            <Image
              src="/banner2.jpg"
              alt="banner"
              layout="responsive"
              width={500} // replace with your image width
              height={100} // replace with your image height
              className="object-contain"
            />
          </div>
          <div className="embla__slide">
            <Image
              src="/banner3.jpg"
              alt="banner"
              layout="responsive"
              width={500} // replace with your image width
              height={100} // replace with your image height
              className="object-contain"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-40" />
        <h1 className="font-dancing text-4xl lg:text-7xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Handmade Candles
        </h1>
      </div>
    </div>
  );
}
