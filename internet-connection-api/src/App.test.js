import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

test("Test app component using pattern Function as Children", () => {
  const { asFragment } = render(<App pattern={"function-children"} />);

  expect(asFragment()).toMatchSnapshot();
});

test("Test event list component using pattern Render Props", () => {
  const { asFragment } = render(<App pattern={"render-props"} />);

  expect(asFragment()).toMatchSnapshot();
});

test("Test event list component using pattern High Order Components", () => {
  const { asFragment } = render(<App pattern={"high-order-component"} />);

  expect(asFragment()).toMatchSnapshot();
});

test("Test event list component using pattern Container Presentational", () => {
  const { asFragment } = render(<App pattern={"container-presentational"} />);

  expect(asFragment()).toMatchSnapshot();
});

test("Test event list component using pattern Custom Hooks", () => {
  const { asFragment } = render(<App pattern={"custom-hooks"} />);

  expect(asFragment()).toMatchSnapshot();
});
