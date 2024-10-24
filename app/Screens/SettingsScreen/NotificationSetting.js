"use client";
import { useState } from "react";
import Image from "next/image";
import clock from "./../../../public/img/clock.svg";
import TimePicker from "react-time-picker";

const NotificationSetting = () => {
  const [time, setTime] = useState("06:00");
  const [time1, setTime1] = useState("08:00");
  const [time2, setTime2] = useState("08:00");
  const handleTimeChange = (newTime) => {
    setTime(newTime);
  };
  const handleTimeChange1 = (newTime) => {
    setTime1(newTime);
  };
  const handleTimeChange2 = (newTime) => {
    setTime1(newTime);
  };

  return (
    <div className="p-6 h-full bg-white w-full mx-auto rounded-[16px] max-md:overflow-y-scroll">
      {/* Daily Review Section */}
      <div className="w-full max-w-[514px] h-full overflow-y-scroll overview">
        <div className="mb-8 pb-4 border-b-[1px] border-[#eaeaea]">
          <div className="flex justify-between items-center">
            <h3 className="text-darkGray leading-[114%] text-sm font-MetSemiBold mb-2">
              Daily Review
            </h3>

            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-[58px] h-8 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600"></div>
              <span className="ml-3 peer-focus:ring-white peer-checked:after:translate-x-[1.74rem] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[1px] after:bg-white after:border after:rounded-full after:h-[28px] after:w-[28px] after:transition-all"></span>
            </label>
          </div>
          <div className="mt-4">
            {/* ------ morning ----- */}
            <div>
              <h4 className="text-darkGray leading-[114%] text-sm font-MetSemiBold mb-2">
                Morning
              </h4>
              <p className="text-darkGray leading-[114%] text-sm font-MetRegular mb-2">
                To plan the day
              </p>
              <div className="relative only-time w-full bg-white border border-[#DFDFDF] rounded-[12px] p-[14px_10px_14px_15px] mb-4">
                <TimePicker
                  onChange={handleTimeChange}
                  value={time}
                  clearIcon={null}
                  format="hh:mm a"
                  disableClock={false}
                  className="text-darkGray text-[13px] font-MetMedium  cursor-pointer w-full"
                />
              </div>
            </div>
            {/* evening */}
            <div>
              <h4 className="text-darkGray leading-[114%] text-sm font-MetSemiBold mb-2">
                Evening
              </h4>
              <p className="text-darkGray leading-[114%] text-sm font-MetRegular mb-2">
                To review the day
              </p>
              <div className="relative only-time w-full bg-white border border-[#DFDFDF] rounded-[12px] p-[14px_10px_14px_15px]">
                <TimePicker
                  onChange={handleTimeChange1}
                  value={time1}
                  clearIcon={null}
                  format="hh:mm a"
                  disableClock={false}
                  className="text-darkGray text-[13px] font-MetMedium  cursor-pointer w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Review Section */}
        <div className="mb-8 pb-4 border-b-[1px] border-[#eaeaea]">
          <div className="flex justify-between items-center">
            <h3 className="text-darkGray leading-[114%] text-sm font-MetSemiBold mb-2">
              Weekly Review
            </h3>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-[58px] h-8 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600"></div>
              <span className="ml-3 peer-focus:ring-white peer-checked:after:translate-x-[1.74rem] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[1px] after:bg-white after:border after:rounded-full after:h-[28px] after:w-[28px] after:transition-all"></span>
            </label>
          </div>
          <div className="mt-4">
            <h4 className="text-darkGray leading-[114%] text-sm font-MetSemiBold mb-2">
              Day and Time
            </h4>
            <div className="relative">
              <div className="flex items-center w-full border border-[#DFDFDF] rounded-[12px] p-[14px_10px_14px_15px] bg-white arrow-hide only-time">
                <select className="text-darkGray text-[13px] font-MetMedium bg-transparent focus:outline-none cursor-pointer !w-min">
                  <option value="Sunday" className="!w-min">
                    Sunday
                  </option>
                  <option value="Monday" className="!w-min">
                    Monday
                  </option>
                  <option value="Tuesday" className="!w-min">
                    Tuesday
                  </option>
                  <option value="Wednesday" className="!w-min">
                    Wednesday
                  </option>
                  <option value="Thursday" className="!w-min">
                    Thursday
                  </option>
                  <option value="Friday" className="!w-min">
                    Friday
                  </option>
                  <option value="Saturday" className="!w-min">
                    Saturday
                  </option>
                </select>
                <span className="text-darkGray text-[13px] font-MetMedium">
                  ,
                </span>
                <TimePicker
                  onChange={handleTimeChange}
                  value={time}
                  clearIcon={null}
                  format="hh:mm a"
                  disableClock={false}
                  className=" text-darkGray text-[13px] font-MetMedium  cursor-pointer w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Habit Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h3 className="text-darkGray leading-[114%] text-sm font-MetSemiBold">
              Habit
            </h3>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-[58px] h-8 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600"></div>
              <span className="ml-3 peer-focus:ring-white peer-checked:after:translate-x-[1.74rem] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[1px] after:bg-white after:border after:rounded-full after:h-[28px] after:w-[28px] after:transition-all"></span>
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
