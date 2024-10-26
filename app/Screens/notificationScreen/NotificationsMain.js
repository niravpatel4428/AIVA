"use client";
import React, { useState } from "react";

const NotificationsMain = () => {
  const [activeTab, setActiveTab] = useState("all");
  const filteredNotifications =
    activeTab === "unread"
      ? notifications.filter((notification) => notification.unread)
      : notifications;
  return (
    <>
      <div className="flex justify-between items-center max-sm:flex-col max-sm:justify-start">
        <div className="bg-[#2764fe1a] rounded-[83px] p-1 w-full max-w-[245px] flex flex-row justify-between">
          <p
            className={`w-[49%] capitalize rounded-[83px] text-center p-[14px_10px] text-white text-xs font-MetBold cursor-pointer ${
              activeTab === "all" ? "bg-brightBlue" : "!text-brightBlue"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All
          </p>
          <p
            className={`w-[49%] capitalize text-center p-[14px_10px] text-brightBlue text-xs font-MetBold cursor-pointer flex items-center justify-center ${
              activeTab === "unread"
                ? "bg-brightBlue text-white rounded-[83px]"
                : ""
            }`}
            onClick={() => setActiveTab("unread")}
          >
            Unread
            <span className="w-4 h-4 bg-[#F1414F] text-white rounded-[100%] ml-3 flex items-center justify-center">
              {notifications.filter((n) => n.unread).length}
            </span>
          </p>
        </div>
        <p className="font-MetBold text-xs text-brightBlue flex flex-row gap-2 items-center">
          {" "}
          <Right /> Mark all as read
        </p>
      </div>
      <div className="flex flex-col overflow-y-auto overview gap-2">
        {filteredNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`rounded-[12px] bg-white border ${
              notification.unread ? "border-brightBlue" : "border-[#eaeaea]"
            } p-[16px_85px_16px_24px] relative`}
          >
            <p className="text-darkGray text-sm font-MetMedium mb-1 md:mb-2">
              {notification.unread && (
                <span className="relative w-[7px] h-[7px] inline-block bg-brightBlue rounded-[100%] mr-[6px]"></span>
              )}
              {notification.title}
            </p>
            <p
        className="text-[#6C6B6B] text-sm font-MetRegular"
        dangerouslySetInnerHTML={{ __html: notification.message }}
      ></p>
            <span className="text-[#6C6B6B] text-xs font-MetRegular leading-[150%] absolute top-4 right-4">
              {notification.time}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default NotificationsMain;

const Right = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.99974 12.9882L12.7438 5.24408L13.9223 6.4226L5.58899 14.7559C5.43272 14.9122 5.22075 15 4.99974 15C4.77872 15 4.56676 14.9122 4.41048 14.7559L1.07715 11.4226L2.25566 10.2441L4.99974 12.9882Z"
          fill="#2764FE"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.9996 12.9883L17.7433 5.24411L18.9219 6.42259L10.5889 14.7559C10.2636 15.0814 9.73601 15.0814 9.41051 14.756L8.16016 13.506L9.33851 12.3274L9.9996 12.9883Z"
          fill="#2764FE"
        />
      </svg>
    </>
  );
};

const notifications = [
  {
    id: 1,
    type: "task",
    title: "Task Reminder",
    message:
      "You have a task due today :'<span class='text-brightBlue font-MetBold'>Talk to the lawyer about case </span>' Don't forget to mark it as done!",
    time: "10m ago",
    unread: true,
  },
  {
    id: 2,
    type: "task",
    title: "Upcoming Task Tomorrow",
    message: "''<span class='text-brightBlue font-MetBold'>Doctor's appointment</span>' is scheduled for tomorrow at 10 AM.",
    time: "11m ago",
    unread: true,
  },
  {
    id: 3,
    type: "reminder",
    title: "Weekly Reminder",
    message: "It's time to water your plants! 🌱",
    time: "16m ago",
    unread: true,
  },
  {
    id: 4,
    type: "feature",
    title: "New Feature: Notes",
    message: "Add notes for your important meetings.",
    time: "21m ago",
    unread: true,
  },
  {
    id: 5,
    type: "task",
    title: "Task Reminder",
    message:
      "You have a task due today: '<span class='text-brightBlue font-MetBold'>Talk to the lawyer about case</span>' Don't forget to mark it as done!",
    time: "10m ago",
    unread: false,
  },
  {
    id: 6,
    type: "task",
    title: "Upcoming Task Tomorrow",
    message: "'<span class='text-brightBlue font-MetBold'>Doctor's appointment</span>' is scheduled for tomorrow at 10 AM.",
    time: "11m ago",
    unread: false,
  },
  {
    id: 7,
    type: "reminder",
    title: "Weekly Reminder",
    message: "It's time to water your plants! 🌱",
    time: "16m ago",
    unread: false,
  },
  {
    id: 8,
    type: "reminder",
    title: "Weekly Reminder",
    message: "It's time to water your plants! 🌱",
    time: "16m ago",
    unread: false,
  },
  {
    id: 9,
    type: "feature",
    title: "New Feature: Notes",
    message: "Add notes for your important meetings.",
    time: "21m ago",
    unread: false,
  },
  {
    id: 10,
    type: "task",
    title: "Task Reminder",
    message:
      "You have a task due today: 'Talk to the lawyer about case' Don't forget to mark it as done!",
    time: "10m ago",
    unread: false,
  },
  {
    id: 11,
    type: "task",
    title: "Upcoming Task Tomorrow",
    message: "'Doctor's appointment' is scheduled for tomorrow at 10 AM.",
    time: "11m ago",
    unread: false,
  },
  {
    id: 12,
    type: "reminder",
    title: "Weekly Reminder",
    message: "It's time to water your plants! 🌱",
    time: "16m ago",
    unread: false,
  },
];
