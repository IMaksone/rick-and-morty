import renderer from "react-test-renderer";

import { CharactersListEl } from "./CharactersListEl";
import { сharacterSample } from "../../../constants";

it("TEST CharactersListEl", () => {
  const component = renderer.create(
    <CharactersListEl character={{ index: 0, data: сharacterSample }} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  renderer.act(() => {
    tree.children[0].children[0].props.onClick();
  });
  
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  renderer.act(() => {
    tree.children[0].children[1].children[0].children[0].props.onClick();
  });
  
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
