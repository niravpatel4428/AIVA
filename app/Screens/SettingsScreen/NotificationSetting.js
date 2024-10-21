
import { useState } from 'react';
import Image from "next/image";
import clock from "./../../../public/img/clock.svg";
const NotificationSetting = () => {

  return (
    <div className="p-6 bg-white w-full mx-auto rounded-[16px]">
      {/* Daily Review Section */}
      <div className="w-full max-w-[514px]">
      <div className="mb-8 pb-4 border-b-[1px] border-[#eaeaea]">
        <div className="flex justify-between items-center">
          <h3 className="text-darkGray leading-[114%] text-sm font-MetSemiBold mb-2">Daily Review</h3>
          
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
            />
            <div className="w-[58px] h-8 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600"></div>
            <span className="ml-3 peer-focus:ring-white peer-checked:after:translate-x-[1.65rem] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[0px] after:bg-white after:border after:rounded-full after:h-[28px] after:w-[28px] after:transition-all"></span>
          </label>
        </div>
        <div className="mt-4">
          <h4 className="text-darkGray leading-[114%] text-sm font-MetSemiBold mb-2">Morning</h4>
          <p className="text-darkGray leading-[114%] text-sm font-MetRegular mb-2">To plan the day</p>
          <div className="relative mb-4">
            <input
              type="text"
              value="07 : 00 AM"
              readOnly
              className="w-full text-darkGray bg-white border border-[#DFDFDF] rounded-[12px] p-[14px_40px_14px_15px] focus:outline-none"
            />
            <Image className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" src={clock} alt="clock"/>
          </div>
          <h4 className="text-darkGray leading-[114%] text-sm font-MetSemiBold mb-2">Evening</h4>
          <p className="text-darkGray leading-[114%] text-sm font-MetRegular mb-2">To review the day</p>
          <div className="relative">
            <input
              type="text"
              value="08 : 00 PM"
              readOnly
              className="w-full text-darkGray bg-white border border-[#DFDFDF] rounded-[12px] p-[14px_40px_14px_15px] focus:outline-none"
            />
            <Image className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" src={clock} alt="clock"/>
          </div>
        </div>
      </div>

      {/* Weekly Review Section */}
      <div className="mb-8 pb-4 border-b-[1px] border-[#eaeaea]">
        <div className="flex justify-between items-center">
          <h3 className="text-darkGray leading-[114%] text-sm font-MetSemiBold mb-2">Weekly Review</h3>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
            />
            <div className="w-[58px] h-8 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600"></div>
            <span className="ml-3 peer-focus:ring-white peer-checked:after:translate-x-[1.65rem] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[0px] after:bg-white after:border after:rounded-full after:h-[28px] after:w-[28px] after:transition-all"></span>
          </label>
        </div>
        <div className="mt-4">
          <h4 className="text-darkGray leading-[114%] text-sm font-MetSemiBold mb-2">Day and Time</h4>
          <div className="relative">
            <input
              type="text"
              value="Sunday , 08 : 00 PM"
              readOnly
              className="w-full text-darkGray bg-white border border-[#DFDFDF] rounded-[12px] p-[14px_40px_14px_15px] focus:outline-none"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <ArrowDown />
            </span>
          </div>
        </div>
      </div>

      {/* Habit Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-darkGray leading-[114%] text-sm font-MetSemiBold">Habit</h3>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
            />
            <div className="w-[58px] h-8 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600"></div>
            <span className="ml-3 peer-focus:ring-white peer-checked:after:translate-x-[1.65rem] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[0px] after:bg-white after:border after:rounded-full after:h-[28px] after:w-[28px] after:transition-all"></span>
          </label>
        </div>
      </div>
      </div>
    </div>
  );
};

export default NotificationSetting;

const ArrowDown = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M9.14053 0.806147C9.07855 0.743661 9.00482 0.694065 8.92358 0.660219C8.84234 0.626373 8.7552 0.608948 8.6672 0.608948C8.57919 0.608948 8.49205 0.626373 8.41081 0.660219C8.32957 0.694065 8.25584 0.743661 8.19386 0.806147L5.14053 3.85948C5.07855 3.92197 5.00482 3.97156 4.92358 4.00541C4.84234 4.03925 4.7552 4.05668 4.6672 4.05668C4.57919 4.05668 4.49205 4.03925 4.41081 4.00541C4.32957 3.97156 4.25584 3.92197 4.19386 3.85948L1.14053 0.806147C1.07855 0.743661 1.00482 0.694065 0.92358 0.660219C0.84234 0.626373 0.755203 0.608948 0.667195 0.608948C0.579187 0.608948 0.49205 0.626373 0.41081 0.660219C0.329571 0.694065 0.255837 0.743661 0.193862 0.806147C0.0696944 0.931055 0 1.10002 0 1.27615C0 1.45227 0.0696944 1.62124 0.193862 1.74615L3.25386 4.80615C3.62886 5.18068 4.13719 5.39105 4.6672 5.39105C5.1972 5.39105 5.70553 5.18068 6.08053 4.80615L9.14053 1.74615C9.2647 1.62124 9.33439 1.45227 9.33439 1.27615C9.33439 1.10002 9.2647 0.931055 9.14053 0.806147Z" fill="#333333" />
            </svg>
        </>
    )
}

