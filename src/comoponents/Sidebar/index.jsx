import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser, } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin,faGithub,faSkype,} from '@fortawesome/free-brands-svg-icons'
import './index.scss'

import React from 'react'

export const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src="https://static.vecteezy.com/system/resources/previews/013/760/442/original/abstract-letter-l-logo-illustration-in-trendy-and-minimal-style-png.png" alt="logo"/>
            <img className='sub-logo' src={LogoSubtitle} alt="sub-logo"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to='/'>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/luis-mata-ramirez-a49a9b215/'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/LuisMata12'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/LuisMata12'>
                        <FontAwesomeIcon icon={faSkype} color="#4d4d4e"/>
                    </a>
                </li>
        </ul>
    </div>
  )
}
