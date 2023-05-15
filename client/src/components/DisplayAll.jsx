import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
 import { Link } from "react-router-dom";
const DisplayAll = (props) => {
    // passing down getter and setter from the parent of (Main)
    const {allProductsList,setAllProductsList, removeFormDom } = props;
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
        .then((res)=>{console.log("FRONT END GET ALL RES", res);
        console.log('FRONT END GET ALL RES DATA GET ALL', res.data)
        setAllProductsList(res.data)
    })
    .catch(err => console.log(`something went wrong FRONT END GET ALL ${err}`))
    },[])
    const deleteProduct = (productID) =>{
        // going and deleting from our back end database 
        axios.delete(`http://localhost:8000/api/products/${productID}`)
        .then(res =>{ console.long( 'delete',res);
    })
        .catch(err => console.log(`something went wrong FRONT END DELETE ${err}`))

        // clear that one specific delete from our state
       removeFormDom(productID)
    }
  return (

    <div>
        {
            allProductsList.map((product,index)=>
            <div key= {index}>
                <p><u>{product.title} </u></p>
                {/* bring id  form localhost 8000 BACK END  end values */}
                <Link to = {`/product/${product._id}`} >View</Link> |
                <Link to={`/product/edit/${product._id}`}>Edit</Link> |
                {/* if we don't pass the event on while you refresh your page it going to delete all the data
                because it going to run infinity  */}
                {/* _id nust much in pour  */}
                <button onClick={(e)=> deleteProduct(product._id)}>Delete</button>

            </div>)
        }
    </div>
  )
}

export default DisplayAll