import { ESC_KEY } from "src/constants/keyboardKeys";
import useMyContext from "src/context/useMyContext";

export const useModal = () => {
  const { characterForModal, hideModal } = useMyContext();

  const handleEscape: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === ESC_KEY) hideModal();
  };

  return {
    characterForModal,
    handleEscape,
    hideModal
  };
};
