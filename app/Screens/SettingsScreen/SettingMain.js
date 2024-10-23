"use client";
import React, { useState } from "react";
import Sidebar from "./../../components/Sidebar";
import ChatHeader from "./../../components/ChatHeader";
import SettingMenuBar from "./SettingMenuBar";
import EditProfile from "./EditProfile";
import NotificationSetting from "./NotificationSetting";

const SettingMain = () => {
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
    <div className="flex flex-col md:flex-row h-full overflow-hidden">

      <SettingMenuBar
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      {activeSection === "edit-profile" && <EditProfile />}
      {activeSection === "notification-settings" && <NotificationSetting />}
    </div>
);
};

export default SettingMain;

{/* <div className="relative flex flex-row gap-4 bg-lightGray p-4 h-screen">
      <>
          <Sidebar isSidebarCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} isMobileOpen={isMobileOpen} toggleMobileSidebar={toggleMobileSidebar} />
      </>
      <div className="w-full flex flex-col gap-4">
          <ChatHeader toggleSidebar={toggleSidebar} toggleMobileSidebar={toggleMobileSidebar} />
          <div className="flex flex-col md:flex-row h-full overflow-hidden">
          <SettingMenuBar setActiveSection={setActiveSection} activeSection={activeSection}/>
          {activeSection === "edit-profile" && <EditProfile />}
                  {activeSection === "notification-settings" && <NotificationSetting />}
          </div>
      </div>
  </div> */}