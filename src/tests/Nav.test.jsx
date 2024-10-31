import { render } from "@testing-library/react";
import NavBar from "../components/organisms/NavBar";

describe("Nav Component", () => {
  test("renders the Nav component", () => {
    render(<NavBar />);
  });
});
