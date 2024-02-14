import React from 'react'
import Registrationform from './components/Registrationform'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Admin from './components/Admin'
import Practice from './components/Practice'
import Addanddisplaynews from './components/Addanddisplaynews'
import Newzfeeds from './components/Newzfeeds'
import Userprofile from './components/Userprofile'
import Reports from './components/Reports'
import Homepage from './components/Homepage'
import FilterCategory from './components/FilterCategory'
import Context from './context/Context'
import Adminnewzfeeds from './components/Adminnewzfeeds'
import Firstnews from './components/Firstnews' 
import Secondnews from './components/Secondnews'
import Thirdnews from './components/Thirdnews'
import Fourthnews from './components/Fourthnews'
import Fifthnews from './components/Fifthnews'
import Sixthnews from './components/Sixthnews'

export default function App() {
  return (
    <>
 <Context>
 <BrowserRouter>
    
    <Routes>  
      
      <Route path='/' element= {<Homepage/>}/>
      <Route path='/Registrationform' element= {<Registrationform/>}/>
      <Route path='/loginpage' element= {<Login/>}/>
      <Route path='/admin' element= {<Admin/>}/>
      <Route path='/practice' element= {<Practice/>}/>
      <Route path='/addnewz' element= {<Addanddisplaynews/>}/>
      <Route path='/newzfeeds' element= {<Newzfeeds/>}/>
      <Route path='/Userprofile' element= {<Userprofile/>}/>
      <Route path='/report' element= {<Reports/>}/>
      <Route path='/filter' element= {<FilterCategory/>}/>
      <Route path='/Adminnewzfeeds' element= {<Adminnewzfeeds/>}/>
      <Route path='/Firstnews' element= {<Firstnews/>}/>
      <Route path='/Secondnews' element= {<Secondnews/>}/>
      <Route path='Thirdnews' element={<Thirdnews/>}/>
      <Route path='Fourthnews' element={<Fourthnews/>}/>
      <Route path='Fifthnews' element={<Fifthnews/>}/>
      <Route path='Sixthnews' element={<Sixthnews/>}/>
    </Routes>
  </BrowserRouter>
 </Context>
   
   
    </>
  )
}

