import { useAppStore } from "../store";
interface CategoryLinkProps {
  cate: string;
}
const CategoryLink = (props: CategoryLinkProps) => {
  console.log(" i am from category link");
  const { cate } = props;

  const setSelectedCategory = useAppStore((state) => state.setSelectedCategory);
  return (
    <li className="cursor-pointer">
      <a
        aria-label="set-category-name-title"
        className="flex flex-1 items-center justify-between hover:text-[#DB4444]"
        onClick={() => setSelectedCategory(cate)}
      >
        <p className="uppercase">{cate}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z"
            fill="black"
          />
        </svg>
      </a>
    </li>
  );
};
export default CategoryLink;
