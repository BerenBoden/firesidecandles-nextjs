"use client";
import useEmblaCarousel from "embla-carousel-react";
import CallToAction from "../common/elements/CallToAction";

export default function Showcase() {
  const data = [
    { text: "test1", image: "/banner1.jpg" },
    { text: "test2", image: "/banner2.jpg" },
    { text: "test3", image: "/banner3.jpg" },
  ];
  const [emblaRef] = useEmblaCarousel({ loop: true });
  return (
    <div>
      <div
        className="relative w-full h-full xl:h-128 2xl:h-136 embla"
        ref={emblaRef}
      >
        <div className="embla__container h-full">
          {data.map(({ text, image }) => {
            return <CallToAction text={text} image={image} />;
          })}
        </div>
      </div>
    </div>
  );
}
