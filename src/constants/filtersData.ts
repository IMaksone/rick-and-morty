import { FiltersData } from "src/types/filters";

export const initialFiltersData: FiltersData = {
  name: {
    type: "input",
    value: "",
  },
  type: { type: "input", value: "" },
  status: {
    type: "checkbox",
    valuesObject: { Alive: false, unknown: false, Dead: false },
  },
  species: {
    type: "checkbox",
    valuesObject: {
      Human: false,
      Alien: false,
      Humanoid: false,
      unknown: false,
      Poopybutthole: false,
      "Mythological Creature": false,
      Animal: false,
      Robot: false,
      Cronenberg: false,
      Disease: false,
    },
  },
  gender: {
    type: "checkbox",
    valuesObject: {
      Male: false,
      Female: false,
      unknown: false,
      Genderless: false,
    },
  },
};
