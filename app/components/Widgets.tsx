import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  icon: React.ReactNode;
};

const Widgets = (props: Props) => {
  return (
    <div>
        <motion.div
          
          className='Welcome-text  mt-[10px] rounded-sm bg-transparent border-[1px] shadow-md border-t-[4px] border-[#feffff] dark:border-t-[4px] dark:border-[#36384e] dark:shadow-[#171a31] text-[#324255] dark:text-[#b7bad9] dark:bg-none'
        >
            <div 
            className="Welcome-box py-[3px] px-[8px] opacity-[0.9] border-[#8c989f] border-[1px] dark:border-[#5d5f72]"
            >
              <div className="md:px-[2px] xs:py-[2px] sm:py-[2px] md:h-4 md:w-4 xs:h-4 xs:w-3 xxs:w-2 xs:mr-[1px]">
                {props.icon}
              </div>
                  <h1
                    className=" Welcome-text  md:text-[11px] md:h-4 px-[5px] xs:text-[8px] xs:text-nowrap xxs:text-[5px] xxs:pr-0 border-l-[2px] border-[#9ea9b3] dark:border-[#343759] opacity-[0.9]"
                  >
                {props.title}
              </h1>
            </div>
        </motion.div>
    </div>
  );
};

export default Widgets;