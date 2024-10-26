"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import eye from "../../../public/img/eye.svg";
import eyeClose from "../../../public/img/eyeClose.svg";
import google from "../../../public/img/google.svg";
import apple from "../../../public/img/apple.svg";
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full max-w-[345px]">
        <h1 className="text-darkGray text-[32px] font-MetBold leading-[150%] mb-6 md:mb-10">
          Login to AIVA
        </h1>
        <div className="w-full flex max-sm:flex-col flex-row gap-4">
          <div className="w-full border-[#EAEAEA] border rounded-[92px] bg-white p-[15px_32px] flex justify-center items-center hover:bg-gray-100 transition-all duraction-300 cursor-pointer ">
            <Image src={google} alt="login-icon" className="object-contain" />
          </div>
          <div className="w-full border-[#EAEAEA] border rounded-[92px] bg-white p-[15px_32px] flex justify-center items-center hover:bg-gray-100 transition-all duraction-300 cursor-pointer ">
            <Image src={apple} alt="login-icon" className="object-contain" />
          </div>
        </div>
        <div className="my-8 relative flex items-center ">
          <div className="w-[345px] h-[1px] bg-[#DFDFDF] relative"></div>
          <p className="px-2 text-[#DFDFDF] bg-white text-sm font-MetMedium leading-none absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
            OR
          </p>
        </div>
        <form className="relative w-full">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-darkGray text-sm font-MetSemiBold mb-2 leading-none"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full text-darkGray placeholder:text-[#3333337f] bg-white border border-[#dfdfdf] rounded-[12px] text-sm font-MetMedium p-[16px_17px] focus:ring-none focus:outline-none leading-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-darkGray text-sm font-MetSemiBold mb-2 leading-none"
            >
              Password
            </label>
            <div className="relative">
              <Image
                onClick={togglePasswordVisibility}
                src={showPassword ? eyeClose : eye}
                alt={showPassword ? "Hide password" : "Show password"}
                className="absolute right-4 top-[50%] translate-y-[-50%]"
              />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full text-darkGray placeholder:text-[#3333337f] bg-white border border-[#dfdfdf] rounded-[12px] text-sm font-MetMedium p-[16px_40px_16px_17px] focus:ring-none focus:outline-none leading-none"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between mb-6">
            <div className="flex flex-row items-center gap-2">
              <input
                id="push-everything"
                name="push-notifications"
                type="radio"
                className="h-4 w-4 border-brightBlue text-brightBlue focus:ring-brightBlue accent-brightBlue -mt-[2px]"
              />
              <p className="text-darkGray text-[14px] font-MetMedium  leading-none">
                Remember me
              </p>
            </div>
            <Link
              href="/"
              className="text-brightBlue text-sm font-MetRegular underline hover:text-brightBlue/80  leading-none"
            >
              Forgot Password
            </Link>
          </div>
          <Link href="settings">
            <button className="text-white text-sm font-MetMedium bg-brightBlue rounded-[54px] w-full py-[17px] transition-all durtion-300 hover:bg-brightBlue/90 leading-none">
              Login
            </button>
          </Link>
          <div className="mt-6 text-center">
            <p className="text-[#707070] text-sm font-MetRegular  leading-none">
              Dont have an account?{" "}
              <Link
                href="/"
                className="text-brightBlue hover:text-brightBlue/80 underline  leading-none"
              >
                {" "}
                Sign up now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
