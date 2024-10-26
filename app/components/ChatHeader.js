"use client";
import Image from "next/image";
import search from "../../public/img/search.svg";
import sidebar from "../../public/img/sidebar.svg";
import pending from "../../public/img/pending.svg";
import calenderBlue from "../../public/img/calenderBlue.svg";
import { usePathname } from "next/navigation";

const ChatHeader = ({ toggleSidebar, toggleMobileSidebar }) => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex max-sm:flex-col max-sm:justify-start max-sm:items-start max-sm:gap-2 flrx-row justify-between items-center p-[12px_16px_12px_16px] lg:p-[12px_16px_12px_24px] bg-white rounded-lg">
        <div className="flex flex-row gap-2">
          {/* onclick on sidebar */}
          <Image
            src={sidebar}
            alt="toggle sidebar"
            className="w-6 h-6 object-contain hidden lg:block mt-[1px] hover:opacity-70"
            onClick={toggleSidebar}
          />
          <Image
            src={sidebar}
            alt="toggle sidebar"
            className="w-6 h-6 object-contain block lg:hidden mt-[1px] hover:opacity-70"
            onClick={toggleMobileSidebar}
          />
          <div>
            {pathname === "/chatbot" && (
              <h2 className="text-xl font-MetBold text-darkGray capitalize">
                Chat Assistant
              </h2>
            )}
            {pathname === "/settings" && (
              <h2 className="text-xl font-MetBold text-darkGray capitalize">
                Settings
              </h2>
            )}
            {pathname === "/notifications" && (
              <h2 className="text-xl font-MetBold text-darkGray capitalize">
                Notifications
              </h2>
            )}
            {pathname === "/notes" && (
              <h2 className="text-xl font-MetBold text-darkGray capitalize">
                Notes
              </h2>
            )}
            {pathname === "/today" && (
              <div className="flex gap-3 flex-row">
                <h2 className="text-xl font-MetBold text-darkGray capitalize">
                  Today
                </h2>
                <div className="bg-[#76767619] rounded-[39px] flex flex-row gap-2 p-[6px_14px] justify-center items-center w-full min-w-[150px] max-w-[150px]">
                  <Image
                    src={pending}
                    alt="pending"
                    className="w-[16px] h-[16px] object-cover"
                  />
                  <p className="text-xs text-[#767676] font-MetSemiBold">
                    3 Tasks Pending
                  </p>
                </div>
              </div>
            )}
            {pathname === "/tomorrow" && (
              <div className="flex gap-3 flex-row">
                <h2 className="text-xl font-MetBold text-darkGray capitalize">
                  Tomorrow
                </h2>
                <div className="bg-[#76767619] rounded-[39px] flex flex-row gap-2 p-[6px_14px] justify-center items-center w-full min-w-[150px] max-w-[150px]">
                  <Image
                    src={pending}
                    alt="pending"
                    className="w-[16px] h-[16px] object-cover"
                  />
                  <p className="text-xs text-[#767676] font-MetSemiBold">
                    3 Tasks Pending
                  </p>
                </div>
              </div>
            )}
            {pathname === "/week" && (
              <div className="flex gap-3 flex-row">
                <h2 className="text-xl font-MetBold text-darkGray capitalize">
                  Week
                </h2>
                <div className="bg-[#76767619] rounded-[39px] flex flex-row gap-2 p-[6px_14px] justify-center items-center w-full min-w-[150px] max-w-[150px]">
                  <Image
                    src={pending}
                    alt="pending"
                    className="w-[16px] h-[16px] object-cover"
                  />
                  <p className="text-xs text-[#767676] font-MetSemiBold">
                    3 Tasks Pending
                  </p>
                </div>
              </div>
            )}
            {pathname === "/month" && (
              <div className="flex gap-3 flex-row">
                <h2 className="text-xl font-MetBold text-darkGray capitalize">
                  Month
                </h2>
                <div className="bg-[#76767619] rounded-[39px] flex flex-row gap-2 p-[6px_14px] justify-center items-center w-full min-w-[150px] max-w-[150px]">
                  <Image
                    src={pending}
                    alt="pending"
                    className="w-[16px] h-[16px] object-cover"
                  />
                  <p className="text-xs text-[#767676] font-MetSemiBold">
                    3 Tasks Pending
                  </p>
                </div>
              </div>
            )}
            {pathname === "/year" && (
              <div className="flex gap-3 flex-row">
                <h2 className="text-xl font-MetBold text-darkGray capitalize">
                  Year
                </h2>
                <div className="bg-[#76767619] rounded-[39px] flex flex-row gap-2 p-[6px_14px] justify-center items-center w-full min-w-[150px] max-w-[150px]">
                  <Image
                    src={pending}
                    alt="pending"
                    className="w-[16px] h-[16px] object-cover"
                  />
                  <p className="text-xs text-[#767676] font-MetSemiBold">
                    3 Tasks Pending
                  </p>
                </div>
              </div>
            )}
            {pathname === "/tasklist" && (
              <div className="flex gap-3 flex-row">
                <h2 className="text-xl font-MetBold text-darkGray capitalize">
                  All Tasks
                </h2>
                <div className="bg-[#76767619] rounded-[39px] flex flex-row gap-2 p-[6px_14px] justify-center items-center w-full min-w-[150px] max-w-[150px]">
                  <Image
                    src={pending}
                    alt="pending"
                    className="w-[16px] h-[16px] object-cover"
                  />
                  <p className="text-xs text-[#767676] font-MetSemiBold">
                    3 Tasks Pending
                  </p>
                </div>
              </div>
            )}
            {pathname === "/calender" && (
              <div className="flex gap-3 flex-row">
                <h2 className="text-xl font-MetBold text-darkGray capitalize">
                  Today
                </h2>
                <div className="bg-[#EAF0FF] rounded-[39px] flex flex-row gap-2 p-[6px_14px] justify-center items-center w-full min-w-[150px] max-w-[150px]">
                  <Image
                    src={calenderBlue}
                    alt="calenderBlue"
                    className="w-[16px] h-[16px] object-cover"
                  />
                  <p className="text-xs text-brightBlue font-MetSemiBold">
                    Calendar
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        {pathname === "/settings" ? (
          ""
        ) : (
          <div className="relative w-full max-w-[321px]">
            <input
              type="text"
              placeholder="Search for a task"
              className="p-[12px_13px_12px_48px] border border-[#dfdfdf] text-xs font-MetMedium text-[#3333337f] w-full rounded-xl shadow-none outline-none"
            />
            <Image
              src={search}
              alt="search"
              className="w-[16px] h-[16px] object-cover absolute top-[50%] translate-y-[-50%] left-4"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ChatHeader;
