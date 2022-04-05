import React from 'react'
import {FaBattleNet} from "react-icons/fa"
import {Link} from 'react-router-dom'


function NavBar() {
  return (
    <div className='header'>
    <FaBattleNet className='icon'/>
    <h2>Phone Solutions</h2>
    <ul>
    <li> <Link to ="/"> Home </Link></li>
    <li> <Link to ="/about"> About </Link></li>
    <li> <Link to ="/products">Products</Link></li>
    <li> <Link to ="/contact">Contact Us</Link></li>
    </ul>
    
    </div>
  )
}

export default NavBar