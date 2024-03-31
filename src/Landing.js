import React from 'react';
import LOGO from './logo.png';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

function Landing({ handleGetStarted }) {
  return (
    <div className="landing-section">
      <div className="logo-animation">
        <img src={LOGO} width={60} height={60} className='image' alt="logo"/>
      </div>
      <h2>🍿 Welcome to Trailers Trove 🍿</h2>
      <h3>Your premier destination for the latest and greatest movie trailers!</h3>
      <button className="get-started-btn" onClick={handleGetStarted}>
        Get Started
      </button>

      {/** Social links */}
      <div className='container'>
        <ul>
          <li className='list1'>
            <a  className="link" href="https://www.linkedin.com/feed/" target='_blank' rel="noreferrer">
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='list2'>
            <a className="link" href="https://github.com/mitchiemt11" target='_blank' rel="noreferrer">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='list3'>
            <a className="link" href='https://dev.to/mitchiemt11' target='_blank' rel="noreferrer">
              Dev <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>

      <div className="footer">
        Made with {'❤️'} by Mitchell Mutandah
      </div>
    </div>
  );
}

export default Landing;
