import Image from "next/image";

const incentives = [
  {
    name: "Free shipping",
    imageSrc: "/shipping-icon.svg",
    description:
      "Free shipping on orders over $100.",
  },
  {
    name: "10-year warranty",
    imageSrc: "/warranty-icon.svg",
    description:
      "If it breaks in the first 10 years we'll replace it.",
  },
  {
    name: "Exchanges",
    imageSrc: "/exchange-icon.svg",
    description:
      "If you don't like it, trade it to one of your friends for something of theirs.",
  },
];

export default function Incentives() {
  return (
    <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
      {incentives.map((incentive) => (
        <div
          key={incentive.name}
          className="flex flex-col items-center justify-center"
        >
          <div className="sm:flex-shrink-0">
            <Image
              className="h-16 w-16"
              width={50}
              height={50}
              src={incentive.imageSrc}
              alt="incentive"
            />
          </div>
          <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
            <h3 className="text-sm text-center font-medium text-gray-900">
              {incentive.name}
            </h3>
            <p className="mt-2 text-sm text-center text-gray-500">
              {incentive.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
