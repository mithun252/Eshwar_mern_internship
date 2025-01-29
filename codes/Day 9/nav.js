import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <nav>
          <ul>
            <h1>website</h1>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/users">users</Link></li>
          </ul>
        </nav>
      
    </div>
  )
}

export default Nav