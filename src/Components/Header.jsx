import React from 'react'
import headerimage from "../asset/images/logo.png"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='Header'>
    <nav className="navbar navbar-expand-md bg-light">
  <div className="container-fluid mx-2">
    <Link className="nav-link active mx-4" to='/home'> <img src={headerimage}  alt="logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <Link className="nav-link" aria-current="page" to='/aboutus'>About Us</Link>
        </li>
        <li className="nav-item dropdown mx-4">
          <Link className="nav-link dropdown-toggle" to='/acupuncture' role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/acupuncture">Acupuncture</Link></li>
            <li><Link className="dropdown-item" to="/functional">Functional Nutrition</Link></li>
            <li><Link className="dropdown-item" to="/yoga">Yoga</Link></li>
            <li><Link className="dropdown-item" to="/cosematic">Cosematic</Link></li>
            <li><Link className="dropdown-item" to="/guasha">Guasha</Link></li>
            <li><Link className="dropdown-item" to="/moxibustion">Moxibustion</Link></li>
            <li><Link className="dropdown-item" to="/pranayama">Pranayama</Link></li>
            <li><Link className="dropdown-item" to="/cupping">Cupping</Link></li>
          </ul>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to='/testimonials'>Testimonials</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to='/contactus'>Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header