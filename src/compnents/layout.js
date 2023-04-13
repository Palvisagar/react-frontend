import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Footer from './footer';
function Layout() {
  return (
    // <!-- header -->
    <>
    <header>
        <div className="container">
            <div className="header d-lg-flex justify-content-between align-items-center py-2 px-sm-2 px-1">
                {/* <!-- logo --> */}
                <div id="logo">
                    <h1><a href="index.html"><span className="text-bl">W</span>onderHomz</a></h1>
                </div>
                {/* <!-- //logo --> */}
                {/* <!-- nav --> */}
                <div className="nav_w3ls ml-lg-5">
                    <nav>
                        <label for="drop" className="toggle">Menu</label>
                        <input type="checkbox" id="drop" />
                        <ul className="menu">
                            <li><a href="index.html">Home</a></li>
                            <li><Link to="/property">Find a Property</Link></li>
                            <li>
                                {/* <!-- First Tier Drop Down --> */}
                                <label for="drop-2" className="toggle toogle-2">Pages <span className="fa fa-angle-down"
                                        aria-hidden="true"></span>
                                </label>
                                <a href="/">Pages <span className="fa fa-angle-down" aria-hidden="true"></span></a>
                                <input type="checkbox" id="drop-2" />
                                <ul>
                                    <li><Link className="drop-text" to="/pages/about">About Us</Link></li>
                                    <li><Link to="/services" className="drop-text">Services</Link></li>
                                    <li><Link to="/gallery" className="drop-text">Gallery</Link></li>
                                </ul>
                            </li>
                            <li><a href="#blog">Blog</a></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><a href="register.html">Register</a></li>
                        </ul>
                    </nav>
                </div>
                {/* <!-- //nav --> */}
            </div>
        </div>
    </header>
    <section class="contact py-5" id="contact">

    </section>
    {/* // <!-- //header --> */}
    <Footer/>   
    <Outlet></Outlet> 
    </>
  )
}

export default Layout
