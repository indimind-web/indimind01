"use client"
import React, { useEffect, useState } from 'react';

const Popup: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the popup after 5 seconds
    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000);

    // Automatically hide the popup after 10 seconds
    const autoCloseTimer = setTimeout(() => {
      setVisible(false);
    }, 80000);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoCloseTimer);
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
  };

  const handleDM = () => {
    const instagramDMURL = `https://www.instagram.com/indimind.in/`;

    // Open Instagram DM page for the user to edit the message manually
    window.open(instagramDMURL, '_blank');
  };

  return (
    <>
      {visible && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-90">
          <div className="relative flex flex-col justify-center items-center bg-gradient-to-tl from-zinc-900 via-zinc-500/10 to-zinc-900 p-10 rounded-lg w-max text-center text-white">
            <button
              className="top-2 right-3 absolute text-3xl cursor-pointer"
              onClick={handleClose}
            >
              &times;
            </button>
            <div>
                <h1 className='font-bold text-4xl'>Get <span className='bg-yellow-600 px-3 py-2 rounded'>20%</span> off on all services</h1>
            <p className="bg-blue-700 mt-5 mb-4 py-2 rounded-full font-light font-mono text-xl">Happy Ganesh Chaturthi 🙏</p>
            </div>
           <div className='relative mt-5 p-[2px] rounded-lg w-max overflow-hidden'>
            <div className='top-0 left-0 z-[0] absolute bg-gradient-to-l from-cyan-400 to-pink-500 w-full h-full animate-spin_right'></div>
           <button
              onClick={handleDM}
              className="relative z-[3] bg-black px-4 py-2 rounded-md text-white transition-colors"
            >
              Send DM
            </button>
           </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
