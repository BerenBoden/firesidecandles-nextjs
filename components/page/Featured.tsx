import Image from "next/image";

const stats = [
  { id: 1, name: "Creators on the platform", value: "8,000+" },
  { id: 2, name: "Flat platform fee", value: "3%" },
  { id: 3, name: "Uptime guarantee", value: "99.9%" },
];

export default function Featured() {
  return (
    <div className="bg-white">
      <dl className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={index === 0 ? "md:col-span-2 md:row-span-2 lg:col-span-1" : ""}
          >
            <Image
              alt="banner"
              width={1000}
              height={800}
              src={"/banner1.jpg"}
              className="object-cover h-56"
            />
          </div>
        ))}
      </dl>
    </div>
  );
}