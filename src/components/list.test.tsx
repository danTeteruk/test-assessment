import { cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";
import { List } from "./addRow";

afterEach(cleanup);

describe("UrlRedirectForm", () => {
  it("renders and matches snapshot", async () => {
    const { asFragment, container } = render(
      <List
        todos={[{ id: 1, title: "some titile", isDone: false }]}
        toggleItem={jest.fn()}
      />
    );

    expect(container).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });

  it("triggers toggleItem callback", async () => {
    const mockToggle = jest.fn();

    const { getByTestId } = render(
      <List
        todos={[{ id: 1, title: "some titile", isDone: false }]}
        toggleItem={mockToggle}
      />
    );

    fireEvent.click(getByTestId("toggle"))
    expect(mockToggle).toHaveBeenCalledWith(1);
  });
});
