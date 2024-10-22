
import React from 'react';
import Image from "next/image";

import location from "../../../public/img/location.svg";
import clockBlue from "../../../public/img/clockBlue.svg";
const TaskComp = ({ task, onClick }) => {
  return (
    <div
    className={`bg-white rounded-xl border ${
      task.completed ? "border-[#3DB65F]" : "border-[#eaeaea]"
    } p-4 flex flex-row items-start gap-3`}
  >
    <div>
      <input
        id={`task-${task.id}`}
        name="notification-method"
        type="radio"
        checked={task.completed}
        className="h-4 w-4 accent-[#3DB65F]"
        readOnly
      />
    </div>
    <div className="flex flex-col gap-2">
      <p className="text-darkGray text-sm leading-[150%] font-MetMedium cursor-pointer" onClick={onClick} >
        {task.title}
      </p>
      <div className="flex gap-2">
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
  )
}

export default TaskComp;
