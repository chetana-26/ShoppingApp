import React from 'react'
import '../../assets/styles/addproducts.css'
import { useState } from 'react'
import axios from 'axios'

const AddProducts = () => {
  let[newpProduct,setNewProduct]=useState({title:'',price:"",description:"",category:"",image:"",rating:{rate:"",count:""}})
let handleinput=(e)=>{
  let keyName=e.target.name
  let keyValue=e.target.value
  // setNewProduct({...newpProduct,[keyName]:keyValue})
  console.log(keyName,keyValue)
  if(keyName.includes('.')){
    const[parent,child]=keyName.split('.');
    setNewProduct({
      ...newpProduct,[parent]:{...newpProduct[parent],[child]:keyValue}
    });

  }
  else{
    setNewProduct({...newpProduct,[keyName]:keyValue});
  }
 

};
let handlesubmit=(e)=>{
  e.preventDefault()
  console.log(newpProduct)

}
  let addtocart=()=>{
      // alert(id)
      let bool=window.confirm('Do you want to add this product to cart..?')
      if(bool){
         axios.post(`http://localhost:4000/store`,newpProduct)
        alert('successfully added to cart')
        navigate(`/adminportal/cartitems`)
      }
      else{
        alert('product not added')
      }
    }

  return (

    <>
      
      <div className="addproducts">
               < h1>Add products</h1>
               <div className="cont">
                <form onSubmit={handlesubmit} action="">
                    <div className="inputs">
                        <input type="text" placeholder='Enter title' name='title' value={newpProduct.title} onChange={handleinput}/>

                    <input type="number" name="price" id="" placeholder='Enter price in doller' value={newpProduct.price} onChange={handleinput} />

                    <input type="text " name='description' placeholder='Enter discription' value={newpProduct.description} onChange={handleinput} />
                   
                   {/* <input type="text"  /> */}
                    <select name="category" value={newpProduct.category} onChange={handleinput} id="">
                        <option value=" ">---select category---</option>
                        <option value="men's clothing">men's clothing</option>
                        <option value="jewelary">jewelary</option>
                        <option value="electronics">electronics</option>
                        <option value="women's clothing">women's clothing</option>

                    </select>
                    <input type="text" placeholder='Enter Image url' name='image' value={newpProduct.image}  onChange={handleinput}/>
                    <input type="number" name="rating.rate" id=""  placeholder='Enter rating for item' value={newpProduct.rating.rate} onChange={handleinput}/>
                    <input type="text" name="rating.count" id=""  value={newpProduct.rating.count} placeholder='Enter count' onChange={handleinput} />
                     </div>
                 <button  onClick={addtocart}> Add Products</button>
                 </form>
               </div>
                   
                
      </div>
    </>
  )
}

export default AddProducts
