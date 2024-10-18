"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import notify from "../../../public/img/notify.svg";
import send from "../../../public/img/send.svg";
import calender from "../../../public/img/calender.svg";
import user from "../../../public/img/user.png";
import mic from "../../../public/img/mic.png";
import mic1 from "../../../public/img/mic.svg";
const ChatBox = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks data from tasks.json
  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch("/data/tasks.json");
      const data = await res.json();
      setTasks(data.tasks);
    };

    fetchTasks();
  }, []);
  return (
    <>
      <div className="bg-white relative h-[100%] rounded-[16px] overflow-hidden p-4 ">
        {/* response box */}
        <div className="relative flex flex-col w-full max-w-[870px] mx-auto overflow-y-auto overview total-height">
          {tasks.map((task) => (
            <div key={task.id} className="mb-6 last:mb-12">
              {/* Chat message */}
              <div className="flex flex-row items-end justify-end space-x-3 mb-4">
                <p className="relative w-fit text-sm font-MetMedium text-darkGray leading-[150%] bg-[url('/img/back.png')] bg-no-repeat bg-cover p-4 rounded-md">
                  {task.message}
                </p>
                <Image src={user} alt="user" className="object-cover w-6 h-6" />
              </div>

              {/* Response Box */}
              <div className="flex flex-row items-end gap-2">
                <Image src={mic} alt="mic" className="object-cover w-6 h-6" />
                <div className="bg-lightGray flex flex-col gap-[7px] p-4 rounded-lg shadow w-full max-w-[377px]">
                  <p className="font-MetMedium text-darkGray text-sm leading-[150%]">
                    {task.response}
                  </p>

                  {/* Task Details */}
                  {task.details.type === "Appointment" && (
                    <div className="bg-white border-[#EAEAEA] border py-4 px-6 rounded-xl flex flex-col gap-2">
                      <div className="bg-lightPurple flex flex-row items-center gap-1 rounded-lg py-1 px-2 w-fit">
                        <Image
                          src={notify}
                          alt="notify"
                          className="object-cover h-4 w-4"
                        />
                        <p className="text-[10px] font-MetSemiBold text-[#405FBA]">
                          {task.details.type}
                        </p>
                      </div>
                      <p className="text-sm font-MetMedium leading-[150%] text-darkGray">
                        {task.details.task}
                      </p>
                      <p className="text-xs font-MetMedium leading-[150%] text-[#6C6B6B]">
                        {task.details.description}
                      </p>
                      <div className="flex flex-row items-center gap-2">
                        <Image
                          src={calender}
                          alt="calender"
                          width="16"
                          height="16"
                          className="object-cover h-4 w-4"
                        />

                        <p className="text-xs font-MetMedium leading-[150%] text-[#6C6B6B]">
                          {task.details.date}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* New Design for Task List */}
                  {task.details.type === "Task List" && (
                    <div className="bg-white border-[#EAEAEA] border p-4 rounded-xl flex flex-col gap-2">
                      <ul className="flex flex-col gap-3">
                        {task.details.tasks.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex justify-between items-center gap-2"
                          >
                            <div className="flex items-center gap-2">
                              <div className="flex items-center justify-center w-4 h-4">
                              <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-brightBlue focus:ring-brightBlue"/>
                              </div>
                              <p className="text-sm font-MetMedium text-darkGray">
                                {item.name}
                              </p>
                            </div>
                            <div className="bg-lightBlue p-2 rounded-[8px]">
                            <Image
                              src={item.icon}
                              alt="task icon"
                              width="16"
                              height="16"
                              className="object-cover w-4 h-4"
                            />
                               </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Task Action Button */}
                  {task.details.buttonText && (
                    <button className="bg-brightBlue text-white hover:bg-brightBlue/80 transition-all duration-300 px-9 py-2 font-MetMedium rounded-[54px] text-xs">
                      {task.details.buttonText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* user input textarea */}
        <div className="absolute bottom-0 left-0 right-0 w-full border-t-[1px] border-[#d1d1d1]">
          <div className="p-[15px_16px_15px_0px_] mx-auto w-full max-w-[870px] flex flex-row items-end gap-3 bg-white">
            <div className="max-sm:w-10 max-sm:h-10 w-12 h-12 bg-brightBlue hover:bg-brightBlue/80 transition-all duration-300 rounded-[100%] flex justify-center items-center">
              <Image
                src={mic1}
                alt="mic1"
                className="object-contain h-8 w-8 max-sm:w-6 max-sm:h-6"
              />
            </div>
            <div className="relative w-full h-full">
              <textarea
                name="input"
                id="input"
                placeholder="Type Message"
                className="p-[5px_55px_5px_15px] resize-none h-[100%] w-full block text-darkGray text-[13px] leading-[140%] font-MetMedium rounded-lg outline-none shadow-none border border-[#dfdfdf] placeholder:text-[#3333337f]"
              ></textarea>
              <div className="absolute right-[6px] bottom-[6px]">
                <button className="p-[10px] rounded-[7px] bg-brightBlue hover:bg-brightBlue/80 transition-all duration-300">
                  <Image
                    src={send}
                    alt="mic"
                    className="object-cover w-[16px] h-[16px]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
