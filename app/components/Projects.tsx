/* eslint-disable react/no-unescaped-entities */
'use client'

import Image from 'next/image'
import React from 'react'
import Liker from './Liker'
import SingleApp from './SingleApp'
import { projectDetails } from './data/Data'

export const Projects = () => {
  return (
    <>
      <div className='flex items-center '>
        <div className=' xxs:mt-[-10px] md:mt-[1rem] 2xl:mt-[2rem] xxs:pr-4 xxs:pl-2 xl:pl-20 xl:pr-5 2xl:pl-0 2xl:pr-0 md:pb-1 flex flex-col gap-2 justify-center items-center z-[10] max-w-[1150px]'>
          <h4 className='md:text-[18px] xxs:text-[9px] xxs:font-bold md:font-semibold'>
            See what
          </h4>
          <h2 className='flex flex-row flex-nowrap md:text-[45px] xxs:text-[27px] font-bold'>
            <span className='mr-2'>Apps</span>
            <span className='text-[#ff7944]'>I've built 🛸</span>
          </h2>

            <div className='mt-[2rem] gap-7 grid xl:grid-cols-3 md:grid-cols-2 xxs:grid-cols-1 rounded-lg xxs:px-3 md:px-10 py-11 border-t-[5px] border-[#ffffff]  bg-gradient-to-b from-[#f0f4f9] to-transparent shadow-[#b8c3cc] shadow-xl dark:border-[#36384e] dark:shadow-[#242633] dark:bg-none'>
              {<SingleApp   />}

            </div>
        

        </div>
      </div>
    </>
  )
}
