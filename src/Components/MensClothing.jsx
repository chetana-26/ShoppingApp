import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './Product'


   
const MensClothing = (props) => {
    let {mensclothing}=props
    console.log(mensclothing)
  return (
    <div>
      {mensclothing?.map((ele, index) => (
        <div key={index}>
          <h3>{ele.title}</h3>
          <p>{ele.category}</p>
        </div>
      ))}
    </div>
  );
};
      

export default MensClothing
