import { Filter } from "./Filter";
import { useMyContext } from "../../../context";

import { Loader } from "../../common";

import "./filtersBox.css";

export const FiltersBox = () => {
  const { filters } = useMyContext();

  const list = Object.keys(filters).map((key, i) => (
    <div key={i} className="filter">
      <Filter filter={filters[key]} filterId={key} />
    </div>
  ));

  return (
    <div className="filters-box">
      <div className="filters-list">{filters.name ? list : <Loader />}</div>
    </div>
  );
};
