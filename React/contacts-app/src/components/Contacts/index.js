import { useState, useEffect } from 'react'
import './style.css'
import List from './List'
import Form from './Form'

function Contacts() {
  const [contacts, setContacts] = useState([
    {fullname: "Ali Veli", phonenumber: "123456789"},
    {fullname: "Ayşe Fatma", phonenumber: "987654321"},
    {fullname: "Mehmet Ali", phonenumber: "456789123"},
    {fullname: "Zeynep Yılmaz", phonenumber: "321654987"},
    {fullname: "Ahmet Demir", phonenumber: "159753486"}
  ]) //listede gösterilecek olan veriler

  useEffect(() =>{
    console.log(contacts)

  },[contacts]) //contacts değiştiğinde çalışır
//<List contacts = {contacts}/>  kayıtlı olan kişileri prop olarak gönderiyoruz
  return (
    <div id='container'>
        <List contacts = {contacts}/> 
        <Form addContact= {setContacts} contacts = {contacts}/>
    </div>
  )
}

export default Contacts