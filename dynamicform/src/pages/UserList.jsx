import React, { useEffect, useState } from 'react'
import "./user.css"
const UserList = () => {
var details=JSON.parse(localStorage.getItem("userList"))||[]
const [data,setData]=useState([])
// useEffect(()=>{
//     for(let i=0;i<details.length; i++) {
        
//         // for(let j=0; j<details[0].length; j++) {
//         //     setData(details[i][j])
//         // }
//     }
// },[])

console.log(details)
  return (
    <div className="mainBody">
    {details.map((item,index)=>(

        <div className="container" key={index}>
        <h3>Name:{item.name}</h3>
        <h4>Age:{item.age}</h4>
        {item[0]!==null? <><p>Address 1</p>
         <p>House No.:{item[0].house}</p>
         <p>City:{item[0].city}</p>
         <p>State:{item[0].state}</p>
         <p>Country:{item[0].country}</p></>:"" }
         <br/>
       
         {item[1]!==undefined? 
         <>
         <p>Address 2</p>
         <p>House No.:{item[1].house}</p>
         <p>City:{item[1].city}</p>
         <p>State:{item[1].state}</p>
         <p>Country:{item[1].country}</p></>:""}
         <br/>
         {item[2]!==undefined? 
         <>
         <p>Address 3</p>
         <p>House No.:{item[2].house}</p>
         <p>City:{item[2].city}</p>
         <p>State:{item[2].state}</p>
         <p>Country:{item[2].country}</p></>:""}
         <br/>
         {item[3]!==undefined? 
         <>
         <p>Address 4</p>
         <p>House No.:{item[3].house}</p>
         <p>City:{item[3].city}</p>
         <p>State:{item[3].state}</p>
         <p>Country:{item[3].country}</p></>:""}
         <br/>
         {item[4]!==undefined? 
         <>
         <p>Address 5</p>
         <p>House No.:{item[4].house}</p>
         <p>City:{item[4].city}</p>
         <p>State:{item[4].state}</p>
         <p>Country:{item[4].country}</p></>:""}
         <br/>
         {item[5]!==undefined? 
         <>
         <p>Address 6</p>
         <p>House No.:{item[5].house}</p>
         <p>City:{item[5].city}</p>
         <p>State:{item[5].state}</p>
         <p>Country:{item[5].country}</p></>:""}
         <br/>

         {item[6]!==undefined? 
         <>
         <p>Address 7</p>
         <p>House No.:{item[6].house}</p>
         <p>City:{item[6].city}</p>
         <p>State:{item[6].state}</p>
         <p>Country:{item[6].country}</p></>:""}
         <br/>
         {item[7]!==undefined? 
         <>
         <p>Address 8</p>
         <p>House No.:{item[7].house}</p>
         <p>City:{item[7].city}</p>
         <p>State:{item[7].state}</p>
         <p>Country:{item[7].country}</p></>:""}
         <br/>
         {item[8]!==undefined? 
         <>
         <p>Address 9</p>
         <p>House No.:{item[8].house}</p>
         <p>City:{item[8].city}</p>
         <p>State:{item[8].state}</p>
         <p>Country:{item[8].country}</p></>:""}
         <br/>
         {item[9]!==undefined? 
         <>
         <p>Address 10</p>
         <p>House No.:{item[9].house}</p>
         <p>City:{item[9].city}</p>
         <p>State:{item[9].state}</p>
         <p>Country:{item[9].country}</p></>:""}
         <br/>
       </div>
    ))}
     
    </div>
  )
}

export default UserList