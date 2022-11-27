import { filtersShema } from "../constants";

export const filtersPrepare = (characters) => {
  const filters = {...filtersShema};

  characters.forEach((el) => {
    Object.keys(filters).forEach((key) => {
      if (filters[key].values) {
        filters[key].values[el[key]] = false;
      }
    });
  });
  
  return filters;
};