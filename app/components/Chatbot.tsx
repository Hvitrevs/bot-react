import { NearMe } from '@mui/icons-material'
import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Chatbot = () => {
  return (
    <div className='w-[450px] shadow-xl flex'>
      <div className='bg-[#0a0627]/05 backdrop-blur-[3px] z-20 border-[3px] shadow-lg shadow-[#1f1652] border-[#120b39] rounded-xl  xxs:w-[250px] xs:w-[350px] md:w-[450px] md:h-[550px] xs:h-[25rem] flex flex-col'>
        <div className='h-[6rem] w-full bg-[#060122] flex flex-col px-4 py-2 rounded-xl '>
          <span className='flex md:text-[13px] xs:text-[12px] xxs:text-[10px] font-thin ml-[4.5rem]'>
            Chat support
          </span>
          <div className='px-2 pb-6 gap-4 p-1'>
            <Image
              className=" p-1 rounded-2xl border-[2px]  border-[#05b356]"
              src="/avatar.png"
              alt="image"
              height={45}
              width={45}
            />
            <p className='text-[9px] mt-[7px] ml-[6px] font-thin'>
              Online
            </p>
            <span className='flex justify-center mt-[-3rem] ml-[4rem] font-normal md:text-[16px] xs:text-[14px] xxs:text-[12px]'>
              Hi, I am Orpheus! How can I help you?
            </span>
          </div>
        </div>
        <div className='flex bg-none h-full flex-col z-[30]'>
            <div className='text-white ml-2'>
              
            </div>
        </div> 

        <div className=' flex bg-[#060122] flex flex-col px-4 py-4 rounded-xl '>
          <input className='w-full bg-[#160f41]  rounded-xl p-2 px-4' type='text' placeholder='Start a conversation ...' />
          <button className='mt-2 p-1 bg-transparent border-[1px] border-[#241a63] text-[#2c5dd6] font-semibold rounded-2xl hover:bg-[#291f84] hover:text-[#3aa4f0]'><NearMe /> </button>
        </div>
      
      </div>
      
    </div>
  )
}

export default Chatbot