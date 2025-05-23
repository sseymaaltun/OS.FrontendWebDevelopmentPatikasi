//import logo from './logo.svg';
import './App.css';
//import Header from './components/Header-temp'; 

import User from './components/User';

const name = "Mehmet";
const surname = "Seven";
const isLoggedIn = false;
const friends = [{
  id: 1,
  name: "Ahmet",
  
}, {
   id: 2,
  name: "Ayşe",
}]

function App() { //ilk harf büyük olmasına dikkat et.
  /*return ( //html değil jsx yani html görünümlü javascript
    //React bileşenleri JSX sayesinde HTML gibi yazılır ama aslında JavaScript çalışır. javascript XML
    <div>
      <h1>Hello React</h1>
      <Header />
      <Header />
    </div>
  );*/
  /*return (
    <>
      <h1>{isLoggedIn ? `Benim adım ${name}, soyadım ${surname}` : "Giriş yapmadınız."}</h1>
    </>
  )*/
  return (
    <div>
      <User name = "Mehmet" surname = "Seven" isLoggedIn = {true} age = {29} friends={friends} adress = {{
        title: "Ataşehir/İstanbul",
        zip: 34755,
      }}/>
    </div>
  )
}

export default App;
