import { useState } from 'react'
import Location from './Components/Location'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {


  return (
   <div className='App'>
    <div className='containerBanner'>
        <img src="./src/assests/image 2.png" alt="" />
      </div>
        <div className='container mt-5'>
      <Location placeholder="Type a location Id..." />
    </div>
   </div>
  )
}

export default App
