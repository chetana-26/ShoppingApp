import { useNavigate } from 'react-router-dom'
import React ,{Link,useState} from 'react'
import '../assets/styles/landingpage.css'

const LandingPage = () => {
  let navigate=useNavigate()
  let[form ,setForm]=useState({mail:"",pswd:''})
  let handleInput=(e)=>{
    let keyName=e.target.name
    let keyValue=e.target.value
      //hear we are collecting the previous value from the input field and updtae new property(key and value pair) for the object
      // setForm(preVal=>(
      //   {...preVal,[keyName]:keyValue

      //   }
      // ))



      //hear directly access the value from the form (initial value of usestate) & update new property(key and value pair) for the object
       setForm({...form ,[keyName]:keyValue})
      console.log(keyName,keyValue)
  } 
let handlesubmit=(e)=>{
   e.preventDefault()
   console.log(form)
   let{mail,pswd}=form
   let credentials={
    email:'chetanakolar8@gmail.com',
    password:'admin@123'
   }
   let{email,password}=credentials
   if(mail===email && pswd===password){
    navigate(`/adminportal`)
    // alert('welcome')
   }
   else{
    let errstyle=`solid 1px red`
    e.target[0].style.border=errstyle
    e.target[1].style.border=errstyle
    // alert('invalid credentials')
    
   }
}
  //shortcut
//setForm({...form ,[e.target.name]:e.target.value})
 
  return (
    <>
        <div className="landingpage">

            <div className="bgImage">
              <div className="container">
                <div className="left">
                  <h1>Welcome to Online Shopping Application</h1>
                  <div className="formbox">
                    <h2>Login Page</h2>
                    <form  onSubmit={handlesubmit} action="">
                      <input type="email" onChange={handleInput} placeholder='Enter Email Address'name='mail' value={form.mail} />
                      <input  type="password" onChange={handleInput} placeholder='Enter Password' name='pswd'  value={form.pswd}/>
                      <button>Login</button>
                      
                    
                    </form>
                    {/* <Link>Forgot password</Link> */}
               
                   
                  </div>
                </div>
                <div className="right"></div>
              </div>
            </div>
        </div>
        <div className="res">
          {/* <h1>{mail}</h1>
          <h1>{pass}</h1> */}
        </div>
    </>
  )
}

export default LandingPage
