import { CHARACTER_VIRTUAL_LIST_PARAMS } from "../constants/characterVirtualListParams";


export const getVisibleCharacters = (data, element) => {
  let start = 0;
  let end = window.innerHeight / CHARACTER_VIRTUAL_LIST_PARAMS.elFullHeight + 4;

  if (element) {
    let count =
      Math.ceil(element.clientHeight / CHARACTER_VIRTUAL_LIST_PARAMS.elFullHeight) + 3;
    start = Math.floor(element.scrollTop / CHARACTER_VIRTUAL_LIST_PARAMS.elFullHeight);

    if(start > 2) {
      start -= 3;
      count += 3;
    }

    end = start + count;
  }
  
  return data.slice(start, end);
};

export const getCreatedDate = (characterCreated: string) => {
  const date = new Date(characterCreated);

  return `${date.getMonth()}/${date.getDay()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
};
