import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const Products = () => {
  const { id } = useParams();
  const [users, setUsers] = useState({})


  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setUsers(data);
      console.log(data);
    };
    getUsers();
  }, [id]);

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>{id}</h1>
      {<pre>
        {JSON.stringify(users, null, 2)}
      </pre>}
    </div>
  )
}

export default Products


