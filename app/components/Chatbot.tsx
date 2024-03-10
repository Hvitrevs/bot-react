import Image from 'next/image'
import React from 'react'

const Chatbot = () => {
  return (
    <div className='w-[450px] shadow-xl '>
      <div className='bg-[#0a0627]/05 backdrop-blur-[3px] z-50 border-[3px] shadow-lg shadow-[#1f1652] border-[#120b39] rounded-lg xxs:w-[250px] xs:w-[350px] md:w-[450px] md:h-[550px] xs:h-[25rem] flex '>
        <div className='h-[7rem] w-full bg-[#060122] flex flex-col px-4 py-4'>
        <span className='flex md:text-[13px] xs:text-[12px] xxs:text-[10px] w-full mt-[0.2rem] ml-[5.2rem]'>Chat support</span>
        <div className='px-5 pb-6 mt-2 gap-4  p-1'>
          <Image
            className="bg-white rounded-2xl border-[2px]"
            src="/avatar.png"
            alt="image"
            height={35}
            width={35}
          />
          <span className='flex justify-center mt-[-2.5rem] ml-[4rem] font-bold md:text-[16px] xs:text-[14px] xxs:text-[12px]'>
            Hi, I am Orpheus! How can I help you?
          </span>
        </div>
        </div>



      
      </div>
      
    </div>
  )
}

export default Chatbot