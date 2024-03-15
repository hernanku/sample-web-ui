// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';


const Navbar = () => {

	const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);

	return (
		<header className='navbar'>
			<div className='navbar-logo'>Sample UI</div>
			<button className='hamburger' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
				<span>☰</span>
			</button>
			<nav className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
				<a href='/about' className='navbar-item'>About Us</a>
				<a href='/news' className='navbar-item'>News</a>
				<a href='/reviews' className='navbar-item'>Reviews</a>
				<a href='/how-tos' className='navbar-item'>How-Tos</a>
				<a href='/podcasts' className='navbar-item'>Podcasts</a>
			</nav>
			<div className='navbar-search'>
				<input type='text' placeholder='Search...'/>
			</div>
			<div className='navbar-icons'>
				<a href='/facebook' className='navbar-icon'>F</a>
				<a href='/x-app' className='navbar-icon'>X</a>
				<a href='/youtube' className='navbar-icon'>Y</a>
				<a href='/instagram' className='navbar-icon'>I</a>
			</div>
			<div className={`navbar-login ${isMobileMenuOpen ? 'active' : ''}`}>
				<a href='/login' className="navbar-login">Login</a>
			</div>
		</header>
	)
};


export default Navbar;

