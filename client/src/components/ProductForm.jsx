import React, {useState} from 'react'
import axios from 'axios';

export const ProductForm = (props) => {
    const {allProductsList,setAllProductsList} = props;
    const [item, setItem] = useState({
        title: "",
        price: "",
        description : ""
    })
    const changeHandler = (e)=>{
        // console.log(e)
        setItem({...item, [e.target.name]: e.target.value})
    }
    const SubmitHandler = (e)=>{
         e.preventDefault();
         axios.post("http://localhost:8000/api/products/", item)
         .then(res=>{console.log('FRONT END CREATE res', res);
                    console.log('FRONT END CREATE res.data ',res.data);
                    // setItem([...item, res.data])})
                    // setting the state to hold our current data to not get lost
                   setAllProductsList([...allProductsList, res.data])
                    setItem("")
    })
        .catch(err => console.log(`something went wrong in FRONT END CREATE ${err}`))
    }
  return (
    <div class = 'row'>
        <div className='row justify-content-center'>
            <div className="row">
            <form className="col-md-4 offset-1" onSubmit={SubmitHandler}>
                <div className="form-group ">
                    <label>Title:</label>
                    <input type="text" name="title" className="form-control " onChange={changeHandler
                    } value={item.title} />
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input type="number" name="price" className="form-control" onChange={changeHandler} value={item.price} />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <input type="text" name="description"  className="form-control" onChange={changeHandler} value={item.description}/>
                </div>
                <button className="btn btn-primary mt-3">Submit</button>
            </form>

            
        </div>
    
    </div>
    </div>
  )
}
