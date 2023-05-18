"use client" 
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

export default function Showcase() {
  const [emblaRef] = useEmblaCarousel();
  return (
    <div>
      <div className="relative w-full h-136 embla">
        <div ref={emblaRef} className="embla_container"> 
          <div className="embla_slide">
            <Image
              src="/banner1.jpg"
              alt="banner"
              fill
              className="object-cover"
            />
          </div>
          <div className="embla_slide">
            <Image
              src="/banner2.jpg"
              alt="banner"
              fill
              className="object-cover"
            />
          </div>
          <div className="embla_slide">
            <Image
              src="/banner3.jpg"
              alt="banner"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-40" />
        <h1 className="font-dancing text-7xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Handmade Candles
        </h1>
      </div>
    </div>
  );
}
