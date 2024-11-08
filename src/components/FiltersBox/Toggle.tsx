import { FilterKey } from "src/types/filters";
import useToggle from "./useToggle";

interface ToggleProps {
  filterKey: FilterKey;
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
