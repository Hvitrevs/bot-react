'use client'

import React from 'react'
import ThemeSwitch from './ThemeSwitch'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'


const Navbar = () => {

  return (
    <div className='w-full flex justify-center items-center xl:h-[60px] md:py-8 xxs:h-[55px] fixed top-0  z-50 lg:px-[1px] sm:px-[180px] xxs:px-[30px]fixed '>

      <div className='flex xxs:p-[2px] xxs:ml-[5px] bg-transparent  dark:text-[#5e6393] rounded-2xl justify-between z-50 items-center gap-3 fixed top-2'>

      <div className='flex flex-row gap-2 items-center border-r-[2px] border-[#bec6cd] dark:border-[#36384e]'>

        {/* logo */}
        <h1 className='flex flex-row flex-nowrap px-3 xxs:text-[10px] md:text-[15px] font-bold dark:text-[#aec1d4]'>
        Built by Hivt
          <span className='text-[#ff7944]'>
            revs🦊
          </span>
        </h1>
      </div>
      

        <div className='flex items-center '>
          <div className=' flex flex-row gap-2 items-center border-r-[2px] border-[#bec6cd] dark:border-[#36384e] pr-2'>
            <Link 
              className='hover:text-pink-500 xxs:text-[18px] md:text-[25px]'  href='https://github.com/Hvitrevs'>
                <FaGithub />
            </Link>
          </div>
        </div>
      

      <div className='flex items-center  py-1 xxs:visible'>
        <div className='md:p-[8px] xxs:p-[3px] xxs:text-[15px] md:text-[18px]  '>
          <ThemeSwitch />
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Navbar