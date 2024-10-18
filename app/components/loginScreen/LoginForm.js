import React from "react";
import Link from "next/link";
const LoginForm = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-darkGray text-[32px] font-MetBold leading-[150%] mb-10">
          Login to AIVA
        </h1>
        <form className="relative">
          <div className="mb-4">
            <label
              for="email"
              className="text-darkGray text-sm font-MetSemiBold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full text-darkGray placeholder:text-[#3333337f] bg-white border border-[#dfdfdf] rounded-[12px] text-sm font-MetMedium p-[17px] focus:ring-none focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              for="password"
              className="text-darkGray text-sm font-MetSemiBold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full text-darkGray placeholder:text-[#3333337f] bg-white border border-[#dfdfdf] rounded-[12px] text-sm font-MetMedium p-[17px] focus:ring-none focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-row justify-between mb-6">
            <div className="flex flex-row gap-2">
              <input
                id="push-everything"
                name="push-notifications"
                type="radio"
                className="h-4 w-4 border-brightBlue text-brightBlue focus:ring-brightBlue"
              />
              <p className="text-darkGray text-[14px] font-MetMedium">
                Remember me
              </p>
            </div>
            <Link href="/" className="text-brightBlue text-sm font-MetRegular underline">Forgot Password</Link>
          </div>
          <button className="text-white text-sm font-MetMedium bg-brightBlue rounded-[54px] w-full py-[17px] transition-all durtion-300 hover:bg-brightBlue/90">Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
