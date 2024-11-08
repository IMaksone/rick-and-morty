import { FilterKey } from "src/types/filters";
import useInput from "./useInput";

interface InputProps {
  filterKey: FilterKey;
}

export default function Input({ filterKey }: InputProps) {
  const { value, handleChange } = useInput(filterKey);

  return (
    <div className="input-box">
      <span className="filter-title text-light">{filterKey}</span>
      <input className="input" value={value} onChange={handleChange} />
    </div>
  );
}
