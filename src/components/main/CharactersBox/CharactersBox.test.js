import renderer from "react-test-renderer";

import { CharactersBox } from "./CharactersBox";

it("TEST CharactersBox", () => {
  const component = renderer.create(<CharactersBox />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
