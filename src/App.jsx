// react hooks
import { createContext, useState } from "react";

// custom hooks
import useAxios from "./hooks/useAxios";

// components
import Header from "./components/Header";
import Input from "./components/Input";
import Images from "./components/Images";

// create context
export const imageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState("citys");

  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?per_page=30&query=${searchImage}&client_id=${
      import.meta.env.VITE_SOME_KEY
    }`
  );

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  return (
    <imageContext.Provider value={value}>
      <Header>
        <Input />
      </Header>
      {!error && <Images />}
      {error && <p>{error}</p>}
    </imageContext.Provider>
  );
}
export default App;
