// react hooks
import { useContext } from "react";

// context
import { imageContext } from "../App";

// components
import Image from "./Image";
import Skeleton from "./Skeleton";

function Images() {
  const { response, isLoading, searchImage } = useContext(imageContext);

  return (
    <div className="bg-indigo-400 ">
      <h1 className="text-white	 text-center font-bold  text-xl font-mono">
        Results for: {searchImage || "Cats"}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-10 max-w-7xl mx-auto px-4">
        {!isLoading &&
          response.map((data, key) => <Image data={data} key={key} />)}
        {isLoading && <Skeleton item={10} />}
      </div>
    </div>
  );
}

export default Images;
