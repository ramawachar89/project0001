import React from 'react'
import { Link ,NavLink} from "react-router-dom";
import {CgProfile} from 'react-icons/cg';
function Navbar() {
  return (
<section>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/#">UI/UX</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
                <Link className="nav-link active"  to="/">Home</Link>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active"  to="/register">Register</NavLink>
              </li>
            </ul>
            <span className="d-flex" role="login"/>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active"  to="/login">Login</NavLink>
                </li>
                <Link to='/Login'>
                  <CgProfile className='fs-4 my-2'/>
                </Link>
       
      </ul>
    </div>
  </div>
</nav>



</section>
  )
}

export default Navbar
