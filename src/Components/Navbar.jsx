import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import '../assets/styles/navbar.css'
import pic1 from '../assets/images/logo.png'
import { Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <div className="logo">
        <img src={pic1} alt="" />
      </div>
      <div className="links">
        <ul>
          <li><Link to="/adminportal/"><span>Home </span><HomeIcon/></Link></li>
         
          <li><Link to="/adminportal/products"><span >Products</span> <ProductionQuantityLimitsIcon/></Link></li>

          <li><Link to="/adminportal/addproducts/"><span >Add Product </span>< AddCircleIcon /></Link></li>
          <li><Link to="/adminportal/cartitems"><span  >CartItem </span><ShoppingCartIcon/></Link></li>
          <li><Link to="/"><span  >Logout</span><LogoutIcon/></Link></li>
        </ul>
      </div>

    </div>
      {/* <h1>I m in navbar Component</h1> */}
    </>
  )
}

export default Navbar
