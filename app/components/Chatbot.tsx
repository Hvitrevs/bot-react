import { NearMe } from '@mui/icons-material'
import { Button } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react';

interface Message {
  name: string;
  message: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState('');

  const toggleChatBox = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!text.trim()) return;

    const userMessage: Message = { name: "User", message: text };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    //sending the message to the backend
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      const botMessage: Message = { name: "Orpheus", message: data.answer };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Sending message failed:', error);
    }

    // Reset input field
    setText('');
  };
  return (
    <div className='w-[450px] shadow-xl flex'>
      <div  className='bg-[#0a0627]/05 backdrop-blur-[3px] z-20 border-[3px] shadow-lg shadow-[#153259] border-[#060d34] rounded-xl  xxs:w-[250px]  xs:w-[350px] md:w-[450px] md:h-[550px] xs:h-[25rem] flex flex-col'>
        <div className='h-[6rem] w-full bg-[#060122] flex flex-col px-4 py-2 rounded-xl '>
          <span className='flex md:text-[13px] xs:text-[12px] xxs:text-[10px] font-thin ml-[4.5rem]'>
            Chat support
          </span>
          <div className='px-2 pb-6 gap-4 p-1'>
            <Image
              className=" p-1 rounded-2xl border-[2px]  border-[#05b356]"
              src="/avatar.png"
              alt="image"
              height={45}
              width={45}
            />
            <p className='text-[9px] mt-[7px] ml-[6px] font-thin'>
              Online
            </p>
            <span className='flex justify-center mt-[-3rem] ml-[4rem] font-normal md:text-[16px] xs:text-[14px] xxs:text-[12px]'>
              Hi, I am Orpheus! How can I help you?
            </span>
          </div>
        </div>
        <div id='chatbox__messages' className='flex bg-none h-full flex-col z-[30]'>
          {messages.map((msg, index) => (
            <div key={index} id='message' className='text-white ml-2'>
              {msg.name} : {msg.message}
            </div>
          ))}

        </div> 

        <div className=' flex bg-[#060122] flex flex-col px-4 py-4 rounded-xl '>
          <input className='w-full bg-[#160f41]  rounded-xl p-2 px-4' type='text' placeholder='Start a conversation ...' />
          <button className='mt-2 p-1 bg-transparent border-[1px] border-[#241a63] text-[#195c72] font-semibold rounded-2xl hover:bg-[#1f0f45] hover:text-[#3aa4f0]'><NearMe /> </button>
        </div>
      
      </div>
      
    </div>
  )
}
export default Chatbot