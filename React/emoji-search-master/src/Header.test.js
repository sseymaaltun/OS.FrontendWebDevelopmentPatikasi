import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import emojiList from "./emojiList.json";

describe("Emoji Search App", () => {
  test("1. Başlık kısmı başarılı şekilde render ediliyor mu?", () => {
    render(<App />);
    const headerText = screen.getByText(/Emoji Search/i);
    expect(headerText).toBeInTheDocument();
  });

  test("2. Uygulama ilk açıldığında emoji listesi render ediliyor mu?", () => {
    render(<App />);
    const emojiRows = screen.getAllByText(/"Grinning"/i);
    // filterEmoji("", 20) olduğu için ilk 20 emoji render edilmelidir
    expect(emojiRows.length).toBe(20);
  });

  test("3. Filtreleme yapıldığında liste filtreye uygun şekilde yeniden render ediliyor mu?", () => {
    render(<App />);
    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, { target: { value: "heart" } });

    const filtered = emojiList
      .filter(
        (emoji) =>
          emoji.title.toLowerCase().includes("heart") ||
          emoji.keywords.includes("heart")
      )
      .slice(0, 20);

    const emojiTitles = filtered.map((e) => e.title);
    emojiTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

    test("4. Emojiye tıklanınca kopyalama işlemi gerçekleşiyor mu?", async () => {
    render(<App />);
    const emojiElement = screen.getAllByText(/Click to copy emoji/i)[0].parentElement;

    await userEvent.click(emojiElement);

    expect(document.execCommand).toHaveBeenCalledWith("copy");
    });

});
