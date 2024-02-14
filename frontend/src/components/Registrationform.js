import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import { Link, Navigate, useNavigate } from "react-router-dom"

export default function Registrationform() {
    const [first, setfirst] = useState({name:'',email:'',password:'',cpassword:'',image:''})
    console.log(first)

const change=(e)=>{
        setfirst({...first,[e.target.id]:e.target.value})

    }
    const save=async (e)=>{
      e.preventDefault()
      const uppercaseRegex = /[A-Z]/;
      const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
      const numberRegex = /[0-9]/;
    
      // Check if the password meets all the criteria
      const hasUppercase = uppercaseRegex.test(first.password);
      const hasSpecialChar = specialCharRegex.test(first.password);
      const hasNumber = numberRegex.test(first.password);
    
      // Determine if the password is strong or not
      const isStrong =
        hasUppercase && hasSpecialChar && hasNumber && first.password.length >= 8;
    
      // Provide feedback to the user
      if (isStrong) {
        alert("Password is strong.");
      } else {
        alert("Password is not strong.");
        if (!hasUppercase) {
          alert("Include at least one uppercase letter.");
        }
        if (!hasSpecialChar) {
          alert("Include at least one special character.");
        }
        if (!hasNumber) {
          alert("Include at least one number.");
        }
        if (first.password.length < 8) {
          alert("Password should be at least 8 characters long.");
        }
        return(<></>)
      }                                                                                                                                                                                                                                                                                                                                                
        if(first.name.length<5){
            alert("Min length should be 5 characters")
            return(<></>)
        }
        if(first.password!==first.cpassword){
            alert('Password should be same ')
            return(<></>)
        }
       
        var response= await fetch("http://localhost:4000/insert",{
            method:'post',
            body:JSON.stringify({name:first.name,email:first.email,password:first.password,image:first.image}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        var data=await response.json()
        console.log(data)
        if(data.success===true){
          alert('Registration Successfull')
          navigate('./newzfeeds')
        }else{
          alert('Choose unique credentials')
        }
    }
    const changeimg=(e)=>{
      var img=e.target.files[0];
      var reader=new FileReader();
      reader.readAsDataURL(img)
      reader.onload=()=>{
        setfirst({...first,image:reader.result})
      }

    }
  return (
    <>
    <Navbar/>

  <div className=" h-100" style={{marginTop:'5%'}}>
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: 25}}>
          <div className="card-body p-md-5">
            <div className="row ">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">SIGN UP</p>
                <form className="mx-1 mx-md-4" onSubmit={save}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="name"> Name</label>
                      <input type="text" id="name" className="form-control" onChange={change} minLength={5} required/>
                      
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline col-lg-6 flex-fill mb-0">
                    <label className="form-label" htmlFor="email">Email</label>
                      <input type="email" id="email" className="form-control" onChange={change} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
                 
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="password">Password</label>
                      <input type="password" id="password" className="form-control" onChange={change} required/>
                    
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="cpassword">Confirm Password</label>
                      <input type="password" id="cpassword" className="form-control" onChange={change} minLength={5} required/>
                   
                    </div>
                  </div>
                 
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <label htmlFor="image" className="btn btn-outline-info fs-3 mx-4">Upload Profile</label>
                    <input type="file" id="image" style={{display:'none'}} onChange={changeimg}/><br/>
                    <button type="submit" className="btn btn-primary btn" >Register </button>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4" >
                Already Sign Up?<Link to='/loginpage'>Login</Link>
                </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


    </>
  )
}
