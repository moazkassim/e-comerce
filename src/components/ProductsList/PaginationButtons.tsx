import { Indent } from "lucide-react";

interface PaginationButtonsProps {
  productsNumber: number;
  setCurrentPage: (currentPage: number) => void;
}

export default function PaginationButtons(props: PaginationButtonsProps) {
  const { productsNumber, setCurrentPage } = props;
  let pageNumber = Math.ceil(productsNumber / 4);
  function generateArray(pagesNumber: number) {
    return Array.from({ length: pagesNumber }, (_, index) => index + 1);
  }
  let arr = generateArray(pageNumber);
  return (
    <div className="my-3 flex w-full flex-wrap items-center justify-center gap-2">
      {arr.map((ele) => {
        return (
          <button
            key={ele}
            className="rounded bg-blue-500 px-3 py-1 text-white"
            onClick={() => setCurrentPage(ele - 1)}
          >
            {ele}
          </button>
        );
      })}
    </div>
  );
}
