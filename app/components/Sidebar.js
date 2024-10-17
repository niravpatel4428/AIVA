"use client";
import React, { useState } from "react";
import Image from "next/image";
import bigLogo from "@/public/img/bigLogo.png";
import Link from "next/link";
import mic from "@/public/img/mic.svg";
import tasks from "@/public/img/tasks.svg";
import notes from "@/public/img/notes.svg";
import notification from "@/public/img/notification.svg";
import setting from "@/public/img/setting.svg";
import logout from "@/public/img/logout.svg";
import user from "@/public/img/user.png";
import bigUser from "@/public/img/bigUser.png";
import arrowUp from "@/public/img/arrowUp.svg";
import sidebar from "@/public/img/sidebar.svg";
import calenderLight from "@/public/img/calenderLight.svg";
const Sidebar = () => {
    const [isTasksOpen, setIsTasksOpen] = useState(false); // State to toggle dropdown
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const toggleTasksDropdown = () => {
        setIsTasksOpen(!isTasksOpen);
    };
    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };
    return (
        <>
            <div className={`relative ${isSidebarCollapsed ? 'w-[60px]' : 'w-full max-w-[282px]'} bg-white rounded-[16px] py-4 px-2 lg:p-4 flex flex-col justify-between transition-all duration-300`}>
                {/* Toggle Sidebar Icon */}
                <div className="absolute top-6 left-4 lg:left-6 cursor-pointer" onClick={toggleSidebar}>
                    <Image src={sidebar} alt="toggle sidebar" className="w-6 h-6 object-contain" />
                </div>

                {/* Sidebar Logo */}
                <div className="mb-10">
                    <div className="inline-flex w-full justify-center">
                        <Link href="/" className="w-fit mx-auto">
                            <div className="w-[56px] h-[56px] bg-brightBlue rounded-[100%] flex justify-center items-center">
                                <Image src={mic} alt="mic" className="object-contain h-8 w-8" />
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Sidebar Links */}
                <div className="flex flex-col">
                    {/* Tasks Section */}
                    <div className="flex flex-col py-2">
                        <div onClick={toggleTasksDropdown} className={`flex flex-row justify-between items-center cursor-pointer ${!isSidebarCollapsed ? "" : "px-0"} px-2`}>
                            <div className="flex items-center gap-[14px]">
                                <Image src={tasks} alt="tasks" className="object-cover w-6 h-6" />
                                {!isSidebarCollapsed && <p className="font-MetRegular text-darkGray text-sm capitalize">Tasks</p>}
                            </div>
                            {!isSidebarCollapsed && <Image src={arrowUp} alt="arrowUp" className={`object-cover w-5 h-5 transform transition-transform ${isTasksOpen ? 'rotate-180' : ''}`} />}
                        </div>
                        {isTasksOpen && !isSidebarCollapsed && (
                            <div className="mt-2 flex flex-col">
                                <Link href="/" className="group p-2  hover:bg-[#2764fe19] hover:rounded-[12px]">
                                    <div className="flex justify-start items-center gap-[14px]">
                                        <div className="w-6 h-6 flex justify-center items-center">
                                            <p className="w-2 h-2 rounded-[100%] bg-brightBlue content-[''] group-hover:block hidden"></p>
                                        </div>
                                        <p className="font-MetRegular text-darkGray text-sm capitalize hover:text-brightBlue">Today</p>
                                    </div>
                                </Link>
                                <Link href="/" className="group p-2  hover:bg-[#2764fe19] hover:rounded-[12px] ">
                                    <div className="flex justify-start items-center gap-[14px]">
                                        <div className="w-6 h-6 flex justify-center items-center ">
                                            <p className="w-2 h-2 rounded-[100%] bg-brightBlue content-[''] group-hover:block hidden"></p>
                                        </div>
                                        <p className="font-MetRegular text-darkGray text-sm capitalize hover:text-brightBlue">Tomorrow</p>
                                    </div>
                                </Link>
                                <Link href="/" className="group p-2  hover:bg-[#2764fe19] hover:rounded-[12px] ">
                                    <div className="flex justify-start items-center gap-[14px]">
                                        <div className="w-6 h-6 flex justify-center items-center ">
                                            <p className="w-2 h-2 rounded-[100%] bg-brightBlue content-[''] group-hover:block hidden"></p>
                                        </div>
                                        <p className="font-MetRegular text-darkGray text-sm capitalize hover:text-brightBlue">This Week</p>
                                    </div>
                                </Link>
                                <Link href="/" className="group p-2  hover:bg-[#2764fe19] hover:rounded-[12px] ">
                                    <div className="flex justify-start items-center gap-[14px]">
                                        <div className="w-6 h-6 flex justify-center items-center ">
                                            <p className="w-2 h-2 rounded-[100%] bg-brightBlue content-[''] group-hover:block hidden"></p>
                                        </div>
                                        <p className="font-MetRegular text-darkGray text-sm capitalize hover:text-brightBlue">This Month</p>
                                    </div>
                                </Link>
                                <Link href="/" className="group p-2  hover:bg-[#2764fe19] hover:rounded-[12px] ">
                                    <div className="flex justify-start items-center gap-[14px]">
                                        <div className="w-6 h-6 flex justify-center items-center ">
                                            <p className="w-2 h-2 rounded-[100%] bg-brightBlue content-[''] group-hover:block hidden"></p>
                                        </div>
                                        <p className="font-MetRegular text-darkGray text-sm capitalize hover:text-brightBlue">This Year</p>
                                    </div>
                                </Link>
                                <Link href="/" className="group p-2  hover:bg-[#2764fe19] hover:rounded-[12px] ">
                                    <div className="flex justify-start items-center gap-[14px]">
                                        <div className="w-6 h-6 flex justify-center items-center ">
                                            <Image src={calenderLight} alt="calender" className="object-contain" />
                                        </div>
                                        <p className="font-MetRegular text-darkGray text-sm capitalize hover:text-brightBlue">Calendar View</p>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Notes Section */}
                    <Link href="/" className={`task-icon hover:bg-[#2764fe19] hover:rounded-[12px] ${!isSidebarCollapsed ? "" : "px-0"} p-2`}>
                        <div className="flex items-center gap-[14px]">
                            <Image src={notes} alt="notes" className="object-cover w-6 h-6" />
                            {!isSidebarCollapsed && <p className="font-MetRegular text-darkGray text-sm capitalize">Notes</p>}
                        </div>
                    </Link>

                    {/* Notifications Section */}
                    <Link href="/" className={`task-icon hover:bg-[#2764fe19] hover:rounded-[12px] ${!isSidebarCollapsed ? "" : "px-0"} p-2`}>
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex justify-start items-center gap-[14px]">
                                <Image src={notification} alt="notification" className="object-cover w-6 h-6" />
                                {!isSidebarCollapsed &&  <p className="font-MetRegular text-darkGray text-sm capitalize">Notifications</p>}
                            </div>
                            {!isSidebarCollapsed && <p className="bg-brightRed w-4 h-4 flex justify-center items-center rounded-[100px] text-[11px] font-MetMedium">
                                7
                            </p>}
                        </div>
                    </Link>

                    {/* Settings Section */}
                    <Link href="/" className={`task-icon hover:bg-[#2764fe19] hover:rounded-[12px] ${!isSidebarCollapsed ? "" : "px-0"} p-2`}>
                        <div className="flex items-center gap-[14px]">
                            <Image src={setting} alt="setting" className="object-cover w-6 h-6" />
                            {!isSidebarCollapsed && <p className="font-MetRegular text-darkGray text-sm capitalize">Settings</p>}
                        </div>
                    </Link>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col gap-8 mt-auto">
                    <div>
                        <button className="w-full bg-brightBlue p-2 rounded-[54px] flex items-center justify-center gap-2 hover:bg-brightBlue/80 transition-all duration-300">
                            <span className="w-3">
                                <Image src={mic} alt="mic" className="object-cover w-[12px]" />
                            </span>
                            {!isSidebarCollapsed && "Aiva Assistant"}
                        </button>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                            <Image src={bigUser} alt="user" className="object-cover w-10 h-10" />
                            {!isSidebarCollapsed && (
                                <div className="flex flex-col mb-1">
                                    <p className="text-darkGray font-MetSemibold text-sm">Jegan Thirumeni</p>
                                    <p className="text-[#6C6B6B] text-xs font-MetRegular leading-[150%]">Member Since : Jun 2024</p>
                                </div>
                            )}
                        </div>
                        {!isSidebarCollapsed && (
                        <div className="w-6 h-6">
                            <Image src={logout} alt="logout" className="object-cover hover:opacity-80" />
                        </div>)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
