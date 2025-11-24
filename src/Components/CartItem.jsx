import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../assets/styles/cartitem.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const CartItem = () => {
  let[cartItem,setCartItem]=useState([])
  let navigate=useNavigate()
  let fetchapi= async()=>{
    let apidata= await axios.get('http://localhost:4000/cartitem')
    setCartItem(apidata.data)
    // console.log(apidata.data)

  }
 useEffect(()=>{
   fetchapi()
 },[])
 let deleteitem=async(id)=>{
   let bool=window.confirm('do you want to delete this item...!')
    if(bool){
     await axios.delete(`http://localhost:4000/cartitem/${id}`)
     alert('item deleted')
    }
    else{
      alert('not deleted')
    }
  // axios.delete(`http://localhost:4000/cartitem/${id}`)
 }
 let viewmore=(id)=>{

    navigate(`/adminportal/viewcard/${id}`)
   }
 
  return (
    <>
        <div className="cartitems">
          <h1>Cart Items</h1>
          <div className="container">
            <table border={2}>
              <thead>
                <tr>
                  <th>slno</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Delete</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartItem.map((elem,index)=>{
                    let{id,image,title,price}=elem
                    return(
                      <>
                  
                        <tr key={index}>
                          <td>{index+1}</td>
                          <td><img src={image} alt="" /></td>
                          <td>{title}</td>
                          <td>{Math.floor(price*80)}.00/-</td>
                          <td><button onClick={()=>deleteitem(id)} ><DeleteIcon/></button></td>
                          <td> <button onClick={()=>viewmore(id)}><RemoveRedEyeIcon/></button></td>
                         
                        </tr></>
                    )

                  })
                  
                  
                }
              
              </tbody>
              {/* <tfoot>
               <tr>
                 <th colSpan={4}>Grand Total:
                  {cartItem.map(ele=>Math.floor(ele.price*80))
                  .reduce((preval,curval)=>preval+curval)}.00/-

                </th>
               </tr>
              </tfoot> */}
            </table>
          </div>
        </div>
     
    </>
  )
}

export default CartItem


