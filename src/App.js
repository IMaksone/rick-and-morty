import { useEffect, useState } from "react";

import { MyContext } from "./context";
import { useCharacters } from "./api";
import { filtersPrepare } from "./scripts/filtersPrepare";
import { CharactersBox, FiltersBox, Loader, Modal } from "./components";

import "./App.css";

function App() {
  const characters = useCharacters();

  const [filters, setFilters] = useState({});
  const [modal, setModal] = useState(undefined);

  useEffect(() => {
    if(characters.length) setFilters(filtersPrepare(characters));
  }, [characters]);

  return (
    <MyContext.Provider
      value={{
        characters,
        filters,
        modal,
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
