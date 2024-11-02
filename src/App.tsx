import CharactersBox from "./components/CharactersBox";
import FiltersBox from "./components/FiltersBox";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import { useCharactersContext } from "./context/CharactersContext";

import './styles/app.css'

function App() {
  const { characters } = useCharactersContext();

  return (
    <div className="app">
      <Loader is={!!characters.length}>
        <AppContent />
      </Loader>
    </div>
  );
}

export default App;

const AppContent = () => (
  <>
    <FiltersBox />
    <CharactersBox />
    <Modal />
  </>
);
