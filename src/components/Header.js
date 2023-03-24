import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    
    <div className='Header'>
    <Link to={'/'}><h1 style={{cursor:'pointer'}}>Home</h1></Link>
    <Link to={'/about'}><h1 style={{cursor:'pointer'}}>About</h1></Link>
    <Link to={'/contact'}><h1 style={{cursor:'pointer'}}>Contact</h1></Link>
    </div>
    
  )
}

export default Header