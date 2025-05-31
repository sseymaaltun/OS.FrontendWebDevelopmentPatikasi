import { useState} from 'react'

const defaultItems = [
    {
        name: "Alışverişe git"
    },
    {
        name: "Kitap oku"       
    },
    {
        name: "Yürüyüş yap"
    },
];

function Todo() {
    const [text, setText] = useState("");
    const [items, setItems] = useState(defaultItems);

    const addItem = () => { 
        setItems([...items, { name: text }]); 
        setText(""); };

  return (
    <div>
        <input value = {text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addItem}>Add</button> 
        <br /> <br />
        {
            items.map((item, key) => (
                <li key={key}>
                    {item.name}
                </li>
            ))
        }
    </div>
  )
}

export default Todo