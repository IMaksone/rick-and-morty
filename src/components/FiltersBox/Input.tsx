import { FilterKeyType } from "src/constants/filtersShema";
import useInput from "./useInput";

interface InputInterface {
  filterKey: FilterKeyType;
}

export const Input = ({ filterKey }: InputInterface) => {
  const { value, handleChange } = useInput(filterKey);

  return (
    <div className="input-box">
      <span className="filter-title text-light">{filterKey}</span>
      <input className="input" value={value} onChange={handleChange} />
    </div>
  );
};

export default Input;
