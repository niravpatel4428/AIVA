"use client"; 

import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40 py-14">
      <div className="relative w-full h-full max-w-[80%] md:max-w-[704px] z-50">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-[22px_20px_22px_24px] h-full overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-6 right-5 w-6 h-6 rounded-full bg-[#EAF0FF] flex justify-center items-center hover:bg-brightBlue/20"
          >
            <Cancle />
          </button>
          <div className="h-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

const Cancle = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path d="M2 2L10.4 10.4" stroke="#2764FE" stroke-linecap="round" />
        <path
          d="M10.3999 2L1.9999 10.4"
          stroke="#2764FE"
          stroke-linecap="round"
        />
      </svg>
    </>
  );
};
