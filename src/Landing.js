import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiPencilAlt } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'


function Landing({ handleGetStarted, showConfetti }) {
  const { width, height } = useWindowSize()
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#000030] text-[aliceblue] z-[1000]">
      <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-[aliceblue] md:text-5xl lg:text-6xl dark:text-white"> 🍿 Welcome to Trailers Trove 🍿 </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Your premier destination for the latest and greatest movie trailers!</p>
      <button onClick={handleGetStarted} disabled={showConfetti} className={`cursor-pointer inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ${showConfetti ? 'cursor-not-allowed bg-gray-300 hover:bg-gray-300 opacity-50 ' : ''}`}>
        Get Started
        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </button>
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
        />
      )}

      {/** Social links */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700 rounded-lg'>
            <a className='flex justify-between items-center w-full text-gray-300 '
              href="https://www.linkedin.com/in/mitchell-mutandah-5726aa212/" target='_blank' rel="noreferrer">
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600 rounded-lg'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="https://github.com/mitchiemt11" target='_blank' rel="noreferrer">
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600 rounded-lg'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="https://medium.com/@mitchiemt11">
              Medium <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-700 rounded-lg'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="https://dev.to/mitchiemt11" target='_blank' rel="noreferrer">
              DEV <HiPencilAlt size={30} />
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
