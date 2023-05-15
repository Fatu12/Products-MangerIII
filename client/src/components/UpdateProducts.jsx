import React, {useEffect, useState} from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
const UpdateProducts = () => {
    const [updateProducts, setUpdateProducts] = useState({
        title:'',
        price:'',
        description:''
    })
    const {id} = useParams()
    const Navigate =  useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res=>{ console.log(res); console.log(res.data);
         // since we going to update we don't need the current values 
            setUpdateProducts(res.data)
        })
        .catch(err => console.log('Something went wrong FRONT END UPDATE',err))
       
    }, [id])
    const updateSubmitHandler = (e)=>{
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/products/${id}`, updateProducts)
        .then(res=> {console.log(res)
            // send back to home
        Navigate('/')})
        .catch(err=> console.log(`something went wrong FRONT END UPDATE ${err}`))

    }
  const ChangeHandler = (e)=>{
    // This will send a PATCH request to update  the instance in the database
        setUpdateProducts({...updateProducts, [e.target.name]: e.target.value})
    }
  return (
    <div>
        <div className='row'>
            <form className='col-m4 offset-1' onSubmit={updateSubmitHandler}>
            {/* you don't need name in the input if you don't have onChangeHandle
            and also value={item.price} you can just say price if you set your state individually  */}
                <h1 className='text-center'> Product Manager</h1>
            
                <div className='form-group col-m2'>
                    <label htmlFor="title"> Title</label>
                    {/* {errors.title ? <span>{errors.title.message} </span> :null} */}
                
                    <input type="text" name = "title"  onChange = {ChangeHandler} className='form-control mt-2'  value={updateProducts.title}  />
                </div>
                <div className='form-group'>
                    <label htmlFor="price"> Price</label>
                    <input type="number" name = "price" onChange={ChangeHandler} className='form-control mt-2'  value={updateProducts.price}     />

                </div>
                <div className='form-group'>
                    <label htmlFor="description"> Description </label>
                    <input type="text" name = "description" onChange={ChangeHandler}  className='form-control mt-2 '  value={updateProducts.description}/>

                </div>
                <button class="btn btn-primary" type="submit">Update</button>
                <div>
                    
 
                </div>
               
            </form>

        </div>
        
       </div>
  )
}
export default UpdateProducts