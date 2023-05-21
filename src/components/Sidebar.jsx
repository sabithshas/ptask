import React, { useState } from 'react'
import './Sidebar.css'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
  const navigate=useNavigate()
  const postarray=['Posts','Gallery','Todo']
  const handlechangeprofile=()=>{
    navigate('/profile')
  }
  const handlechangepost=()=>{
    navigate('/new')
  }
  const handlechangegallery=()=>{
    navigate('/gallery')
  }
  const handlechangetodo=()=>{
    navigate('/todo')
  }
 
  return (
    <>
  
    <div className='navbar'>
        <div className='sidemain'>
        <h4 className='sidemenu' onClick={handlechangeprofile} style={{cursor:'pointer'}} >Profile</h4>
        </div>
        <div className='sidemain'>
        <h4 className='sidemenu' onClick={handlechangepost} style={{cursor:'pointer'}}>Posts</h4>
        </div>
        <div className='sidemain'>
        <h4 className='sidemenu' onClick={handlechangegallery}style={{cursor:'pointer'}}>Gallery</h4>
        </div>
        <div className='sidemain1' >
        <h4 className='sidemenu' onClick={handlechangetodo} style={{cursor:'pointer'}}>Todo</h4>
        </div>
    </div>
    
    </>
  )
}

export default Sidebar