import { StoreState } from "src/store/makeStore";
import useStoreSelector from "./useStoreSelector";

export default function createUseStateByKey(key: keyof StoreState) {
  return useStoreSelector((state) => state[key]);
}
