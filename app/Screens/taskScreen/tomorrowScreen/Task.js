import React from "react";
import Image from "next/image";
import location from "../../../../public/img/location.svg";
import clockBlue from "../../../../public/img/clockBlue.svg";
const TaskComp = ({ task, onClick }) => {
  return (
    <div
      className={`bg-white rounded-xl border ${
        task.completed ? "border-[#3DB65F]" : "border-[#eaeaea]"
      } p-4 flex flex-row items-start gap-3`}
    >
      <div>
        {task.completed ? (
          <div className="bg-[#3DB65F] w-4 h-4 rounded-full flex items-center justify-center">
            <True />
          </div>
        ) : (
          <input
            id={`task-${task.id}`}
            name="notification-method"
            type="radio"
            disabled
            className="h-4 w-4 "
            readOnly
          />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <p
          className="text-darkGray hover:text-darkGray text-sm leading-[150%] font-MetMedium cursor-pointer"
          onClick={onClick}
        >
          {task.title}
        </p>
        <div className="flex gap-2 max-[400px]:flex-col">
          <p className="text-[#6C6B6B] text-xs font-MetMedium leading-[150%] flex gap-1 items-center">
            <Image
              src={clockBlue}
              alt="clockBlue"
              className="object-contain w-3 h-3"
            />{" "}
            {task.time}
          </p>
          <p className="text-[#6C6B6B] text-xs font-MetMedium leading-[150%] flex gap-1 items-center">
            <Image
              src={location}
              alt="location"
              className="object-contain w-3 h-3"
            />{" "}
            {task.location}
          </p>
        </div>
        <p className="text-[#6C6B6B] text-sm font-MetMedium leading-[150%]">
          {task.description}
        </p>
      </div>
    </div>
  );
};

export default TaskComp;

const True = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.0227 5.72725C11.2424 5.94692 11.2424 6.30308 11.0227 6.52272L7.27273 10.2727C7.05305 10.4924 6.69695 10.4924 6.47725 10.2727L4.97725 8.77272C4.75759 8.55305 4.75759 8.19695 4.97725 7.97727C5.19692 7.7576 5.55308 7.7576 5.77275 7.97727L6.875 9.07947L10.2273 5.72725C10.447 5.50758 10.8031 5.50758 11.0227 5.72725Z"
        fill="white"
      />
    </svg>
  );
};
