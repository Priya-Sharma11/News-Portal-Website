
import { useState } from 'react'
import Createcontext from './Createcontext'
export default function Context(props) {
    const [holdcategory, setholdcategory] = useState({})
    const [categorynewz, setcategorynewz] = useState([])
   function change(e){
    setholdcategory(e.target.id)
    console.log(holdcategory)

   }
   const getallnewz=()=>{
    fetch("http://localhost:4000/fetchallnewz",{
       method:'get',
       
       headers:{
           "Content-type":"application/json"
       }
   }).then((data)=>{
       data.json().then((item)=>{
           
       setcategorynewz(item)
       
   })})
       .catch()
   }
  
  return (
    <Createcontext.Provider value={{change,setholdcategory,holdcategory,getallnewz,categorynewz}}>
    {props.children}
    </Createcontext.Provider>
  
  )
}
