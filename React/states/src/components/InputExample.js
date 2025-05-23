//rfce 
import { useState } from 'react'
//değişme potansiyeli olan bir değişkeni tanımlamak için useState kullanıyoruz. state değiştiğinde component yeniden render ediliyor.
//useState bir hook. React'te bir componentin state'ini yönetmek için kullanılır. hooklar bir if yapısının içinde kullanılamaz.componentin tepesinde kullanılmalı. herhangi bir kontrole tabii olmamalı.
function InputExample() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

  return (
    <div>
        Name: <br />
        <input value = {name} onChange={(event) => setName(event.target.value)}/>
        <br />
        Surname: <br />
        <input value = {surname} onChange={(event) => setSurname(event.target.value)}/>
        <br />
        <br />
        {name} {surname}
    </div>
  )
}

export default InputExample