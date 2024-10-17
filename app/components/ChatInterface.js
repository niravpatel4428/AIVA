"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { tasks } from "../data/tasks.json";
import search from "@/public/img/search.svg";
import back from "@/public/img/back.svg";
import notify from "@/public/img/notify.svg";
import send from "@/public/img/send.svg";
import calender from "@/public/img/calender.svg";
import user from "@/public/img/user.png";
import mic from "@/public/img/mic.png";
import mic1 from "@/public/img/mic.svg";
import Sidebar from "./Sidebar";
const ChatInterface = () => {
    const tasks1 = tasks;
    return (
        <>
            <div className="flex flex-row gap-4 bg-lightGray p-4 h-screen">
                <>
                    <Sidebar />
                </>
                <div className="w-full flex flex-col gap-4">
                    <div className="flex flrx-row justify-between items-center p-[12px_16px_12px_24px] bg-white rounded-lg">
                        <h2 className="text-xl font-MetBold text-darkGray ">
                            Chat Assistant
                        </h2>
                        <div className="relative w-full max-w-[321px]">
                            <input
                                type="text"
                                placeholder="Search for a message"
                                className="p-[12px_13px_12px_48px] border border-[#dfdfdf] text-xs font-MetMedium text-[#3333337f] w-full rounded-xl shadow-none outline-none"
                            />
                            <Image
                                src={search}
                                alt="search"
                                className="w-[16px] h-[16px] object-cover absolute top-[50%] translate-y-[-50%] left-4"
                            />
                        </div>
                    </div>
                    <div className="bg-white relative h-[100%] rounded-[16px] overflow-hidden p-4 ">
                        <div className="relative flex flex-col w-full max-w-[870px] mx-auto overflow-y-auto overview total-height">
                            {tasks1.map((task) => (
                                <div key={task.id} className="mb-6">
                                    {/* Chat message */}
                                    <div className="flex flex-row items-end justify-end space-x-3 mb-4">
                                        <p className="relative w-fit text-sm font-MetMedium text-darkGray leading-[150%] bg-[url('/img/back.png')] bg-no-repeat bg-cover p-4 rounded-md">
                                            {task.message}
                                        </p>
                                        <Image
                                            src={user}
                                            alt="user"
                                            className="object-cover w-6 h-6"
                                        />
                                    </div>

                                    {/* Response Box */}
                                    <div className="flex flex-row items-end gap-2">
                                        <Image src={mic} alt="mic" className="object-cover w-6 h-6" />
                                        <div className="bg-lightGray flex flex-col gap-[7px] p-4 rounded-lg shadow w-full max-w-[377px]">
                                            <p className="font-MetMedium text-darkGray text-sm leading-[150%]">
                                                {task.response}
                                            </p>

                                            {/* Task Details */}
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
                                                        className="object-cover h-4 w-4"
                                                    />

                                                    <p className="text-xs font-MetMedium leading-[150%] text-[#6C6B6B]">
                                                        {task.details.date}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Task Action Button */}
                                            <button className="bg-brightBlue text-white hover:bg-brightBlue/80 transition-all duration-300 px-9 py-2 font-MetMedium rounded-[54px] text-xs">
                                                {task.details.buttonText}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 w-full border-t-[1px] border-[#d1d1d1]">
                            <div className="p-[15px_16px_15px_0px_] mx-auto w-full max-w-[870px] flex flex-row items-end gap-3 bg-white">
                                <div className="w-12 h-12 bg-brightBlue hover:bg-brightBlue/80 transition-all duration-300 rounded-[100%] flex justify-center items-center">
                                    <Image src={mic1} alt="mic1" className="object-contain h-8 w-8" />
                                </div>
                                <div className="relative w-full h-full">
                                    <textarea name="input" id="input" placeholder="Type Message" className="p-[5px_55px_5px_15px] resize-none h-[100%] w-full block text-darkGray text-[13px] leading-[140%] font-MetMedium rounded-lg outline-none shadow-none border border-[#dfdfdf] placeholder:text-[#3333337f]"></textarea>
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
                </div>
            </div>
        </>
    );
};

export default ChatInterface;
