/* eslint-disable react/no-unescaped-entities */
'use client'


import { FaCodepen, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Widgets from './Widgets';
import { SparklesIcon, TagIcon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/outline';
import Liker from './Liker';

const HeroFirst = () => {
  return (
    <>
      <div className='flex items-center'>
        <div className='xxs:mt-8 md:mt-[1rem] xxs:pr-4 xxs:pl-2 md:pl-20 2xl:pl-6 xl:pl-20  md:pb-1 flex flex-col gap-2 z-[10] max-w-[1050px]'>


          
          <h4 className='md:text-[18px] text-[#38b7e9] xxs:text-[9px] xxs:font-bold md:font-normal sm:tracking-[.05em]'>
            Hello!
          </h4>
          <h2 className='flex flex-row flex-nowrap md:text-[45px] xxs:text-[27px] font-bold'>
            <span>I'm Hvit</span>
            <span className='text-[#ff7944]'> revs 🦊</span>
          </h2>
          <h4 className='font-semibold md:text-[25px] xxs:text-[15px] xxs:tracking-[.04em] sm:tracking-[.05em]'>
            I like building web apps
          </h4>
          <div className='mt-[15px] rounded-lg xxs:px-3 md:px-7 py-3 border-t-[5px] border-[#fbfdff]  bg-gradient-to-b from-[#f0f4f9] to-transparent shadow-[#c8cfd4] shadow-lg dark:border-[#36384e] dark:shadow-[#242633] dark:bg-none'>

            <div className='flex gap-2 mb-2 flex md:gap-5 justify-start text-start'>
              <Image
                className="md:h-9 md:w-9 border-[2px] border-[#97a1b2] dark:border-[#484a60] rounded-2xl p-[1px]"
                src="/avatar.jpg"
                alt="icon"
                height={35}
                width={35}
              />
              <p className='xxs:text-[13px] text-[15px] tracking-[.1em] mt-2 md:ml-[-15px] xxs:text-[#7e81a4] md:text-[#525574] dark:text-[#e3eefb] font-semibold'>
                Adeline Margulis
              </p>
            </div>

            <p className=' md:text-[15px] xxs:text-[13px] tracking-[.1em] font-light dark:text-[#bac8e6] xl:max-w-[550px]'>
            I am fascinated with integrating AI and Machine Learning into web development. Currently I am working on designing and creating different user-friendly websites and applications that involves modern technologies and best coding practises. 
            Thank you for checking out my work!💕
            </p>


            <div className='flex md:h-9 gap-2 flex md:gap-5 justify-between '>
              <p className='xxs:text-[9px] md:text-[12px] tracking-[.05em] mt-4 text-[#6f7399] font-semibold dark:text-[#93a1af]'>
                Last seen: Yesterday
              </p>
              <Liker />
              

            </div>


          </div>

          <div className='md:h-6 md:mt-2 mb-7 flex md:gap-5 justify-start text-start  xs:gap-[3px] xs:h-4  xs:mt-2 xxs:mt-2 xxs:h-4 xxs:gap-[2px] '>
            <Widgets 
                title={'Next.js'} 
                icon={<TagIcon />} 
            />
            <Widgets 
                title={'TypeScript'} 
                icon={<TagIcon />} 
            />
            <Widgets
                title={'React'} 
                icon={<TagIcon />} 
            />
            <Widgets
                title={'API'} 
                icon={<TagIcon />} 
            />


            </div>
          <div className='flex items-center'>
            <div className='md:py-3 xxs:py-1 flex flex-nowrap gap-4 md:px-3 p-3 border-[1px] border-b-[4px] border-[#bec6cd] border-b-[#e7e8f4]   dark:border-b-[#36384e] shadow-[#aeb8c0] shadow-inner shadow-2xl dark:border-[#36384e] dark:shadow-[#242633] dark:text-[#a7aac9] rounded-2xl '>
              <Link 
              className='hover:text-pink-500 xxs:text-[18px] md:text-[25px]  pr-5 border-r-[4px] border-r-[#bacad6] dark:border-r-[#36384e] dark:border-b-[#36384e]'  href='https://github.com/Hvitrevs'>
                <FaGithub />
              </Link>

              <div className='gap-4 px-1 xxs:text-[18px] md:text-[25px] text-[#ff7944] hover:text-green-500 '>
                <Link 
                href="https://codepen.io/Hvitrevs">
                  <FaCodepen />
                </Link>
              </div>
            </div>
          </div>
          
          </div>
        

        <div className='xl:max-w-[250px] 2xl:max-w-[350px] xxs:invisible xl:visible xl:mt-40 2xl:mt-20 xl:ml-[10rem]'>
        <Image
            className="filter-grayscale opacity-[90%] dark:opacity-[90%]  animate-bounce"
            src="/abstract1.png"
            alt="image"
            height={350}
            width={350}
          />
        </div>
        </div>
    </>
  );
}

export default HeroFirst;