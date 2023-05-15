import React, {useState} from 'react'
import DisplayAll from '../components/DisplayAll'
import { ProductForm } from '../components/ProductForm'

const Main = () => {
    const [allProductsList, setAllProductsList] = useState([])
    const removeFormDom = productID =>{
      setAllProductsList(allProductsList.filter(product => product._id !== productID))
    }


  return (
    <div>
        {/*  ProductsForm  and DisplayAll can   both utilize the getter and setter 
        established in their parent component :  we putting this here since we can display two different 
        in the same page we going to use the link here so we can share the same state*/}
        <ProductForm  allProductsList ={allProductsList}  setAllProductsList = {setAllProductsList} />
        < DisplayAll allProductsList= {allProductsList} setAllProductsList = {setAllProductsList} removeFormDom= {removeFormDom} />
    </div>
  )
}

export default Main