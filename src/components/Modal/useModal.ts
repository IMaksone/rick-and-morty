import { ESC_KEY } from "src/constants/keyboardKeys";
import {
  useDispatchCharacterForModal,
  useDispatchHideModal,
} from "src/store/dispatch/dispatchModal";
import { useModalCharacterSelector } from "src/store/selector/modalSelector";

export const useModal = () => {
  const characterForModal = useModalCharacterSelector();
  const dispatchHideModal = useDispatchHideModal();

  const handleEscape: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === ESC_KEY) dispatchHideModal();
  };

  return {
    characterForModal,
    handleEscape,
    hideModal: dispatchHideModal,
  };
};
