import React from 'react'
import '../styles/navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
    <>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    </style>
        
        <span>
        <div className="text-center mt-4 mb-3" id='pl'>
            <p className='fw-bolder fs-1 nav-heading'><Link to='/' style={{textDecoration: "none", color: "black"}}><span className='rotated fs-6'>The</span> Siren</Link></p>
        </div></span><span>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item"><Link className="nav-link fw-bold text-dark" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link fw-bold text-dark" to="/bollywood">Bollywood</Link></li>
                    <li className="nav-item"><Link className="nav-link fw-bold text-dark" to="/technology">Technology</Link></li>
                    <li className="nav-item"><Link className="nav-link fw-bold text-dark" to="/hollywood">Hollywood</Link></li>
                    <li className="nav-item"><Link className="nav-link fw-bold text-dark" to="/fitness">Fitness</Link></li>
                    <li className="nav-item"><Link className="nav-link fw-bold text-dark" to="/food">Food</Link></li>
                </ul>
                </div>
                
            </div>
        </nav></span>
        <div className="container underline"><hr className='nav-hr' /></div>
        
    </>
    )
}
