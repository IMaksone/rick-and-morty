import { useContext } from "react";

import MyContext from ".";

export const useMyContext = () => {
  const data = useContext(MyContext);

  return data;
};

export default useMyContext;
