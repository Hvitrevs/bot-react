'use client'

import React from 'react'
import ThemeSwitch from './ThemeSwitch'


const Navbar = () => {

  return (
    <div className='w-full flex justify-center items-center xl:h-[60px] md:py-8 xxs:h-[55px] fixed top-0  z-50 lg:px-[1px] sm:px-[180px] xxs:px-[30px] bg-[#f3f6f8] dark:bg-[#2d2f3e] fixed '>

      <div className='flex xxs:p-[2px] xxs:ml-[5px] bg-transparent dark:bg-[#2d2f3e] border-[1px] border-b-[4px] border-[#bec6cd] border-b-[#ffffff]  dark:border-[#36384e] dark:border-b-[#36384e] shadow-[#818c94] shadow-inner shadow-2xl dark:shadow-[#0f1224] dark:text-[#5e6393] rounded-2xl justify-between z-50 items-center gap-3 fixed top-2'>

      <div className='flex flex-row gap-2 items-center border-r-[2px] border-[#bec6cd] dark:border-[#36384e]'>

        {/* logo */}
        <h1 className='flex flex-row flex-nowrap px-3 xxs:text-[10px] md:text-[15px] font-bold dark:text-[#aec1d4]'>
          Hivt
          <span className='text-[#ff7944]'>
            revs🦊
          </span>
        </h1>

      </div>

      <div className='flex items-center  px-2 py-1 xxs:visible'>
        <div className='md:p-[8px] xxs:p-[3px] xxs:text-[15px] md:text-[18px] border-t-[3px] border-[#ffffff] bg-gradient-to-b from-[#d6dce2] to-[#ecf6ff]  shadow-[#8f9ca7] shadow-md dark:border-[#36384e] dark:shadow-[#171a31] dark:text-[#5e6393] dark:bg-none  rounded-2xl '>
          <ThemeSwitch />
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Navbar