import Image from "next/image";
import { Features, FeaturesData } from "@/types/types";
import { extractLargestPhoto } from "@/lib/extractPhotos";

export default function Featured({ data }: Features) {
  return (
    <div className="bg-white">
      <dl className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 md:grid-cols-2  sm:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
        {data.map(({ id, attributes }: FeaturesData, index: number) => (
          <div
            key={id}
            className={
              index === 0
                ? "md:col-span-2 md:row-span-2 lg:col-span-1 sm:col-span-2 sm:row-span-2"
                : ""
            }
          >
            <Image
              alt="banner"
              width={1000}
              height={800}
              src={extractLargestPhoto(attributes.cover).url}
              className="object-cover h-56 border shadow-sm"
            />
          </div>
        ))}
      </dl>
    </div>
  );
}
