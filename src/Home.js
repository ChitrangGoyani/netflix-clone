
import React from 'react'
import Banner from './Banner'
import './Home.css'
import Navbar from './Navbar.js'
function Home() {
    return (
        <div className="homeScreen">           
            <Navbar /> 
            <Banner />
            {/* Rows */}
        </div>
    )
}

export default Home
