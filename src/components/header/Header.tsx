import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/svg/logo.png'

const Header: React.FC = () => {
  return (
    <div className='hero'>
        <div className='hero__container'>
            <div className='hero__logo'>
                <img width='120' src={logo} alt="" />
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
            <div className="toggle">
                <button className="toggle__botton">
                    <span className="l1 span"></span>
                    <span className="l2 span"></span>
                    <span className="l3 span"></span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header
