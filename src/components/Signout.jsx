import React, { useEffect, useState } from 'react'
import './Signout.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom';

function Signout() {
    const [data, setData] = useState({
        id:'',
        address:{},
        company:{},
        geo:{},
        name:'',
        phone:'',


    })
    const { id } = useParams()
    useEffect(() => {
        // profilesingle();
        const profiles = JSON.parse(localStorage.getItem('profiles'))

        const currentProfile = profiles.find(p=>p.id == id);
        setData(currentProfile);
        console.log(currentProfile);

    }, [])
  return (
    <>
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' ,width:'350px'}}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title><img src={data.profilepicture} className='modalpoto'></img></Modal.Title>
        </Modal.Header>

        <Modal.Body className='modalname'>
          <p>{data.name}</p>
        </Modal.Body>

        <Modal.Footer className='modalname' >
          <Button variant="secondary" href='/'>Signout</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </>
  )
}

export default Signout