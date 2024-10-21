import React from 'react';
import Image from "next/image";
import about from "../../../public/img/about.svg";
const SettingMenuBar = ({ setActiveSection,activeSection }) => {
  return (
    <div className="w-full md:max-w-[217px] max-md:mb-4">
    <div className='flex max-sm:flex-col max-md:flex-row max-md:flex-wrap md:flex-col'>
      <div className={`flex flex-row gap-2 items-center p-[16px_8px] rounded-[16px] sm:rounded-[16px_16px_0px_0px] md:rounded-[16px_0px_0px_16px] cursor-pointer ${activeSection == "edit-profile" ? "bg-white" : ""}`} onClick={() => setActiveSection("edit-profile")}>
      <User className={`${activeSection === "edit-profile" ? "fill-brightBlue" : "fill-darkGray"}`} />
        <p className={`text-darkGray text-sm font-MetMedium hover:text-brightBlue ${activeSection === "edit-profile" ? "!text-brightBlue" : ""}`}>Edit Profile</p>
      </div>
      <div className={`flex flex-row gap-2 items-center p-[16px_8px] rounded-[16px] sm:rounded-[16px_16px_0px_0px] md:rounded-[16px_0px_0px_16px] cursor-pointer ${activeSection == "notification-settings" ? "bg-white" : ""}`} onClick={() => setActiveSection("notification-settings")}>
      <NotificationBlack className={`${activeSection === "notification-settings" ? "fill-brightBlue" : "fill-darkGray"}`} />
        <p className={`text-darkGray text-sm font-MetMedium hover:text-brightBlue ${activeSection === "notification-settings" ? "!text-brightBlue" : ""}`}>Notification Settings</p>
      </div>
      <div className={`flex flex-row gap-2 items-center p-[16px_8px] rounded-[16px] sm:rounded-[16px_16px_0px_0px] md:rounded-[16px_0px_0px_16px] cursor-pointer ${activeSection == "" ? "bg-white" : ""}`}>
        <Image src={about} alt="menu-icon" className="object-contain" />
        <p className="text-darkGray text-sm font-MetMedium hover:text-brightBlue">About</p>
      </div>
    </div>
    </div>
  )
}

export default SettingMenuBar;


const User = ({ className }) => {
  return (
      <>
          <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.33383 14.9684L9.12605 15.0027C7.19883 15.3204 5.75 17.0477 5.75 19.1115C5.75 19.7634 6.25549 20.25 6.82813 20.25H17.1719C17.7445 20.25 18.25 19.7634 18.25 19.1115C18.25 17.0477 16.8012 15.3204 14.874 15.0027L14.6662 14.9684C12.8999 14.6772 11.1001 14.6772 9.33383 14.9684ZM14.9102 13.4884L15.118 13.5226C17.8042 13.9655 19.75 16.349 19.75 19.1115C19.75 20.5455 18.6185 21.75 17.1719 21.75H6.82813C5.38147 21.75 4.25 20.5455 4.25 19.1115C4.25 16.349 6.19583 13.9655 8.88203 13.5226L9.08981 13.4884C11.0177 13.1705 12.9823 13.1705 14.9102 13.4884Z" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0003 3.75C10.1334 3.75 8.66699 5.20257 8.66699 6.9375C8.66699 8.67243 10.1334 10.125 12.0003 10.125C13.8672 10.125 15.3336 8.67243 15.3336 6.9375C15.3336 5.20257 13.8672 3.75 12.0003 3.75ZM7.16699 6.9375C7.16699 4.32319 9.35689 2.25 12.0003 2.25C14.6437 2.25 16.8336 4.32319 16.8336 6.9375C16.8336 9.55181 14.6437 11.625 12.0003 11.625C9.35689 11.625 7.16699 9.55181 7.16699 6.9375Z" />
          </svg>
      </>
  )
}

const NotificationBlack = ({ className }) => {
  return (
      <>
          <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.18592 19.9529C9.49485 19.6769 9.96897 19.7037 10.2449 20.0126C11.2505 21.1384 12.7477 21.1279 13.7468 20.012C14.023 19.7033 14.4972 19.6771 14.8058 19.9534C15.1144 20.2297 15.1406 20.7039 14.8643 21.0125C13.2749 22.7879 10.734 22.8118 9.1262 21.0118C8.85027 20.7029 8.877 20.2288 9.18592 19.9529Z" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.55989 4.3939C7.72133 2.89651 9.52115 1.76416 11.9958 1.76416C14.4701 1.76416 16.2698 2.89654 17.4314 4.39386C18.5746 5.86761 19.1068 7.69867 19.1068 9.18368C19.1068 9.60992 19.0938 9.92636 19.084 10.1665C19.082 10.2159 19.0801 10.262 19.0784 10.3052C19.0688 10.5635 19.0707 10.6876 19.0906 10.8105C19.1358 11.0901 19.2788 11.4345 19.8502 12.6938C19.8559 12.7064 19.8613 12.7191 19.8663 12.732C20.2791 13.7945 20.1868 14.7719 19.6958 15.6001C19.2272 16.3904 18.4397 16.9724 17.5885 17.3971C15.8862 18.2463 13.6358 18.6118 11.9958 18.6118C10.3554 18.6118 8.10479 18.2463 6.40247 17.3971C5.55121 16.9724 4.7637 16.3904 4.29528 15.6C3.80439 14.7717 3.71229 13.7943 4.1254 12.7319C4.1304 12.719 4.13574 12.7063 4.14144 12.6938C4.71285 11.4345 4.85587 11.0901 4.90104 10.8105C4.9209 10.6876 4.92286 10.5635 4.9132 10.3052C4.91158 10.262 4.90969 10.2159 4.90767 10.1665C4.89784 9.92637 4.88489 9.60993 4.88489 9.18368C4.88489 7.69875 5.41674 5.86768 6.55989 4.3939ZM7.74514 5.31323C6.81637 6.51064 6.38489 8.01433 6.38489 9.18368C6.38489 9.57678 6.39647 9.86076 6.40622 10.0998C6.40833 10.1515 6.41035 10.201 6.41215 10.2491C6.4221 10.515 6.42733 10.7681 6.38184 11.0497C6.29733 11.5728 6.04041 12.139 5.52644 13.2716L5.51641 13.2937C5.26753 13.9464 5.34737 14.4331 5.58569 14.8353C5.8487 15.2791 6.35286 15.696 7.07207 16.0548C8.51071 16.7725 10.5163 17.1118 11.9958 17.1118C13.4748 17.1118 15.4802 16.7725 16.9189 16.0548C17.6381 15.696 18.1423 15.279 18.4055 14.8352C18.6439 14.4329 18.7238 13.9462 18.4752 13.2936L18.4652 13.2716C17.9512 12.139 17.6943 11.5728 17.6098 11.0497C17.5643 10.7681 17.5696 10.515 17.5795 10.2491C17.5813 10.201 17.5833 10.1515 17.5854 10.0998C17.5952 9.86077 17.6068 9.57679 17.6068 9.18368C17.6068 8.01441 17.1751 6.51071 16.2462 5.31327C15.3356 4.1394 13.9549 3.26416 11.9958 3.26416C10.0362 3.26416 8.65559 4.13943 7.74514 5.31323Z" />
          </svg>
      </>
  )
}