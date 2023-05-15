import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const DisplayOne = () => {
  // it need it own components, this has separate parents
  const [oneProduct , setOneProduct ] = useState({})
  // 'id' must much what we have in our route of FRONT END, this id is just variable that going to pass 
  // value we have received for the BACK END 
  const {id} = useParams();
  useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${id}`)
    .then((res)=>{
      console.log('FROND END GET ONE', res);
      console.log('FRONT END GET ONE RES.DAT', res.data)
      setOneProduct(res.data)
    })
    .catch(err => console.log(err))
  },[id])
  return (
    <div>
      <p> Title: {oneProduct.title}</p>
      <p>Price : {oneProduct.price}</p>
      <p>Description: {oneProduct.description}</p>
    </div>
  )
}

export default DisplayOne