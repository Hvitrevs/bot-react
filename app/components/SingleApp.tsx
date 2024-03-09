import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import {  PiFlyingSaucer } from 'react-icons/pi'
import Widgets from './Widgets'
import { projectDetails } from './data/Data'
import { TagIcon } from '@heroicons/react/24/solid'


const SingleApp = () => {
  return (
    <>
      {projectDetails.map(project => (
        <div  key={project.id}  className='flex h-full mb-[3rem] rounded-lg xxs:px-3 md:px-8 py-6 pb-[6rem] xl:min-w-[300px] md:min-w-[250px] border-t-[5px] border-[#f9fdff]  bg-gradient-to-b from-[#f0f4f9] to-transparent shadow-[#b9c3ca] shadow-lg shadow-inner dark:border-[#383b54] dark:shadow-[#242633] dark:bg-none hover:border-[#ffd180] hover:shadow-[#d4cec3] dark:hover:border-[#129dc0] dark:hover:shadow-[#172c3d]'>
          <div className='flex justify-start text-start flex-wrap max-w-[350px]'>
              <Link href={project.project_url} className="h-[80%]">
              <Image className="w-full h-full object-cover rounded-xl"
                src={project.project_img}
                alt="img"
                height={450}
                width={450}
              />
              </Link>
              <div className="left-0 right-0 mt-[-9rem] bg-[#0e122c]/40 px-4 w-full h-auto backdrop-blur-sm z-50">
              <Link href={project.project_url}>
                <h1 className='md:mt-2 xxs:text-[10px] xxs:mt-4 md:text-[15px] font-bold text-[#dfe1ed]'>
                  {project.project_name}
                </h1>
                <p className='md:mt-1 xxs:mt-6 xs:mt-6 xs:text-[9px] xxs:text-[8px] md:text-[10px] 2xl:text-[11px] text-[#dfe1ed]  dark:text-[#c6d0db] font-light'>
                  {project.project_desc}
                </p>
                </Link>
              </div>
              
              <div className='w-full xxs:mt-6 flex flex-wrap mt-2 xxs:mb-1 justify-start gap-4'>
                  <Link className='xxs:text-[18px] md:text-[25px] flex hover:text-cyan-500' href={project.project_page}>
                    <FaGithub />
                  </Link>
                  <Link className='xxs:text-[18px] md:text-[25px] text-[#ff7944] flex hover:text-green-500' href={project.project_url}>
                    <PiFlyingSaucer />
                  </Link>
                </div>
              <div className='flex flex-wrap gap-1'>
                {project.widgetInfo?.map((widgetInf) => (
                  <div className='md:h-6 md:mt-2 mb-3 flex xs:gap-[3px] xs:h-4  xs:mt-2 xxs:mt-2 xxs:h-4 xxs:gap-[2px] flex mt-4 mb-1 justify-start gap-4 ' key={widgetInf.id} >
                    <Widgets  title={widgetInf.title} icon={<TagIcon />}/>
                  </div>
                ))}
                

              </div>

            </div>
   
      </div>
     ))}
    </>
    
      
    
  )
}

export default SingleApp