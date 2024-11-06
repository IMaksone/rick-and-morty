import { FilterKeyType } from "src/constants/filtersShema";
import useInput from "./useInput";

interface InputProps {
  filterKey: FilterKeyType;
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
