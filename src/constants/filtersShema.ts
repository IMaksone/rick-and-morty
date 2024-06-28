type FilterTypesType = "input" | "checkbox";

export type FilterKeyType = "name" | "type" | "status" | "species" | "gender";

export type FilterType = {
  type: FilterTypesType;
  value?: string;
  valuesObject?: Object;
};

export type FilterCircuitType = {
  [key in FilterKeyType]?: FilterType;
};

export const FILTER_CIRCUIT: FilterCircuitType = {
  name: {
    type: "input",
    value: ""
  },
  type: { type: "input", value: "" },
  status: { type: "checkbox", valuesObject: {} },
  species: { type: "checkbox", valuesObject: {} },
  gender: { type: "checkbox", valuesObject: {} }
};
