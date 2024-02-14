import React,{useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CreateContext from '../context/Createcontext';


export default function Navbar() {
  const navigate=useNavigate()
  const usecontext = useContext(CreateContext);
  const { change ,setholdcategory,holdcategory} = usecontext;
  const handlelogout=()=>{
    localStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <>  
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand fs-2 " to="/">NewZilla</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/newzfeeds">Newz Feeds</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link " to='/Userprofile'>Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/addnewz">Add News</Link>
        </li>
       
        <li className="nav-item dropdown text-dark">
  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Category
  </a>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/filter" onClick={change} id='sports'>sports</Link></li>
    <li><Link className="dropdown-item" to="/filter" onClick={change} id='general'>general </Link></li>
    <li><Link className="dropdown-item" to="/filter" onClick={change} id='science'>science </Link></li>
    <li><Link className="dropdown-item" to="/filter" onClick={change} id='entertainment'>entertainment </Link></li>
  </ul>
  </li>
  </ul>
    
    {
      !localStorage.getItem('token')?
      <div className="d-flex" role="search">
        <Link to='/loginpage' style={{textDecoration:'none'}}><button className='btn fs-4 btn-outline-info mx-2' >Login</button></Link>
        <Link to='/Registrationform' style={{textDecoration:'none'}}><button className='btn fs-4 btn-outline-success mx-2'>Signup</button></Link>
      </div>:<Link className='btn btn-outline-success' onClick={handlelogout}>Logout</Link>
      }
    </div>
  </div>
</nav>
    </>
  )
}
