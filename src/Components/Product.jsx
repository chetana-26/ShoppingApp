import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../assets/styles/product.css'
import { useNavigate } from 'react-router-dom'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import StarIcon from '@mui/icons-material/Star';


const Product = () => {
  let[products,setProducts]=useState([])
  let navigate=useNavigate()
  let fetchApi= async ()=>{

   let apidata= await axios.get('http://localhost:4000/store')
    await setProducts(apidata.data)

  }
    //  console.log(apidata)
  useEffect(()=>{
     fetchApi()
   },[])
   let viewmore=(id)=>{

    navigate(`/adminportal/viewcard/${id}`)
   }
  // // fetchApi()
  // console.log(products)
  let deleteproduct= async(id)=>{
    let bool=window.confirm('do you want to delete this item...!')
    if(bool){
     await axios.delete(`http://localhost:4000/store/${id}`)
     alert('item deleted')
    }
    else{
      alert('not deleted')
    }

  }
  return (
    <div className="product">
    <div className="heading">
   <h1>   Products</h1>
    </div>
     <div className="container">
      {
        products.map((elem)=>{
      let{id,title,price,category,image,rating}=elem
     return(
      <div className="res">
        {/* <div className="id">{id}</div> */}
        <div className="category">{category}</div>
         <div className="image">   <img src={image} alt="" /></div>
        <div className="title">{title}</div>
        {/* <div className="price">{price}</div> */}
       <div className="box">
        <div className="rating">{rating.rate}
          <span><StarIcon/></span><span id='a'>({rating.count})</span>
        </div>
        <div className="price">

₹{Math.floor(price*80)}.00/-</div>
       </div>
       <div className="btns">
        <button onClick={()=>viewmore(id)}><RemoveRedEyeIcon/></button>
        <button onClick={()=>deleteproduct(id)} >< DeleteIcon/></button>
       </div>
        {/* <div className="rating">{rating}</div> */}
      </div>
     )
        })
      }
     </div>
    </div>
  )
}

export default Product
