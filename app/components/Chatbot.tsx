import Image from 'next/image'
import React from 'react'

const Chatbot = () => {
  return (
    <div className=' max-w-[450px] shadow-md '>
      <div className='border-[1px] rounded-lg w-[350px] h-[550px] flex  bg-[#03001417] backdrop-blur-xl'>
        <div className='h-[6rem] w-full bg-[#03001417] flex flex-col'>
        <span className='flex items-center justify-center w-full mt-[0.5rem]'>Chat support</span>
        <div className='px-5 pb-4 mt-2 gap-4'>
          <Image
            className="bg-white rounded-2xl"
            src="/avatar.png"
            alt="image"
            height={35}
            width={35}
          />
          <span className='flex justify-center mt-[-2.5rem] ml-[3rem]'>
            Hi, I am Orpheus! How can I help you?
          </span>
        </div>
        </div>
      
      </div>
      
    </div>
  )
}

export default Chatbot