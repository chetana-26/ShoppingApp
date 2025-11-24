import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,Link, useNavigate } from 'react-router-dom'
import '../assets/styles/viewcard.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import '../../assets/styles/viewcard.css'

const ViewCrd = () => {
    let params=useParams()
    let productid=params.id
    let[card,setcard]=useState({})
    let navigate=useNavigate()
    // console.log(productid)
    console.log(productid)
    let fectapi=async()=>{
        let productdata=await axios.get(`http://localhost:4000/store/${productid}`)
        console.log(productdata.data)
        setcard(productdata.data) 
    }
   useEffect(()=>{
     fectapi()
   },[])
    // console.log(card)
    let{id,title,image,price,description,category,rating}=card
    let addtocart=()=>{
      // alert(id)
      let bool=window.confirm('Do you want to add this product to cart..?')
      if(bool){
         axios.post(`http://localhost:4000/cartitem`,card)
        alert('successfully added to cart')
        navigate(`/adminportal/cartitems`)
      }
      else{
        alert('product not added')
      }
    }
    
  return (
    <>
      <div className="viewcard">
        <div className="card">
            <div className="left">
                <div className="image">
                    <img src={image} alt="" />
                    
                </div>
                <div className="btn">
                    <div className="btn1"><button onClick={addtocart}>Add to Cart</button></div>
                </div>
            </div>
            <div className="right">
              <div className="category">
                  <p>{category}</p>
                </div>
                <div className="title">
                    <p>{title}</p>
                </div>
                
                <div className="price">
                    <p>₹ {Math.floor(price*80)}.00/-</p>
                </div>
                {/* <div className="ratings">
                   {rating.rate} <span>{rating.count}</span>
                </div> */}
                <div className="description">
                    <p>{description}</p>
                </div>
                <div className="btn4">
                    {/* <Link to='/adminportal/products'>Back</Link> */}
                    <button title='back' onClick={()=>navigate(`/adminportal/products`)}><ArrowBackIcon /></button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ViewCrd
