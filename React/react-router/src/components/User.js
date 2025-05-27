import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function User() {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response =>  setUser(response.data))
    .finally(() => setLoading(false))

  },[id])

  return (
    <div>
      <h1>User Detail</h1>
      {loading && <div>Loading...</div>}
      {!loading && <code>{JSON.stringify(user)}</code>}
      <br />
      <br />
      <Link to ={`/users/${parseInt(id) + 1}`}>Next User {(parseInt(id) + 1)}</Link>
    </div>
  )
}
