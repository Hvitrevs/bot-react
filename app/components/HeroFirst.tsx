/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react';
import Image from 'next/image';
import Widgets from './Widgets';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Header from './Header';

const HeroFirst = () => {
  return (
    <>
      <div className='flex items-center'>
        <div className='xxs:mt-8 md:mt-[1rem] xxs:pr-4 xxs:pl-2 md:pl-20 2xl:pl-6 xl:pl-20  md:pb-1 flex flex-col gap-2 z-[10] max-w-[1050px]'>
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
          <div className='mt-[15px] rounded-lg xxs:px-3 md:pr-5 py-3 bg-none'>
            <div className='flex gap-2 mb-2 flex md:gap-5 justify-start text-start'>
            </div>
            <p className=' md:text-[20px] xxs:text-[13px] tracking-[.05em] font-normal dark:text-[#bac8e6] xl:max-w-[550px]'>
            I am a contextual chatbot built with PyTorch. I can tell user a riddle or a joke upon request. I take a sentence and analyze it to find words that I know, and then generate answer. If I don't know something try to paraphrase your request. Have fun!
            </p>
          </div>
          </div>
        <div className='xl:max-w-[250px] 2xl:max-w-[350px] xxs:invisible xl:visible xl:mt-40 2xl:mt-20 xl:ml-[10rem]'>
        <Image
            className="filter-grayscale opacity-[90%] dark:opacity-[90%]"
            src="" 
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