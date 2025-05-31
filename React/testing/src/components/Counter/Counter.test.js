import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../Counter/index"

describe("Counter Tests", () =>{
    let count, arttirBtn, azaltBtn; // değişkenleri tanımla

    beforeEach(() => {
        render(<Counter />); // her testten önce Counter bileşenini render et
        count = screen.getByText("Count: 0");
        arttirBtn = screen.getByText("Arttır");
        azaltBtn = screen.getByText("Azalt");
    }) //her bir testten önce çalışır. describe içinde tanımlanır

    beforeAll(() => {
        console.log("Counter testleri başlıyor");
    }) // describe içinde tanımlanır. ilk başta sadece bir kez çalışır

    afterEach(() => {
        console.log("Her testten sonra çalışacağım");
    }) // her bir testten sonra çalışır. describe içinde tanımlanır 
    // örneğin, testlerin sonunda sayfayı temizlemek için kullanılabilir

    afterAll(() => {
        console.log("Counter testleri bitti");
    }) //en sonda bir kez çalışır

    test("arttır btn", () => {
    userEvent.click(arttirBtn); // butona tıklama
    expect(count).toHaveTextContent("Count: 1"); // count değerinin 1 olduğunu kontrol et
})

    test("azalt btn", () => {
        userEvent.click(azaltBtn); // butona tıklama
        expect(count).toHaveTextContent("Count: -1"); // count değerinin 1 olduğunu kontrol et
    })
})

//test kodlarının eski hali
// test("arttır btn", () => {
//     render(<Counter />);

//     const count = screen.getByText("Count: 0");
//     const arttirBtn = screen.getByText("Arttır");

//     userEvent.click(arttirBtn); // butona tıklama
//     expect(count).toHaveTextContent("Count: 1"); // count değerinin 1 olduğunu kontrol et
// })

// test("azalt btn", () => {
//     render(<Counter />);

//     const count = screen.getByText("Count: 0");
//     const azaltBtn = screen.getByText("Azalt");

//     userEvent.click(azaltBtn); // butona tıklama
//     expect(count).toHaveTextContent("Count: -1"); // count değerinin 1 olduğunu kontrol et
// })

