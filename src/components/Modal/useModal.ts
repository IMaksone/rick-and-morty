import { ESC_KEY } from "src/constants/keyboardKeys";
import { useModalContext } from "src/context/ModalContext";

export const useModal = () => {
  const { characterForModal, hideModal } = useModalContext();

  const handleEscape: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === ESC_KEY) hideModal();
  };

  return {
    characterForModal,
    handleEscape,
    hideModal
  };
};
