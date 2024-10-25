"use client";
import "./globals.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import Head from "next/head";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatHeader from "./components/ChatHeader";
import { usePathname } from "next/navigation";
export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("edit-profile");
  const toggleSidebar = () => {
      setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  const toggleMobileSidebar = () => {
      setIsMobileOpen(!isMobileOpen);
  };
  const isLoginPage = pathname === "/";
  return (
    <html lang="en">
      <Head>
        <title>AIVA: Your AI-Powered Personal Assisstant</title>
      </Head>
      <body>
      {!isLoginPage ? (
          <div className="relative flex flex-row gap-4 bg-lightGray p-4 h-screen overflow-hidden">
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
              {children}
            </div>
          </div>
        ) : (
          // route wothout sidebar and header
          <>{children}</>
        )}
      </body>
    </html>
  );
}
