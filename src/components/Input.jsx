// react hooks
import { useContext, useState } from "react";

// context
import { imageContext } from "../App";

function Input() {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(imageContext);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const fetch = () => {
    return fetchData(
      `search/photos?page=1&query=${searchValue}&client_id=${
        import.meta.env.VITE_SOME_KEY
      }`
    );
  };

  const handleButtonSearch = () => {
    fetch();
    setSearchValue("");
    setSearchImage(searchValue);
  };

  const handelEnterSearch = (event) => {
    if (event.key === "Enter") {
      fetch();
      setSearchImage(searchValue);
    }
  };

  return (
    <div className="flex ml-3 mr-3">
      <input
        className="bg-gray-50 border border-indigo-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-indigo-100 focus:ring-2 font-mono rounded-tl rounded-bl"
        type="search"
        placeholder="Search images..."
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handelEnterSearch}
      />
      <button
        onClick={handleButtonSearch}
        disabled={!searchValue}
        className="bg-indigo-600 px-6 py-3 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-400 disabled:bg-gray-400 outline-none font-mono"
      >
        Search
      </button>
    </div>
  );
}

export default Input;
