import { Link } from "react-router-dom";
const CategoryLink = (props) => {
  const { setSelectedCategory, category } = props;
  return (
    <li className="cursor-pointer">
      <Link
        aria-label="set-category-name-title"
        className="flex flex-1 items-center justify-between hover:text-[#DB4444]"
        onClick={() => setSelectedCategory(category)}
      >
        <p className="uppercase">{category}</p>
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
      </Link>
    </li>
  );
};
export default CategoryLink;
