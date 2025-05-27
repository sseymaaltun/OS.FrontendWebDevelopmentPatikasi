import './App.css';
import React, { useState, useMemo, useCallback } from 'react';
import Header from './components/Header';

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  //const data = { name: "Mehmet" }; // referansı bellekte değişiyor ve render ediliyor önüne geçmek için useMemo kullanabiliriz ya da functionın dışında tanımlayabiliriz

  // const data = useMemo(() => {
  //   return calculateObject(number); 
  //  }, [number]); //useEffectin kullanımına benzer.
  //dependencies array'i boş olduğu için sadece ilk renderda çalışır ve sonrasında değişmez.
  //dependencies array'ine number eklediğimizde, number değiştiğinde data değişir ve Header componenti yeniden render edilir.

  //const data = calculateObject(); // bunu kullanırsak input değiştiğinde Header componenti yeniden render edilir. useMemo kullanmazsak, her renderda bu fonksiyon çalışır ve performans kaybına neden olur. 
  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1);
  }, []); // useCallback ile fonksiyonu memoize ediyoruz. Böylece fonksiyon referansı değişmez ve Header componenti yeniden render edilmez.

  return (
    <div className="App">
        <Header increment = {increment}/>
        {/* <Header number = {number < 5 ? 0 : number} data = {data}/> */}
        <hr />

        <h1>{number}</h1>

        <br />
        <br />

        <input
          value={text}
          onChange={({target}) => setText(target.value)}
        />
    </div>
  );
}

// function calculateObject(number) {
//   console.log("calculateObject function called");
//   for(let i=0 ; i<100000000; i++) {
//     // Simulating a heavy calculation
//   }
//   console.log("calculateObject function finished");
//   return { name: "Mehmet", number };
// }


export default App;
