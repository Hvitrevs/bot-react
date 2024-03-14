

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
        console.error('Sending message failed:', error);
      }
    }, 2000); // 2 second delay
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className='bottom-7 fixed right-7 shadow-xl flex'>
      <div className={`flex flex-col bg-[#635aa7]/5 backdrop-blur-[3px] z-20 border-[3px] shadow-lg shadow-[#1f1652] border-[#120b39] xxs:w-[250px] xs:w-[350px] md:w-[450px] md:h-[550px] xs:h-[25rem] rounded-xl transition-opacity duration-500 ease-in-out transform translate-y-0 opacity-100 z-50 ${isOpen ? '' : 'hidden'}`}>
        <div className="sticky top-0 bg-[#060122] flex items-center justify-center p-4 rounded-t-lg shadow">
          <Image src="/avatar.png" alt="Chat Support" width={45} height={45} className="rounded-full border-2 border-green-500" />
          <div className="text-white ml-4">
            <h4 className="text-xs mb-1 text-[#7971a6]">Chat Support</h4>
            <p className="text-md mb-2 text-[#e4dfff]">Hi I am Orpheus. How can I help you?</p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto flex flex-col p-5">
          {messages.map((msg, index) => (
            <div key={index} className={`p-2 my-2 rounded-lg max-w-max ${msg.name === 'User' ? 'bg-[#7648c0] ml-auto' : 'bg-[#1a8490]'}`}>
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
      {isButtonVisible && ( 
        <button onClick={toggleChatBox} className='ml-4 p-1.5 bg-transparent border-[1px] border-[#3c197c] text-[#8489e4] font-semibold rounded-2xl hover:bg-[#240f4b] shadow-md shadow-[#642984] hover:text-[#99d4ff]'>
          <QuestionAnswer /> Chat 
        </button>
      )}
    </div>
  );
};

export default Chatbot;