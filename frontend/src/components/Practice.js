import React, { useEffect, useState } from 'react'


const options=["cricket","football","hockey"]
     const days=["weekday","weekend"]
export default function Practice(){

   

    // var mypromis=new Promise((resolve ,reject)=>{
    //     var a=5
    //     if(a>0){
    //        resolve("ok")
    //     }else{
    //          reject('not ok')
    //     }

    // })
    // mypromis.then((data)=>{
    //     console.log(data)
    // }).catch((err)=>{
    //     console.log(err)
    // })
   //    let mypromise =new Promise(function(resoleve,reject){
//     var x=0;
//     if(x===0){
//         resoleve('ok')
//     }else{
//         reject("error")
//     }
//    })
//      mypromise.then((data)=>{
//         console.log(data)
//      }).catch((err)=>{
//         console.log(err)
//      })
                
            //   aaabbbbcccaa
            //   a3b4c3a2

            // var str="saloni"
            // var leng=str.length
            // var str1=[]
            // for(let i=leng-1;i>=0;i--){
            //     str1=str[i];
            //     console.log(str1)
            // }
            // var response= fetch("https://jsonplaceholder.typicode.com/todos/1").then((data)=>{

            //     data.json().then((data1)=>{
            //         console.log(data1)
            //     })
            // }).catch((err)=>{
            //     console.log(err)
            // })

            // var cars=['maruti','toyota','bmw','audi','skoda'];
            // console.log(cars);
            // cars.push('nissan');
            // console.log(cars);   
            // cars.splice(0,1);
            // console.log(cars);
            // for(var i=cars.length-1;i>=0;i--){
            //     console.log(cars[i]);
            // }
        //     const [first, setfirst] = useState({game:'',day:''})
        //   const handleclick=(e)=>{
            
           
        //   setfirst({...first,[e.target.id]:e.target.value})
            
        //   }
          const countries=[
            {name:'india',value:'IN',cities:['delhi','mumbai']},
            {name:'pakista',value:'PK',cities:['lahor','karanchi']},
            {name:'bangladesh',value:'BG',cities:['dhaka','chitogong']},
          ]
     
//   return (
//     <>
//         <div className='app m-5'>
//             <h1>whick game </h1>
//             <h2>you will play</h2>
//         </div>
//         {options.map((data)=>{
//             return(<>
//                 <ul>
//             <input type="radio" id='game' onChange={handleclick} value={data} name='game'/>
//            <label htmlFor='game'>{data}</label>

//             </ul>

         

//             </>)
//         })
        
       
//         },{
//             days.map((data)=>{
//                 return(<>
//                     <ul>
//                     <input type="radio" id='day' onClick={handleclick} value={data} name='day'/>
//                     <label htmlFor='day'>{data}</label>

//                     </ul>
//                 </>)
//             })
//         }
//         <div>we will play {first.game} on {first.day}</div>
//     </>
//   )
const [first, setfirst] = useState({})
const handlechange=(e)=>{
 
    console.log(e.target.value)
    setfirst(e.target.value)
    console.log(first)

}
return(<>
    {
      <select onChange={handlechange} value={first}>
        {  countries.map((data)=>{
            return(<>
                <option value={data.cities}>{data.name}</option>
            </>)
        })}
      </select>
    }
    {
        <select>
            {
                Object.keys(first).map((data)=>{
                    return(<>
                        <option>{first}</option>
                    </>)
                })
            }
        </select>
    }
</>)
}
