import React from 'react'
import CurrentLocation from './currentLocation'
import './App.css'

const App = () => {
  return (
    <div>
      <div className="container">
        <CurrentLocation/>
      </div>

      <div className="footer-info">
       Developed by{" "}Abhishek Kumar
      </div>
    </div>
  )
}

export default App
