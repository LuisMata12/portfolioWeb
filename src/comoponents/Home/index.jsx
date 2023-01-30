import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import { AnimatedLetters } from '../AnimatedLetters'
// import { Logo } from './Logo'
import './index.scss'
import { Logo } from './Logo'

export const Home =()=>{
    const [letterClass, setLetterClass]=useState('text-animate');
    const nameArray = ['u','i','s'];
    const jobArray =[
        'w',
        'e',
        'b',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
      ];
      useEffect(() => {
         setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
    
    return(
        <>
          <div className="container home-page">
            <div className="text-zone">
              <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/013/760/442/original/abstract-letter-l-logo-illustration-in-trendy-and-minimal-style-png.png"
                  alt="JavaScript Developer Name, Web Developer Name"
                />
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={nameArray}
                  idx={15}
                />
                <br />
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={jobArray}
                  idx={22}
                />
              </h1>
              <h2>Front End Developer / JavaScript Expert / Back End Developer</h2>
              <Link to="/contact" className="flat-button">
                CONTACT ME
              </Link>
            </div>
            <Logo/>
          </div>
    
          {/* <Loader type="pacman" /> */}
        </>
      )
}




