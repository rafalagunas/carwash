import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='hero'>
        <div className='hero__container'>
            <div className='hero__logo'>
                <p>JLLC</p>
            </div>
            <div className='nav__hero'>
                <ul className='items__nav'>
                    <li className='item__nav'>
                        <Link className='link__nav' to='/lorem'>Loremp</Link>
                    </li>
                    <li className='item__nav'>
                        <Link className='link__nav' to='/lorem'>Loremp</Link>
                    </li>
                    <li className='item__nav'>
                        <Link className='link__nav' to='/lorem'>Loremp</Link>
                    </li>
                    <li className='item__nav'>
                        <Link className='link__nav' to='/lorem'>Loremp</Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
