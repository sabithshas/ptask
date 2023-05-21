import React ,{ useState } from 'react'
import Sidebar from '../components/Sidebar'
import Signout from '../components/Signout'
function Todo() {
    const [modal,setModal]=useState(false)
    const postarray=['Todo']
  return (
    <>
     <div className='box'>
        <div className='fullbox2'>
            <Sidebar/>
        </div>
    <div className='fullbox1'>
                <div className='fullboxhead' >
                    <p className='prof'>{postarray}</p>
                    <p className='prof1' onClick={()=>{setModal(true)}}><img src="./assets/pdemo.webp" className='nnn'></img>nsnsnhhvbhvvg</p>
                </div>
                <div className='fullboxbody'>
                    <h1 className='comingsoon'>Comingsoon</h1>
                </div>
                <div className='oopen'>
                    {modal && <Signout/>}
                    </div>
            </div>
            </div>
    </>
  )
}

export default Todo