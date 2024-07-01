import { LocalCharacterType } from "src/types/character";
import { CHARACTER_VIRTUAL_LIST_PARAMS } from "../constants/characterVirtualListParams";

const numberOfAdditionalVisibleElements = 3;

export const getVisibleCharacterList = (
  localChracterList: LocalCharacterType[],
  htmlWrapper: any //HTMLDivElement | EventTarget
) => {
  let startIndex = 0;
  let endIndex = getNumberOfVisibleElements(window.innerHeight) + 1;

  if (htmlWrapper) {
    let countElements = getNumberOfVisibleElements(htmlWrapper.clientHeight);

    startIndex = getIndexOfFirstVisibleElement(htmlWrapper.scrollTop);

    if (startIndex >= numberOfAdditionalVisibleElements) {
      startIndex = addAdditionalElementsToBeginning(startIndex);
      countElements = addAdditionalElementsToCountElemnts(countElements);
    }

    endIndex = startIndex + countElements;
  }

  console.log(startIndex, endIndex)

  return localChracterList.slice(startIndex, endIndex);
};

export default getVisibleCharacterList;

const getNumberOfVisibleElements = (fullHeight: number) =>
  Math.ceil(fullHeight / CHARACTER_VIRTUAL_LIST_PARAMS.elFullHeight) +
  numberOfAdditionalVisibleElements;

const getIndexOfFirstVisibleElement = (htmlWrapperScrollTop: number) =>
  Math.floor(htmlWrapperScrollTop / CHARACTER_VIRTUAL_LIST_PARAMS.elFullHeight);

const addAdditionalElementsToBeginning = (startIndex: number) =>
  (startIndex -= numberOfAdditionalVisibleElements);
const addAdditionalElementsToCountElemnts = (countElements: number) =>
  (countElements += numberOfAdditionalVisibleElements);
