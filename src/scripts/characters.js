import { charactersBoxParams } from "../constatnts";

const charactersIndex = (characters) => {
  return characters.map((ch, i) => ({ index: i, data: ch }));
};

export const charactersPrepare = (characters, _filters) => {
  const filters = {};

  Object.keys(_filters).forEach((key) => {
    if (
      _filters[key].values &&
      Object.keys(_filters[key].values).find((k) => _filters[key].values[k])
    ) {
      filters[key] = _filters[key];
    } else if (_filters[key].value) {
      filters[key] = _filters[key];
    }
  }); // adding active filters to filtering

  if (!Object.keys(filters).length) {
    return charactersIndex(characters);
  } // if there are no active filters, filtering is not needed

  const inputFiltering = (el, key) => {
    return el[key].toLowerCase().indexOf(filters[key].value.toLowerCase()) >= 0;
  };

  const checkboxFiltering = (el, key) => {
    return filters[key].values[el[key]];
  };

  const chooseFilteringType = (el, key) => {
    return filters[key].values
      ? checkboxFiltering(el, key)
      : inputFiltering(el, key);
  };

  const filtered = characters.filter((el) => {
    return !Object.keys(filters).find((key) => {
      return !chooseFilteringType(el, key);
    });
  });

  return charactersIndex(filtered);
};

export const renderPreparation = (data, element) => {
  let start = 0;
  let end = window.innerHeight / charactersBoxParams.elFullHeight + 4;

  if (element) {
    let count =
      Math.ceil(element.clientHeight / charactersBoxParams.elFullHeight) + 3;
    start = Math.floor(element.scrollTop / charactersBoxParams.elFullHeight);

    if(start > 2) {
      start -= 3;
      count += 3;
    }

    end = start + count;
  }

  return data.slice(start, end);
};
