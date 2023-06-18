"use client";
import useEmblaCarousel from "embla-carousel-react";
import CallToAction from "../common/elements/CallToAction";
import Autoplay from "embla-carousel-autoplay";
import { CallToActionData } from "@/types/types";

export default function Showcase(data: any) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);

  return (
    <div
      className="relative w-full h-full xl:h-128 2xl:h-136 embla"
      ref={emblaRef}
    >
      <div className="embla__container h-full">
        {data.data.map((props: any) => {
          return <CallToAction {...props} />;
        })}
      </div>
    </div>
  );
}
