import React, { useEffect, useState } from 'react'
import './Profile.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Signout from '../components/Signout';

function Profile() {
    const [modal,setModal]=useState(false)
    const [favr, setfavr] = useState(JSON.parse(localStorage.getItem('single')) || [])
    const [data, setData] = useState({
        id:'',
        address:{},
        company:{},
        geo:{},
        name:'',
        phone:'',


    })
    const { id } = useParams()
    console.log(id);
    // const profilesingle = async () => {
    //     await axios.get(`https://panorbit.in/api/users.json`).then((res) => {
    //         console.log(res);
    //         setData(res.data.users)

    //     })
    // }    
    console.log(data);
    useEffect(() => {
        // profilesingle();
        const profiles = JSON.parse(localStorage.getItem('profiles'))

        const currentProfile = profiles.find(p=>p.id == id);
        setData(currentProfile);
        console.log(currentProfile);

    }, [])

    

    return (
        <>
        <div className='containarfull'>
            <div className='containaarside'>
                <Sidebar className='sss' />
            </div>
            <div className='containar'>
                <div className='containarhead' >
                    <p className='prof'>Profile</p>
                    <p className='prof1' onClick={()=>{setModal(true)}} style={{cursor:'pointer'}}><img src={ data.profilepicture} className='nnn'></img>{data.name}</p>
                    {/* <div className='oopen'>
                    {modal && <Signout/>}
                    </div> */}
                </div>
                <div className='containar2'>
                    <div className='containarside'>
                        <img src={data.profilepicture} className='mnn'></img>
                        <p className='naame'>{data.name}</p>
                        <div className='details'>
                            <div className='labels'>
                                <p className='tests'>Username </p><p className='tests1'>:</p><p className='tests2'>{data.username}</p>
                            </div>
                            <div className='labels'>
                                <p className='tests'>Email</p><p className='tests1'>:</p><p className='tests2'>{data.email}</p>
                            </div>
                            <div className='labels'>
                                <p className='tests'>phone</p><p className='tests1'>:</p><p className='tests2'>{data.phone}</p>
                            </div>
                            <div className='labels'>
                                <p className='tests'>Website</p><p className='tests1'>:</p><p className='tests2'>{data.website}</p>
                            </div>
                        </div>
                        <div className='details2'>
                            <h5 className='text-center'>Company</h5>
                            <div className='labels1'>
                                <p className='testss'>Name </p><p className='testss1'>:</p><p className='testss2'>{data.company.name}</p>
                            </div>
                            <div className='labels1'>
                                <p className='testss'>cathchphrase</p><p className='testss1'>:</p><p className='testss2'>{data.company.catchPhrase}</p>
                            </div>
                            <div className='labels1'>
                                <p className='testss'>bs</p><p className='testss1'>:</p><p className='testss2'>{data.company.bs}</p>
                            </div>
                        </div>
                    </div>
                    <div className='containarright' >
                    
                        <div className='Address'>
                            <h5 className='AD'>Adress :</h5>
                            <div className='rightr'>
                            <div className='labels1'>
                                <p className='testss'>Street</p><p className='testsss1'>:</p><p className='testsss2'>{data.address.street}</p>
                            </div>
                            <div className='labels1'>
                                <p className='testss'>Suite</p><p className='testsss1'>:</p><p className='testsss2'>{data.address.suite}</p>
                            </div>
                            <div className='labels1'>
                                <p className='testss'>City</p><p className='testsss1'>:</p><p className='testsss2'>{data.address.city}</p>
                            </div>
                            <div className='labels1'>
                                <p className='testss'>Zipcode</p><p className='testsss1'>:</p><p className='testsss2'>{data.address.zipcode}</p>
                            </div>
                                </div>
                            
                        </div>
                        <div className='oopen'>
                    {modal && <Signout/>}
                    </div>
                        <div className='map'>
                            <img  src="../assets/pdemo2.webp" className='map1' alt='error'></img>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Profile