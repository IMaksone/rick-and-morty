import { FilterKeyType } from "src/constants/filtersShema";
import useToggle from "./useToggle";

interface ToggleProps {
  filterKey: FilterKeyType;
  toggleKey: string;
}

export default function Toggle({ filterKey, toggleKey }: ToggleProps) {
  const { isChecked, handleClick } = useToggle(filterKey, toggleKey);

  const checkedClassName = isChecked ? "toggle-checked" : "";
  const className = "toggle " + checkedClassName;

  return (
    <div className={className} onClick={handleClick}>
      <span className="toggle-title">{toggleKey}</span>
    </div>
  );
}
