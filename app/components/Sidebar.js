"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import mic from "../../public/img/mic.svg";
import tasks from "../../public/img/tasks.svg";
import notes from "../../public/img/notes.svg";
import notification from "../../public/img/notification.svg";
import setting from "../../public/img/setting.svg";
import logout from "../../public/img/logout.svg";
import bigUser from "../../public/img/bigUser.png";
import arrowUp from "../../public/img/arrowUp.svg";
import calenderLight from "../../public/img/calenderLight.svg";

const tasksItem = [
  { name: "Today", linkComp: "today" },
  { name: "Tomorrow", linkComp: "tomorrow" },
  { name: "This Week", linkComp: "this-week" },
  { name: "This Month", linkComp: "this-month" },
  { name: "This Year", linkComp: "this-year" },
];

const Sidebar = ({
  isSidebarCollapsed,
  toggleSidebar,
  isMobileOpen,
  toggleMobileSidebar,
}) => {
  const [isTasksOpen, setIsTasksOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleTasksDropdown = () => setIsTasksOpen(!isTasksOpen);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize(); // Run once to set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const effectiveIsSidebarCollapsed = isDesktop ? isSidebarCollapsed : false;

  return (
    <div
     
      className={`absolute top-0 bottom-0 left-0 max-lg:p-4 h-full lg:relative ${
        effectiveIsSidebarCollapsed ? "lg:w-[60px]" : "lg:w-[282px] lg:transition-all lg:duration-300 lg:ease-linear"
      }  ${
        isMobileOpen ? "max-lg:!w-full" : "max-lg:-left-full max-lg:w-[0px]"}`}
    >
      <div className={`${
        isMobileOpen
          ? "max-lg:!fixed max-lg:bg-[#0000001a] max-lg:inset-0 max-lg:z-30 max-lg:p-4 max-lg:!left-0"
          : "max-lg:-left-full"
      }`}  
      onClick={() => {
        isDesktop ? "": toggleMobileSidebar();
      }}></div>
      <div
        className={`relative z-50  flex flex-col justify-between h-[100%] bg-white rounded-[16px] transition-all duration-300 ease-linear py-4 px-2 
          ${effectiveIsSidebarCollapsed ? "w-[60px]" : "w-[282px]"} 
          ${isMobileOpen ? "max-lg:w-[282px]" : "max-lg:-left-full"
        }`}
      >
        {/* Sidebar Logo */}
        <div className="mb-10">
          <div className="inline-flex w-full justify-center">
            <Link href="/" className={`w-fit mx-auto ${effectiveIsSidebarCollapsed ? "h-[56px]" : ""}`}>
              <div
                className={`w-[56px] h-[56px] bg-brightBlue rounded-[100%] flex justify-center items-center ${
                  effectiveIsSidebarCollapsed ? "!w-8 !h-8" : ""
                }`}
              >
                <Image
                  src={mic}
                  alt="mic"
                  className={`object-contain h-8 w-8 ${effectiveIsSidebarCollapsed ? "!w-5 !h-5" : ""}`}
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Sidebar Links */}
        <div className={`flex flex-col ${effectiveIsSidebarCollapsed ? "items-center" : ""}`}>
          {/* Tasks Section */}
          <div className="flex flex-col py-2">
            <div
              onClick={toggleTasksDropdown}
              className={`flex justify-between items-center cursor-pointer px-2`}
            >
              <div className="flex items-center gap-[14px]">
                <Image src={tasks} alt="tasks" className="object-cover w-6 h-6" />
                {!effectiveIsSidebarCollapsed && <p className="font-MetRegular text-darkGray text-sm capitalize">Tasks</p>}
              </div>
              {!effectiveIsSidebarCollapsed && (
                <Image
                  src={arrowUp}
                  alt="arrowUp"
                  className={`object-cover w-5 h-5 transform transition-transform ${
                    isTasksOpen ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>

            {isTasksOpen && !effectiveIsSidebarCollapsed && (
              <div className="mt-2 flex flex-col">
             {tasksItem.map((task, index) => (
                  <Link href={task.linkComp} key={index} className="group p-2 hover:bg-[#2764fe19] hover:rounded-[12px]">
                    <div className="flex justify-start items-center gap-[14px]">
                      <div className="w-6 h-6 flex justify-center items-center">
                        <p className="w-2 h-2 rounded-full bg-brightBlue hidden group-hover:block"></p>
                      </div>
                      <p className="font-MetRegular text-darkGray text-sm capitalize hover:text-brightBlue">
                        {task.name}
                      </p>
                    </div>
                  </Link>
                ))}
                <Link href="calender" className="group p-2 hover:bg-[#2764fe19] hover:rounded-[12px]">
                  <div className="flex justify-start items-center gap-[14px]">
                    <div className="w-6 h-6 flex justify-center items-center">
                      <Image src={calenderLight} alt="calender" className="object-contain" />
                    </div>
                    <p className="font-MetRegular text-darkGray text-sm capitalize hover:text-brightBlue">
                      Calendar View
                    </p>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Other Sidebar Items */}
          {[
            { icon: notes, label: "Notes",  count: 0,links: "notes" },
            { icon: notification, label: "Notifications", count: 7,links: "notifications" },
            { icon: setting, label: "Settings",  count: 0,links: "settings" },
          ].map((item, idx) => (
            <Link
              href={item.links}
              key={idx}
              className={`task-icon hover:bg-[#2764fe19] hover:rounded-[12px] p-2 ${
                effectiveIsSidebarCollapsed ? "px-0" : ""
              }`}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-[14px]">
                  <Image src={item.icon} alt={item.label} className="object-cover w-6 h-6" />
                  {!effectiveIsSidebarCollapsed && (
                    <p className="font-MetRegular text-darkGray text-sm capitalize">{item.label}</p>
                  )}
                </div>
                {effectiveIsSidebarCollapsed ? 
                "" :
                (item.count ? 
                  (<>
                    <p className="bg-brightRed w-4 h-4 flex justify-center items-center rounded-full text-[11px] font-MetMedium">
                      {item.count}
                    </p>
                  </>)
                   :
                    ("")
                    ) }
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Section */}
        <div className={`flex flex-col gap-8 mt-auto ${effectiveIsSidebarCollapsed ? "items-center" : ""}`}>
          {/* Assistant */}
          <Link href="/chatbot">
            <button
              className={`${
                effectiveIsSidebarCollapsed ? "!w-10 !h-10" : "w-full"
              } bg-brightBlue p-2 rounded-full flex items-center justify-center gap-2 hover:bg-brightBlue/80`}
            >
              <Image src={mic} alt="mic" className="w-[12px] object-cover" />
              {!effectiveIsSidebarCollapsed && (
                <span className="transition-all delay-700 ease-in-out text-white text-xs font-MetMedium">Aiva Assistant</span>
              )}
            </button>
          </Link>

          {/* User Profile */}
          <div className={`flex items-center  ${
              effectiveIsSidebarCollapsed ? "!justify-center" : "justify-between"
            }`}>
            <div className="flex flex-row gap-2">
            <Image src={bigUser} alt="user" className="object-cover w-10 h-10" />
            {!effectiveIsSidebarCollapsed && (
              <div className="flex flex-col">
                <p className="text-darkGray font-MetSemibold text-sm">Jegan Thirumeni</p>
                <p className="text-[#6C6B6C] text-xs">Admin</p>
              </div>
            )}
            </div>
          {!effectiveIsSidebarCollapsed && (
              <div className="w-6 h-6">
                <Image
                  src={logout}
                  alt="logout"
                  className="object-cover hover:opacity-80"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
