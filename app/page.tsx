'use client'
import ThemeSwitch from './components/ThemeSwitch';
import Image from 'next/image';

import { useTheme } from 'next-themes'
import HeroFirst from './components/HeroFirst';


export default function Home() {
  return (
    <main className='w-full h-full relative '>
      <div className="flex xxs:px-[0.5rem] h-full md:px-[2rem] xxs:py-8 md:py-[7rem] gap-20 items-center justify-center flex-wrap ">
        <HeroFirst />
      </div>
    </main>
  );
}
