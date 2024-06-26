import { ReactNode } from "react";

import "./loader.css";

const Spinner = () => (
  <div className="spinner-wr">
    <div className="spinner"></div>
  </div>
);

interface LoaderInterface {
  is: Boolean;
  children: ReactNode;
}

export const Loader = ({ is, children }: LoaderInterface) =>
  is ? children : <Spinner />;

export default Loader;
