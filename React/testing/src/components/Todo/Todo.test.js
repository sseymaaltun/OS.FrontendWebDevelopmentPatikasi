import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "../Todo/index"

describe("Todo Tests", () => {
    let button, input; //add butonu ve input elemanını bilmemiz lazım

    beforeEach(() => {
        render(<Todo />); // her testten önce Todo bileşenini render et
        button = screen.getByText("Add"); // Add butonunu bul
        input = screen.getByRole("textbox"); // input elemanını bul
    })

    test("Varsayılan olarak verilen 3 nesne render edildi ", () => {
        const items = screen.getAllByRole("listitem"); // liste elemanlarını bul
        expect(items).toHaveLength(3); // 3 eleman olduğunu kontrol et
    })

    test("Input ve button dökümanda bulunmalı", () =>{
        expect(input).toBeInTheDocument(); // input elemanının dökümanda olduğunu kontrol et
        expect(button).toBeInTheDocument(); // button elemanının dökümanda olduğunu kontrol et
    })

    test("Inputa string girilip butona basılınca listeye eklenmeli",() => {
        const name = "Yeni Görev";
        userEvent.type(input, name); // inputa yazı yaz

        userEvent.click(button); // butona tıkla

        expect(screen.getByText(name)).toBeInTheDocument(); // yeni görev dökümanda olmalı bekliyoruz

    }) 
})