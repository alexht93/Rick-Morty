import { useState } from 'react'
import Location from './Components/Location'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderImg from './Components/HeaderImg';



function App() {


  return (
   <div className='App'>
      <HeaderImg/>
        <div className='container mt-5'>
      <Location placeholder="Type a location Id..." />
    </div>
   </div>
  )
}

export default App
