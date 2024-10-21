"use client";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import ChatHeader from './../../components/ChatHeader';
import ChatBox from './ChatBox';
const Chat = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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
                    <Sidebar isSidebarCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} isMobileOpen={isMobileOpen} toggleMobileSidebar={toggleMobileSidebar} />
                </>
                <div className="w-full flex flex-col gap-4">
                    <ChatHeader toggleSidebar={toggleSidebar} toggleMobileSidebar={toggleMobileSidebar} />
                    <ChatBox />
                </div>
            </div>
        </>
    );
};

export default Chat;
