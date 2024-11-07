export default function filterByValue(
  characterParam: string,
  activeFilterValue: string
) {
  const characterParamLowerCase = characterParam.toLowerCase();
  const filterValueLowerCase = activeFilterValue.toLowerCase();

  return characterParamLowerCase.indexOf(filterValueLowerCase) >= 0;
}
