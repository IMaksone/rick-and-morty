type FilterTypesType = "input" | "checkbox";

export type FilterKeyType = "name" | "type" | "status" | "species" | "gender";

export type FilterType = {
  type: FilterTypesType;
  value?: string;
  values?: Object;
};

export type FilterCircuitType = {
  [key in FilterKeyType]: FilterType;
};

export const FILTER_CIRCUIT: FilterCircuitType = {
  name: {
    type: "input",
    value: ""
  },
  type: { type: "input", value: "" },
  status: { type: "checkbox", values: {} },
  species: { type: "checkbox", values: {} },
  gender: { type: "checkbox", values: {} }
};
