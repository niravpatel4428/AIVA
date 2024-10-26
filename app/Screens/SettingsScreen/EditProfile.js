import React from "react";
import Image from "next/image";
import user from "./../../../public/img/user.png";
import upload from "./../../../public/img/upload.svg";
import delet from "./../../../public/img/delet.svg";
const EditProfile = () => {
  return (
    <div className="flex flex-col w-full bg-white !rounded-2xl md:!rounded-[0px_16px_16px_16px] overflow-hidden max-md:overflow-y-scroll">
      <div className="max-[400px]:p-3 p-6 bg-white">
        <p className="text-darkGray text-sm font-MetSemiBold leading-[114%] mb-4">
          Photo
        </p>
        <div className="flex flex-row items-center gap-4">
          <div className="w-24 h-24 rounded-[100%]">
            <Image
              src={user}
              alt="user"
              className="object-cover rounded-[100%]"
            />
          </div>
          <div className="flex gap-2 flex-col md:flex-row">
            <button className="h-7 bg-brightBlue capitalize p-[8px_16px] text-xs font-MetMedium rounded-[54px] flex flex-row items-center gap-2 hover:bg-brightBlue/80">
              <Image
                src={upload}
                alt="upload"
                className="object-cover w-4 h-4"
              />
              Upload Photo
            </button>

            <button className="h-7 bg-white text-darkGray capitalize p-[8px_24px] text-xs font-MetMedium rounded-[54px] flex flex-row items-center gap-2 hover:bg-gray-100 border border-[#B4B4B4]">
              <Image src={delet} alt="delet" className="object-cover w-4 h-4" />
              Remove
            </button>
          </div>
        </div>
        <form className="mt-[31px] flex flex-col gap-6">
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="name"
              className="text-darkGray text-sm font-MetSemiBold leading-[100%]"
            >
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              className="w-full text-darkGray placeholder:text-[#3333337f] bg-white border border-[#dfdfdf] rounded-[12px] text-sm font-MetMedium p-[17px] focus:ring-none focus:outline-none leading-none"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="number"
              className="text-darkGray text-sm font-MetSemiBold leading-[100%]"
            >
              Phone Number
            </label>
            <div className="flex flex-row gap-[6px] w-full">
              <div className="flex flex-row gap-2 w-fit">
                <div className="relative">
                  <input
                    type="code"
                    id="code"
                    name="code"
                    value="+91"
                    readOnly
                    className="w-[65px] text-darkGray bg-white border border-[#dfdfdf] rounded-[12px] text-sm font-MetMedium p-[17px_13px] focus:ring-none focus:outline-none leading-none"
                  />
                  <div className="absolute right-[12px] top-[50%] transform -translate-y-1/2 w-[10px] h-[5px]">
                    <ArrowDown />
                  </div>
                </div>
              </div>
              <input
                type="number"
                id="number"
                name="number"
                className="w-full text-darkGray placeholder:text-[#3333337f] bg-white border border-[#dfdfdf] rounded-[12px] text-sm font-MetMedium p-[17px] focus:ring-none focus:outline-none leading-none"
                placeholder="1234567890"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-darkGray text-sm font-MetSemiBold leading-[100%]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full text-darkGray placeholder:text-[#3333337f] bg-white border border-[#dfdfdf] rounded-[12px] text-sm font-MetMedium p-[17px] focus:ring-none focus:outline-none leading-none"
              placeholder="Enter your email"
            />
          </div>
        </form>
      </div>
      <div className="p-4 bg-white border-t-[1px] border-[#D1D1D1] mt-auto">
        <div className="w-full max-w-[278px] sm:ml-auto">
          <div className="flex flex-row sm:flex-row justify-between ml-auto gap-2">
            <button className="w-[49%] text-sm font-MetMedium border border-brightBlue p-[13px] text-brightBlue rounded-[37px] hover:bg-gray-100">
              Cancel
            </button>
            <button className="w-[49%] text-sm font-MetMedium border border-transparent bg-brightBlue p-[13px] text-white rounded-[37px] hover:bg-brightBlue/80">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

const ArrowDown = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
      >
        <path
          d="M9.14053 0.806147C9.07855 0.743661 9.00482 0.694065 8.92358 0.660219C8.84234 0.626373 8.7552 0.608948 8.6672 0.608948C8.57919 0.608948 8.49205 0.626373 8.41081 0.660219C8.32957 0.694065 8.25584 0.743661 8.19386 0.806147L5.14053 3.85948C5.07855 3.92197 5.00482 3.97156 4.92358 4.00541C4.84234 4.03925 4.7552 4.05668 4.6672 4.05668C4.57919 4.05668 4.49205 4.03925 4.41081 4.00541C4.32957 3.97156 4.25584 3.92197 4.19386 3.85948L1.14053 0.806147C1.07855 0.743661 1.00482 0.694065 0.92358 0.660219C0.84234 0.626373 0.755203 0.608948 0.667195 0.608948C0.579187 0.608948 0.49205 0.626373 0.41081 0.660219C0.329571 0.694065 0.255837 0.743661 0.193862 0.806147C0.0696944 0.931055 0 1.10002 0 1.27615C0 1.45227 0.0696944 1.62124 0.193862 1.74615L3.25386 4.80615C3.62886 5.18068 4.13719 5.39105 4.6672 5.39105C5.1972 5.39105 5.70553 5.18068 6.08053 4.80615L9.14053 1.74615C9.2647 1.62124 9.33439 1.45227 9.33439 1.27615C9.33439 1.10002 9.2647 0.931055 9.14053 0.806147Z"
          fill="#333333"
        />
      </svg>
    </>
  );
};
