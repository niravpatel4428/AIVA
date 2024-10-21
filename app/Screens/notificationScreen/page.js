"use client";
import React, { useState } from 'react'
import Sidebar from './../../components/Sidebar';
import ChatHeader from './../../components/ChatHeader';
import NotificationsMain from "./NotificationsMain";
const NotificationScreen = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  // State to track active section (Edit Profile or Notification Settings)
  const [activeSection, setActiveSection] = useState("edit-profile");
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };
  return (
    <>
      <div className="relative flex flex-row gap-4 bg-lightGray p-4 h-screen">
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
          <NotificationsMain />
        </div>
      </div>
    </>
  );
};

export default NotificationScreen;
