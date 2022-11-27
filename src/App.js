import { MyContext } from "./context";
import { useCharacters } from "./api";

import { CharactersBox, FiltersBox, Loader, Modal } from "./components";

import "./App.css";
import { useEffect, useState } from "react";

import { filtersShema } from "./constatnts";

const filtersPrepare = (characters) => {
  const filters = filtersShema;

  characters.forEach((el) => {
    Object.keys(filters).forEach((key) => {
      if (filters[key].values) {
        filters[key].values[el[key]] = false;
      }
    });
  });

  return filters;
};

function App() {
  const characters = useCharacters();

  const [filters, setFilters] = useState({});
  const [modal, setModal] = useState(undefined);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setFilters(filtersPrepare(characters));
  }, [characters]);

  return (
    <MyContext.Provider
      value={{
        characters,
        filters,
        isLoad,
        modal,
        setIsLoad,
        setModal,
        setFilters,
      }}
    >
      <div className="app">
        {characters.length ? (
          <>
            <FiltersBox />
            <CharactersBox />
            <Modal />
          </>
        ) : (
          <Loader />
        )}
      </div>
    </MyContext.Provider>
  );
}

export default App;
