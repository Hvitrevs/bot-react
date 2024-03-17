
import { NearMe, QuestionAnswer } from '@mui/icons-material';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Message {
  name: string;
  message: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState('');
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const toggleChatBox = () => {
    setIsOpen(!isOpen);
    setIsButtonVisible(false); // Hides the button when chat box is opened
  };

  const sendMessage = async () => {
    if (!text.trim()) return;

    const userMessage: Message = { name: "User", message: text };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    
    // Reset input field
    setText('');

    // Simulate typing animation
    const typingMessage: Message = { name: "Orpheus", message: "Typing..." };
    setMessages((prevMessages) => [...prevMessages, typingMessage]);

    // Delay before sending the actual message
    setTimeout(async () => {
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
        setMessages((prevMessages) => [...prevMessages.filter(msg => msg.message !== "Typing..."), botMessage]);
      } catch (error) {
        const errorMessage: Message = { name: "Orpheus", message: "⚠️ The bot is offline, please contact the administrator ⚠️" };
        setMessages((prevMessages) => [...prevMessages.filter(msg => msg.message !== "Typing..."), errorMessage]);
        setErrorMessage(errorMessage.message); // Set error message
        console.error('Sending message failed:', error);
      }
    }, 1000); // 1 second delay
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className='bottom-7 md:fixed md:mt-20 right-7 z-[123456] shadow-xl flex'>
      <div className={`xs:ml-3 xxs:ml-2 flex flex-col bg-[#635aa7]/5 backdrop-blur-[5px] z-20 border-[3px] shadow-lg shadow-[#1f1652] border-[#120b39] xxs:w-[350px] xs:w-[350px] md:w-[450px] md:h-[650px] xs:h-[25rem] rounded-xl transition-opacity duration-500 ease-in-out transform translate-y-0 opacity-100 z-50 ${isOpen ? '' : 'hidden'}`}>
        <div className="sticky top-0 bg-[#060122] flex items-center justify-center p-4 rounded-t-lg shadow">
          <div className='flex flex-wrap'>
          <Image src="/avatar.png" alt="Chat Support" width={45} height={45} className="rounded-full border-2 border-green-500 mb-1 mt-3" />
          <p className={`text-[9px] mt-[6px] ml-[6px]  font-normal ${errorMessage ? 'text-red-500' : 'text-green-500'}`}>
              {errorMessage ? 'Offline' : 'Online'}
          </p>
          </div>

          <div className="text-white ml-4">
            
            <h4 className="mb-1 text-[#d8d2f8] md:text-[13px] xs:text-[12px] xxs:text-[10px] font-thin">Chat Support</h4>
            <p className="text-md mb-2 text-[#e4dfff] font-normal md:text-[16px] xs:text-[14px] xxs:text-[12px]">Hi I am Orpheus. How can I help you?</p>

          </div>
        </div>
        <div className="flex-1 overflow-y-auto flex flex-col p-5">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 my-2 rounded-lg max-w-max ${msg.name === 'User' ? 'bg-[#113779] ml-auto w-4/5 md:text-[16px] xs:text-[14px] xxs:text-[12px]' : (errorMessage ? 'bg-[#6d1d31]/50 w-4/5 md:text-[16px] xs:text-[14px] xxs:text-[10px]' : 'bg-[#007261] w-4/5 md:text-[16px] xs:text-[14px] xxs:text-[10px]')}`}
          >
        <span className="text-white text-sm">{msg.message}</span>
        </div>
        ))}
        <div ref={messagesEndRef} />
        </div>
        <div className="sticky bottom-0 flex items-center justify-between p-4 bg-[#060122] rounded-b-lg">
          <input
            type="text"
            className="w-4/5 p-2 rounded-full focus:outline-none border-[1px] border-[#4231a3] bg-transparent p-2"
            placeholder='Start a conversation ...'
            value={text}
            onChange={(e) => setText(e.target.value)}
            
          />
          <button onClick={sendMessage} className=" p-2 rounded-full border-[1px] border-[#3a28a2] text-[#5476fe] shadow-lg">
            <NearMe />
          </button>
        </div>
      </div>
      <div className='flex items-end justify-end'>
        {isButtonVisible && ( 
        <button onClick={toggleChatBox} className='ml-4 xs:ml-2 p-1.5 bg-transparent border-[1px] border-[#3c197c] text-[#8489e4] font-semibold rounded-2xl hover:bg-[#240f4b] shadow-md shadow-[#642984] hover:text-[#99d4ff]  md:text-[13px] xs:text-[12px] xxs:text-[10px]'>
          <QuestionAnswer /> Chat 
        </button>
      )}
      </div>

    </div>
  );
};

export default Chatbot;