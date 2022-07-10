import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResidentInfo from './ResidentInfo';



const Location = ({ placeholder}) => {

    const [location, setLocation] = useState({});
    const [searchLocation, setSearchLocation] = useState("");

    useEffect(() => {
        const random = Math.floor(Math.random() * 126) + 1
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => setLocation(res.data))
    }, [])

    const searchId = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${searchLocation}`)
            .then(res => setLocation(res.data))
    }
    const handleKeyDown = event => {
        if (event.key === 'Enter') {
            axios.get(`https://rickandmortyapi.com/api/location/${searchLocation}`)
                .then(res => setLocation(res.data))
        }
    };

   const population = () =>{
    if (location.residents?.length == 0){
        return(
            <>
                <h1 className=' mt-5' style= {{color: "red"}}>There are no habitants in this location.</h1>
            </>
        )
    }
   }

    return (
        <div>
           
            <h1 >Rick and Morty Wiki</h1>
            <div >
            <input className='filtrar' type="text" placeholder={placeholder} value={searchLocation} 
            onChange={e => setSearchLocation(e.target.value)} onKeyDown={handleKeyDown} />
            <button onClick={searchId}>Search</button>
            </div>
            <div className='row'>
                <div className="container" >
                    <div className="row" style={{backgroundColor: "#052226", padding: "10px", borderRadius: "5px"}}>
                        <h2><b>Nombre:</b> {location.name}</h2>
                        <div className="col mt-5">
                            <p><b>Type:</b> {location.type}</p>
                        </div>
                        <div className="col  mt-5">
                            <p><b>Dimension:</b> {location.dimension}</p>
                        </div>
                      
                        <div className="col mt-5">
                            <p><b>Population:</b> {location.residents?.length}</p>
                        </div>
                    </div>
                    <h2 className=' mt-5'>Residents</h2>
                    {population ()}
                    <div className='row  mt-5'>
                      {location.residents?.map(resident =>(
                            <ResidentInfo resident={resident}  key={resident}/>
                        ))
                       }
                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default Location;