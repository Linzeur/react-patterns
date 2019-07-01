import React from "react";
import { render } from "@testing-library/react";

import ListEvent from "./events-list";

const status = "Connected";
test("Test event list component", () => {
  const { asFragment } = render(
    <ListEvent title={"Titulo 1"} status={status} />
  );

  expect(asFragment()).toMatchSnapshot();
});
