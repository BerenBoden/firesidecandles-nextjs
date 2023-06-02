import Image from "next/image";
const stats = [
  { id: 1, name: "Creators on the platform", value: "8,000+" },
  { id: 2, name: "Flat platform fee", value: "3%" },
  { id: 3, name: "Uptime guarantee", value: "99.9%" },
  { id: 4, name: "Paid out to creators", value: "$70M" },
];
export default function Featured() {
  return (
    <div className="bg-white">
      <dl className="grid grid-cols-1 gap-x-4 gap-y-4 overflow-hidden text-center sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div className="">
            <Image
              alt="banner"
              width={600}
              height={600}
              src={"/banner1.jpg"}
              className="object-cover h-42"
            />
          </div>
        ))}
      </dl>
    </div>
  );
}
