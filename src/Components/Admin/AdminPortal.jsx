import React from 'react'
import Navbar from '../Navbar'
import Home from '../Home'
import Product from '../Product'
import CartItem from '../CartItem'
import { Route,Routes } from 'react-router-dom'
import ViewCrd from '../ViewCrd'
import AddProducts from './AddProducts'
import MensClothing from '../MensClothing'
import WomensClothing from '../WomensClothing'
import Jewelery from '../Jewelery'
import Electronics from '../Electronics'

const AdminPortal = ({products}) => {
  return (
    <>
     <div>
      <Navbar/>
      <Routes>
        {/* <Home products={products} /> */}

        <Route element={<Home  products={products} />} path='/'/>
        <Route element={<Product/>} path='/products'/>
         <Route element={<CartItem/>} path='/cartitems'/>
         <Route element={<ViewCrd/>} path='/viewcard/:id'/>
        <Route element={<AddProducts/>} path='/addproducts'/>
        <Route element={<MensClothing/>} path='/mensclothing'/>
        <Route element={<WomensClothing/>} path='/womensclothing'/>
        <Route element={<Jewelery/>} path='/jewelery'/>
        <Route element={<Electronics/>} path='/electronics'/>
          

      </Routes>
     </div>
    </>
  )
}

export default AdminPortal
