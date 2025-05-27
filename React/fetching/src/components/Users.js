import React from 'react';
import { useEffect, useState} from 'react'
import axios from 'axios';

function Users() { //component mount olduğunda veriye erişmeye çalışacağız useEffect ile
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true); //veri yüklenmeye çalışırken loading yazsın

    // FETCH KULLANIMI
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((response) => response.json()) //axiosda jsona gerek yok doğrudan obje olarak dönüyor
    //     .then((data) => setUsers(data))
    //     .catch((error) => console.log(error)) //hata yakalama loading yazısı gitmiyor false olmuyor çünkü
    //     .finally(
    //         () => setIsLoading(false) //false yaptık ekranda görünmeye devam etmesin diye
    //     )
    // },[])

    //AYNI İŞİ YAPAN AXIOS KULLANIMI
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then((response) => setUsers(response.data))
        .catch((error) => console.log(error)) //hata yakalama loading yazısı gitmiyor false olmuyor çünkü
        .finally(
            () => setIsLoading(false) //false yaptık ekranda görünmeye devam etmesin diye
        )
    },[])
  return (
    <div>
        <h1>Users</h1>
        {
            isLoading && <div>Loading...</div> //isLoading true ise Loading... göstersin
        }

        {
            users.map((user) => <div key={user.id}>{user.name}</div>)
        }
    </div>

  )
}

export default Users