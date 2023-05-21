import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate=useNavigate()
  const[profile, setProfile]=useState([])
  const[local,setLocal]=useState(JSON.parse(localStorage.getItem('profiles')) || [])
  const profilelist=async()=>{
    await axios.get('https://panorbit.in/api/users.json').then((res)=>{
        console.log(res);
        setProfile(res.data.users)
        localStorage.setItem('profiles',JSON.stringify(res.data.users))
    })
}
console.log(profile);
useEffect(()=>{
  profilelist();
},[])

// const fullprofile = (id) =>{
//   console.log(id);
//   navigate(`/profile/${id}`)
  
//  }
const fullprofile=((item)=>{
  // setLocal([...local,{...item}])
  //   console.log("gotit",local);
    
    navigate(`profile/${item}`)
})

 
  return (
    <>
    
 <div className='Container'>

 < div className='Card'>
 <h2 className='cardtitle'>Select an account</h2>
 
 <div className='cdpt'>
 {profile ?.map((i)=>{
      return(
 <p className='cardlist'key={i.id}  onClick={()=>{fullprofile(i.id)}} style={{cursor:'pointer'}} > <img src={i.profilepicture} alt="" className='imgp'></img>{i?.name}</p> 
 )
})}
 </div>
  
 <h4 className='cardtite'></h4>
 </div> 

 </div>
     
   

    </>
  )
}

export default Home