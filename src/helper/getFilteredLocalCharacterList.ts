import { FilterCircuitType, FilterType } from "src/constants/filtersShema";
import { ApiCharacterType } from "src/types/character";

export const getFilteredLocalCharacterList = (
  apiCharacterList: ApiCharacterType[],
  filterCircuit: FilterCircuitType
) => {
  const activeFilterCircuit = getActiveFilterCircuit(filterCircuit);

  let filtered: ApiCharacterType[] = [];

  if (getIsNeedFiltering(activeFilterCircuit)) {
    filtered = apiCharacterFiltering(apiCharacterList, activeFilterCircuit);
  }

  return createLocalCharacterList(filtered);
};

export default getFilteredLocalCharacterList

const apiCharacterFiltering = (
  apiCharacterList: ApiCharacterType[],
  activeFilterCircuit: FilterCircuitType
) => {
  const filtered = apiCharacterList.filter((apiCharacter) => {
    return getIsFilterMatched(apiCharacter, activeFilterCircuit);
  });

  return filtered;
};

const getIsFilterMatched = (
  apiCharacter: ApiCharacterType,
  activeFilterCircuit: FilterCircuitType
) => {
  const activeFilterCircuitKeys = Object.keys(activeFilterCircuit);

  const searchForMatchesCallback = (filterKey: string) => {
    const characterParam = apiCharacter[filterKey];
    const activeFilter = activeFilterCircuit[filterKey];

    return !!chooseFilteringType(characterParam, activeFilter);
  };

  return !!activeFilterCircuitKeys.find(searchForMatchesCallback);
};

const chooseFilteringType = (
  characterParam: string,
  activeFilter: FilterType
) => {
  const isFilterValuesObject = !!activeFilter.valuesObject;

  if (isFilterValuesObject) {
    return filterByValuesObject(characterParam, activeFilter.valuesObject);
  } else {
    return filterByValue(characterParam, activeFilter.value);
  }
};

const filterByValue = (characterParam: string, activeFilterValue: string) => {
  const characterParamLowerCase = characterParam.toLowerCase();
  const filterValueLowerCase = activeFilterValue.toLowerCase();

  return characterParamLowerCase.indexOf(filterValueLowerCase) >= 0;
};

const filterByValuesObject = (
  characterParam: string,
  activeFilterValueValuesObject
) => {
  return activeFilterValueValuesObject[characterParam];
};

const getActiveFilterCircuit = (filterCircuit: FilterCircuitType) => {
  let activeFilterCircuit: FilterCircuitType = {};

  const filterCircuitKeys = Object.keys(filterCircuit);

  filterCircuitKeys.forEach((key) => {
    const filter = filterCircuit[key];

    if (getIsFilterActive(filter)) {
      activeFilterCircuit[key] = filter;
    } else if (filter.value) {
      activeFilterCircuit[key] = filter;
    }
  });

  return activeFilterCircuit;
};

const getIsFilterActive = (filter: FilterType) => {
  const valuesKeys = Object.keys(filter.valuesObject);

  return filter.valuesObject && valuesKeys.find((k) => filter.valuesObject[k]);
};

const getIsNeedFiltering = (activeFilterCircuit: FilterCircuitType) => {
  const activeFilterCircuitKeys = Object.keys(activeFilterCircuit);

  return !!activeFilterCircuitKeys.length;
};

const createLocalCharacterList = (apiCharacterList: ApiCharacterType[]) => {
  return apiCharacterList.map((character, index) => ({
    index: index,
    data: character
  }));
};
