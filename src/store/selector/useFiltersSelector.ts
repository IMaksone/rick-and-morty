import { FilterKey } from "src/types/filters";
import useStoreSelector from ".";

export function useFilterByKeySelector(key: FilterKey) {
  return useStoreSelector((state) => state.filters[key]);
}
