import { FilterKeyType } from "src/constants/filtersShema";
import useToggle from "./useToggle";

interface ToggleInterfae {
  filterKey: FilterKeyType;
  toggleKey: string;
}

export const Toggle = ({ filterKey, toggleKey }: ToggleInterfae) => {
  const { isChecked, handleClick } = useToggle(filterKey, toggleKey);

  const checkedClassName = isChecked ? "toggle-checked" : "";

  return (
    <div className={"toggle " + checkedClassName} onClick={handleClick}>
      <span className="toggle-title">{toggleKey}</span>
    </div>
  );
};

export default Toggle;
