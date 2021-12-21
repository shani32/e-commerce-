import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Header =()=>{
    return(
        <div className='header'>
            <Link to="/"> Homepage</Link>
            <Link to="/products">Products</Link>
        </div>
    )
}
export default Header