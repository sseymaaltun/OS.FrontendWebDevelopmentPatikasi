import { useState } from 'react';

function App() {
  const [name, setName] = useState('Mehmet');
  const [age, setAge] = useState(29);
  const [friends, setFriends] = useState(['Ali', 'Ayşe', 'Fatma']);
  const [address, setAddress] = useState({title: "İstanbul", zip: 34000});

  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>Yaş: {age}</h2>

      <button onClick= {() => setName("Ahmet")}>Change name</button>
      <button onClick= {() => setAge(30)}>Change age</button>
      <hr />
      <br></br>

      <h2>Friends</h2>
      {
        friends.map((friend, index) => (
          <div key={index}>
            <h3>{friend}</h3>
          </div>
        ))
      }
      <br></br>
      <button onClick= {() => setFriends([...friends, "Zeynep"])}>New add friend</button>

      <hr />
      <br></br>

      <h2>Adress</h2>
      <div>{address.title} {address.zip}</div>
      <br></br>
      <button onClick= {() => setAddress({...address, title: "Ankara", zip: 44444})}>Change adress</button>
    </div>
  );
}

export default App;
