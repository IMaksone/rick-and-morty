type FilterTypes = "input" | "checkbox";

export type FilterKey = "name" | "type" | "status" | "species" | "gender";

export type Filter = {
  type: FilterTypes;
  value?: string;
  valuesObject?: Object;
};

export type FiltersData = {
  [key in FilterKey]?: Filter;
};
