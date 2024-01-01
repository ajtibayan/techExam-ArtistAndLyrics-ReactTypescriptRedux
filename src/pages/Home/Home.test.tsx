import React from "react";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

describe("home page tests", () => {
  test("all fields display in initial state", () => {
    renderWithProviders(<Home />);

    expect(
      screen.getByRole("heading", { name: /Artist List Section/i, level: 2 })
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("heading", { name: /Artist Selection/i, level: 2 })
    ).toHaveLength(5);
    expect(
      screen.getByRole("button", { name: /add artist/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /remove artist/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Artist Details Section/i, level: 2 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Please select artist/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /No artist selected/i, level: 2 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /No Details/i, level: 2 })
    ).toBeInTheDocument();
  });

  test("artist card hover state", async () => {
    renderWithProviders(<Home />);

    const artistCardElement = screen.getByRole("button", {
      name: /Bruno Mars/i,
    });
    expect(artistCardElement).toBeInTheDocument();

    await userEvent.hover(artistCardElement);
    expect(artistCardElement).toHaveStyle("background: #dcf3e7");
  });

  test("page state after selecting artist card", async () => {
    renderWithProviders(<Home />);

    const artistCardElement = screen.getByRole("button", {
      name: /Bruno Mars/i,
    });
    await userEvent.click(artistCardElement);
    expect(artistCardElement).toHaveStyle("background: #dcf3e7");

    const dropdownHeader = await screen.findAllByRole("button", {
      name: /It Will Rain/i,
    });
    expect(dropdownHeader).toHaveLength(2);
    expect(
      screen.getByRole("heading", { name: /It Will Rain Lyrics/i, level: 2 })
    ).toBeInTheDocument();
    expect(screen.getByText(/If you ever leave me/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /It Will Rain Details/i, level: 2 })
    ).toBeInTheDocument();
    expect(screen.getByText(/Composer: Bruno Mars/i)).toBeInTheDocument();

    const artistCardElement2 = screen.getByRole("button", {
      name: /Adele/i,
    });
    await userEvent.click(artistCardElement2);
    expect(artistCardElement2).toHaveStyle("background: #dcf3e7");

    const dropdownHeader2 = await screen.findAllByRole("button", {
      name: /Set Fire To The Rain/i,
    });
    expect(dropdownHeader2).toHaveLength(2);
    expect(
      screen.getByRole("heading", {
        name: /Set Fire To The Rain Lyrics/i,
        level: 2,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/All the things you'd say/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Set Fire To The Rain Details/i,
        level: 2,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/Composer: Adele Adkins/i)).toBeInTheDocument();
  });

  test("remove artist functionality", async () => {
    renderWithProviders(<Home />);

    expect(
      screen.getAllByRole("heading", { name: /Artist Selection/i, level: 2 })
    ).toHaveLength(5);

    const removeArtistButton = screen.getByRole("button", {
      name: /remove artist/i,
    });

    await userEvent.click(removeArtistButton);
    expect(
      screen.getAllByRole("heading", { name: /Artist Selection/i, level: 2 })
    ).toHaveLength(5);

    const artistCardElement = screen.getByRole("button", {
      name: /Bruno Mars/i,
    });
    await userEvent.click(artistCardElement);
    await userEvent.click(removeArtistButton);
    expect(artistCardElement).not.toBeInTheDocument();
    expect(
      screen.getAllByRole("heading", { name: /Artist Selection/i, level: 2 })
    ).toHaveLength(4);
    expect(
      screen.getByRole("button", { name: /Please select artist/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /No artist selected/i, level: 2 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /No Details/i, level: 2 })
    ).toBeInTheDocument();
  });

  test("state after selecting song from dropdown", async () => {
    renderWithProviders(<Home />);

    const artistCardElement = screen.getByRole("button", {
      name: /Bruno Mars/i,
    });
    await userEvent.click(artistCardElement);
    const dropdownHeader = await screen.findAllByRole("button", {
      name: /It Will Rain/i,
    });
    await userEvent.click(dropdownHeader[0]);
    const dropdownOption = await screen.findByRole("button", {
      name: /Locked Out Of Heaven/i,
    });
    expect(dropdownOption).toBeInTheDocument();
    await userEvent.click(dropdownOption);

    expect(
      screen.getByRole("heading", {
        name: /Locked Out Of Heaven Lyrics/i,
        level: 2,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/One, two, one, two, three/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Locked Out Of Heaven Details/i,
        level: 2,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Production Date: 2012-10-01/i)
    ).toBeInTheDocument();
  });
});
