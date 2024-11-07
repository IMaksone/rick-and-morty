import CharactersBox from "./components/CharactersBox";
import FiltersBox from "./components/FiltersBox";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import { useApiCharactersSelector } from "./store/selector/characterSelectors";

import './styles/app.css'

function App() {
  const apiCharacters = useApiCharactersSelector()

  return (
    <div className="app">
      <Loader is={!!apiCharacters.length}>
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
