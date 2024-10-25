"use client";
import React, { useState } from "react";
import SettingMenuBar from "./SettingMenuBar";
import EditProfile from "./EditProfile";
import NotificationSetting from "./NotificationSetting";

const SettingMain = () => {
  const [activeSection, setActiveSection] = useState("edit-profile");

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
