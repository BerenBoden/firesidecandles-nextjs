"use client";
import useEmblaCarousel from "embla-carousel-react";

export default function Showcase() {
  const data = [
    { text: "test1", image: "/banner1.jpg" },
    { text: "test2", image: "/banner2.jpg" },
    { text: "test3", image: "/banner3.jpg" },
  ];
  const [emblaRef] = useEmblaCarousel({ loop: true });
  return (
    <div
      className="relative w-full h-full xl:h-128 2xl:h-136 embla"
      ref={emblaRef}
    >
      <div className="embla__container h-full">
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
                    <p className="text-xs md:text-lg lg:text-xl 2xl:text-xl xl:text-xl text-center text-black">
                      s
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                    <p className="text-xs md:text-lg lg:text-xl 2xl:text-xl xl:text-xl text-center text-black">
                      s
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
