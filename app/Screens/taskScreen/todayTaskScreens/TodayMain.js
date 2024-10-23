"use client";
import React, { useState } from "react";
import TaskToday from "./TaskToday";
import Sidebar from "../../../components/Sidebar";
import ChatHeader from "../../../components/ChatHeader";

const TodayMain = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("edit-profile");
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };
  return (
    <>
      <TaskToday />
      
      {/* <CalenerMain */}
      {/* <div className="relative flex flex-row gap-4 bg-lightGray p-4 h-screen">
        <>
          <Sidebar
            isSidebarCollapsed={isSidebarCollapsed}
            toggleSidebar={toggleSidebar}
            isMobileOpen={isMobileOpen}
            toggleMobileSidebar={toggleMobileSidebar}
          />
        </>
        <div className="w-full flex flex-col gap-4">
          <ChatHeader
            toggleSidebar={toggleSidebar}
            toggleMobileSidebar={toggleMobileSidebar}
          />
          <TaskToday />
          <CalenderMain />
        </div>
      </div> */}
    </>
  );
};

export default TodayMain;
