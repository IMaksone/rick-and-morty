import { CharactersBox, FiltersBox, Loader, Modal } from "./components";
import { useMyContext } from "./context/useMyContext";

import "./App.css";

const AppContent = () => (
  <>
    <FiltersBox />
    <CharactersBox />
    <Modal />
  </>
);

function App() {
  const { characters } = useMyContext();

  return (
    <div className="app">
      <Loader is={!!characters.length}>
        <AppContent />
      </Loader>
    </div>
  );
}

export default App;
