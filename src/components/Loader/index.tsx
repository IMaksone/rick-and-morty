import { ReactNode } from "react";

import classes from "./loader.module.css";

interface LoaderInterface {
  loaded: Boolean;
  children: ReactNode;
}

export default function Loader({ loaded, children }: LoaderInterface) {
  
  return<Spinner />
  // return loaded ? children : <Spinner />;
}

const Spinner = () => (
  <div className={classes.spiner_wr}>
    <div className={classes.spinner}></div>
  </div>
);
