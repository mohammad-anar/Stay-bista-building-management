/* eslint-disable react/prop-types */
import qs from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";

const CategoryBox = ({ label, icon: Icon, selected }) => {
  console.log(selected);
  // useSearchParams for get query params from browser search bar
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
      const updatedQuery = { ...currentQuery, category: `${label}` };

      const url = qs.stringifyUrl({
        url: "/",
        query: updatedQuery,
      });
      navigate(url);
    
  };

  return (
    <div
      onClick={handleClick}
      className={`py-4 flex flex-col items-center text-neutral-600 justify-center gap-2 border-b-2  ${selected?"border-neutral-800 text-neutral-800":""}  hover:text-neutral-400 transition-all duration-200 cursor-pointer `}
    >
      <Icon size={26}></Icon>
      <h2>{label}</h2>
    </div>
  );
};

export default CategoryBox;
