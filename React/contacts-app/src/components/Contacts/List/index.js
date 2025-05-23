import { useState } from 'react'


function List({contacts}) {
  const [filterText, setFilterText] = useState('') // inputa veri girildiğinde statee kaydedilecek olan veri
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key].toString().toLowerCase().includes(filterText.toLowerCase()) // inputa girilen veriyi küçük harfe çevirip arama yapıyoruz
    })
  })
  return (
    <div>
      <h1>Contacts List</h1>
      <input placeholder='Filter contact...' value = {filterText} onChange={(event) => {
        setFilterText(event.target.value)
      }}/>
      <ul className='list'>
        {filtered.map((item,index) => <li key = {index}>
          <span>{item.fullname}</span>
          <span>{item.phonenumber}</span>
        </li>)}
      </ul>
      <p>{filtered.length} Kişi</p>

    </div>
  )
}

export default List