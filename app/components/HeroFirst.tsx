/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react';
import Image from 'next/image';
import Widgets from './Widgets';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Header from './Header';
import Chatbot from './Chatbot';
import { QuestionAnswer } from '@mui/icons-material';

const HeroFirst = () => {
  return (
    <>
      <div className='flex items-center flex-wrap'>
        <div className='xxs:mt-8 md:mt-[1rem] xxs:pr-4 xxs:pl-2 md:pl-20 2xl:pl-6 xl:pl-20 xs:ml-[2rem]  md:pb-1 flex flex-col gap-2 z-[50] max-w-[1050px] '>
          <Header />
            <div className='md:h-6 md:mt-2 mb-7 flex md:gap-5 justify-start text-start  xs:gap-[3px] xs:h-4  xs:mt-2 xxs:mt-2 xxs:h-4 xxs:gap-[2px] '>
              <Widgets 
                  title={'Next.js'} 
                  icon={<SparklesIcon />} 
              />
              <Widgets 
                  title={'ML'} 
                  icon={<SparklesIcon />} 
              />
              <Widgets
                  title={'PyTorch'} 
                  icon={<SparklesIcon />} 
              />
              <Widgets
                  title={'Flask'} 
                  icon={<SparklesIcon />} 
              />
            </div>   
          <div className='mt-[10px] rounded-lg md:pr-5 py-1 bg-none'>
            <div className='flex gap-2 mb-2 flex md:gap-5 justify-start text-start'>
            </div>
            <p className=' md:text-[20px] xxs:text-[13px] tracking-[.05em] font-normal dark:text-[#bac8e6] xl:max-w-[550px]'>
            I am a contextual chatbot built with PyTorch. I can tell user a riddle or a joke upon request. I take a sentence and analyze it to find words that I know, and then generate answer. If I don't know something try to paraphrase your request. Have fun!
            </p>
            <button className='mt-4 px-2 p-1.5 bg-transparent border-[1px] border-[#7b51c7] text-[#8489e4] font-semibold rounded-2xl hover:bg-[#291f84] shadow-md shadow-[#9e51c7] hover:text-[#3aa4f0]'>
              <QuestionAnswer /> Start 
            </button>
          </div>
          </div>
        <div className='xl:max-w-[250px] 2xl:max-w-[350px] xl:mt-40 2xl:mt-20 xl:ml-[10rem] md:ml-[9rem] xs:ml-[2rem] xs:mt-[2rem]'>
        <Chatbot />
        </div>
        </div>
    </>
  );
}

export default HeroFirst;