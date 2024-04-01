import React from 'react';
import LOGO from './logo.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'


function Landing({ handleGetStarted }) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#000030] text-[aliceblue] z-[1000]">
      <div className="rounded-lg">
        <img src={LOGO} width={60} height={60} className='rounded-lg object-cover' alt="logo" />
      </div>
      <h2>🍿 Welcome to Trailers Trove 🍿</h2>
      <h3>Your premier destination for the latest and greatest movie trailers!</h3>
      <button className="bg-white border-none text-[1.4rem] text-[#000030] cursor-pointer rounded mt-20" onClick={handleGetStarted}>
        Get Started
      </button>

      {/** Social links */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700 rounded-lg'>
            <a className='flex justify-between items-center w-full text-gray-300 '
              href="https://www.linkedin.com/feed/" target='_blank' rel="noreferrer">
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600 rounded-lg'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="https://github.com/mitchiemt11" target='_blank' rel="noreferrer">
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-700 rounded-lg'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="https://mail.google.com/mail/u/0/#inbox" target='_blank' rel="noreferrer">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600 rounded-lg'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="/">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
      <div className="absolute bottom-[30px] right-[30px] text-[aliceblue] text-[1rem]">
        Made with {'❤️'} by Mitchell Mutandah
      </div>
    </div>
  );
}

export default Landing;
