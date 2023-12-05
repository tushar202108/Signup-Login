import React from 'react'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom'




function Navbar() {
  const auth = localStorage.getItem("users");
  
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup')
  }
  return (

    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand text-success fst-italic" href="/">Tuberculosis-Detector</Link>
          <button className="navbar-toggler bg-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {auth ? <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/About" className="nav-link active text-success fst-italic " aria-current="page" >About</Link>
              </li>
              <li className="nav-item">
                <Link to="/team" className="nav-link active text-success fst-italic " aria-current="page" >Team</Link>
              </li>

              <li className="nav-item">
                <Link to="/X-Rays" className="nav-link text-success fst-italic " >Details</Link>
              </li>
              <li className="nav-item"><Link onClick={logout} to="/signup" className="nav-link text-success fst-italic " >Log Out({JSON.parse(auth).name})</Link></li>
            </ul>
              :
              
              <ul className="navbar-nav">
                <li className="nav-item"> <Link to="/signup" className="nav-link  text-success fst-italic" >Signup</Link></li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link text-success fst-italic" >Log in</Link>
                </li>
              </ul>
            }
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar