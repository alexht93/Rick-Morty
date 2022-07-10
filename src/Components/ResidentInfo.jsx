import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const ResidentInfo = ({ resident }) => {

    const [residentInfo, setResidentInfo] = useState({})

    useEffect(() => {
        axios.get(resident)
            .then(res => setResidentInfo(res.data))
    }, [])

    console.log(residentInfo);

    return (
        <div className='col mb-4 '>
            <div className='card' style={ {minWidth: "100px", maxWidth: "300px"}}>
                <img  src={residentInfo.image} alt=""/>
                <div className='card-body status' style={{backgroundColor: "#052226"}}>
                
                    <h5 className='card-title'><b>Name:</b> {residentInfo.name}</h5>
                    <hr />
                    <div className="status">
                    <span className={residentInfo.status}></span>
                    <p> <b>Status:</b> {residentInfo.status}</p>
                    <p>  <b>Origin:</b> {residentInfo.origin?.name}</p>
                    <p><b>Episode appearances:</b> {residentInfo.episode?.length}</p>
                    </div>
                
                </div>

            </div>
        </div>
    );
};

export default ResidentInfo;