'use client'
import ThemeSwitch from './components/ThemeSwitch';
import Image from 'next/image';

import { useTheme } from 'next-themes'
import HeroFirst from './components/HeroFirst';
import { Projects } from './components/Projects';

export default function Home() {
  return (
    <main className='w-full h-full relative '>
      <div className="flex xxs:px-[0.5rem] md:px-[2rem] xxs:py-8 md:py-[7rem] gap-20 items-center justify-center flex-wrap ">
        <HeroFirst />
        <Projects />
      </div>
    </main>
  );
}
