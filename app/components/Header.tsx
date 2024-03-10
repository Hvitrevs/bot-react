import React from 'react'

const Header = () => {
  return (
    <>
      <h4 className='md:text-[18px] text-[#ff82cb] xxs:text-[9px] xxs:font-bold md:font-normal sm:tracking-[.05em]'>
            Hello!
      </h4>
          <h2 className='flex flex-row flex-nowrap md:text-[45px] xxs:text-[27px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 '>
          {" "}I am Orpheus{" "}
            
          </h2>
          <h4 className='font-semibold md:text-[25px] xxs:text-[15px] xxs:tracking-[.04em] sm:tracking-[.05em]'>
            I tell jokes and riddles
          </h4>
    </>

  )
}

export default Header