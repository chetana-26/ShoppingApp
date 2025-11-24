import React from 'react'
import '../assets/styles/home.css'
import { Link} from 'react-router-dom'
import MensClothing from './MensClothing'
// import MensClothing from './MensClothing'

const Home = ({products}) => {
  // let mensclothing = cart?.filter(ele => ele.category === "men's clothing") || [];
// let mensclothing = products?.filter(ele => ele.category === "men's clothing") || [];

    let mensclothing = products?.filter(ele => ele.category === "men's clothing") || [];
  // let mensclothing=products.filter(ele=>ele.category==="men's clothing")
  //   // console.log(MensClothing)
  return (
    <>
    <div className="main">
      <div className="head1">
       <div className="h1">
         <Link to='/adminportal/mensclothing/'><img src="https://tse4.mm.bing.net/th/id/OIP.APleugLSwNoHpkQ5DOF8SgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" /></Link>
         <p>Men's clothing</p>
       </div>
       <div className="h2">
         <Link to='/adminportal/womensclothing/'><img src="https://thumbs.dreamstime.com/z/womens-clothes-set-isolated-female-clothing-collage-accessories-130694655.jpg" alt="" /></Link>
          <p>Women's clothing</p>

       </div>
        <div className="h3">
         <Link to='/adminportal/jewelery/'><img src="https://tse2.mm.bing.net/th/id/OIP.8RhirzWv0ZHEOMvARkiVZgHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3" alt="" /></Link>
          <p>Jewelary</p>

       </div>
       <div className="h4">
         <Link to='/adminportal/electronics/'><img src="https://tse4.mm.bing.net/th/id/OIP.EE_ndsO6kcX6VmcLnBW97gHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3https://tse4.mm.bing.net/th/id/OIP.EE_ndsO6kcX6VmcLnBW97gHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" /></Link>
          <p>Electronics</p>

       </div>
       </div>
      <div className="head2"><img src="https://rukminim2.flixcart.com/fk-p-flap/2020/340/image/1338bd4fc60390d8.jpg?q=60" alt="" /></div>
      <div className="head3">
          <div className="head31">
            <div className="c1"><img src="https://rukminim2.flixcart.com/image/140/140/xif0q/projector/h/e/n/atom-2x-10-5-ei9027-led-projector-egate-original-imahhsqm5ctgzae3.jpeg?q=60" alt="" /><p>Projector</p>
            <p id='a'>From 6990</p></div>
            <div className="c2"><img src="https://rukminim2.flixcart.com/image/140/140/xif0q/camera/s/o/y/na-digital-kids-camera-20mp-1080p-32gb-card-supported-mini-original-imagy2znwq4uy4z8.jpeg?q=60" alt="" /><p>Top Mirror</p><p id='a'>Shop now</p></div>
            <div className="c3"><img src="https://rukminim2.flixcart.com/image/140/140/xif0q/monitor/c/n/8/-original-imahf4rbgwtzquxh.jpeg?q=60" alt="" /><p>Monitors</p><p id='a'>From 6995</p></div>
            <div className="c4"><img src="https://rukminim2.flixcart.com/image/140/140/xif0q/monitor/v/h/t/-original-imahebtvxh22sgtw.jpeg?q=60" alt="" /><p>Monitor</p><p id='a'>From 8279</p></div>
            <div className="c5"><img src="https://rukminim2.flixcart.com/image/140/140/l58iaa80/headphone/k/z/m/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg?q=60" alt="" /><p>Ear podes</p><p id='a'>Grab Now</p></div>
            <div className="c6"><img src="https://rukminim2.flixcart.com/image/220/220/xif0q/printer/s/8/d/-original-imafkykednshkhx5.jpeg?q=60" alt="" /><p>Printers</p><p id='a'>From 2336</p></div>
          
          </div>
          <div className="head32"><img src="https://rukminim2.flixcart.com/fk-p-flap/320/500/image/ce3cf81edb760559.jpg?q=60" alt="" /></div>
      </div>
      </div>
            {/* <MensClothing mensclothing={mensclothing}/> */}
    </>
  )
}

export default Home
