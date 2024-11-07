import { useRef } from "react";
import { Provider } from "react-redux";

import makeStore, { MyStore } from "src/store/makeStore";

type StoreProviderProps = {
  children: React.ReactNode;
};

function StoreProvider({ children }: StoreProviderProps) {
  const storeRef = useRef<MyStore>();

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}

export default StoreProvider;
