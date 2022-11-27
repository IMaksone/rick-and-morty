import renderer from "react-test-renderer";
import { Loader } from "./Loader";

it("TEST Loader", () => {
  const component = renderer.create(<Loader />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
