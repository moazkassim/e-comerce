import { useAppStore } from "./store";

export default function DividingHead() {
  const selectedCategory = useAppStore((state) => state.selectedCategory);
  return (
    <div className="mx-auto my-20 max-w-screen-xl px-4 md:px-8">
      <div className="items-start justify-between border-b py-4 md:flex">
        <div className="max-w-lg">
          <h3 className="text-2xl font-bold text-gray-800">
            {selectedCategory.toUpperCase()}
          </h3>
          <p className="mt-2 text-gray-600">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assortment in categories
            ranging from consumer.
          </p>
        </div>
      </div>
    </div>
  );
}
//  {props.title.toUpperCase()}
