import React from 'react';
import LoginSlider from './LoginSlider';
import LoginForm from './LoginForm';

const LoginMain = () => {
  return (
    <div className='p-4 flex flex-col lg:flex-row lg:h-screen w-full max-lg:gap-10'>
        <div className="w-full lg:w-[50%] ">
        <LoginSlider />
        </div>
        <div className="w-full lg:w-[50%] flex justify-center items-center">
        <LoginForm />      
        </div>
    </div>
  )
}

export default LoginMain;
