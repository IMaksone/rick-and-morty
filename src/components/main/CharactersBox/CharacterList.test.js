import renderer from "react-test-renderer";

import { CharactersList } from "./CharactersList";
import { сharacterSample } from "../../../constants";

it("TEST CharactersList", () => {
  const component = renderer.create(
    <CharactersList render={[{ index: 0, data: сharacterSample }]} length={1} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
