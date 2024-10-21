"use client";
import Image from "next/image";
import search from "../../public/img/search.svg";
import sidebar from "../../public/img/sidebar.svg";

const ChatHeader = ({ toggleSidebar,toggleMobileSidebar }) => {
  return (
    <>
      <div className="flex max-sm:flex-col max-sm:justify-start max-sm:items-start max-sm:gap-2 flrx-row justify-between items-center p-[12px_16px_12px_16px] lg:p-[12px_16px_12px_24px] bg-white rounded-lg">
        <div className="flex flex-row gap-2">
          {/* onclick on sidebar */}
        <Image src={sidebar} alt="toggle sidebar" className="w-6 h-6 object-contain hidden lg:block" onClick={toggleSidebar} />
        <Image src={sidebar} alt="toggle sidebar" className="w-6 h-6 object-contain block lg:hidden" onClick={toggleMobileSidebar} />
        <h2 className="text-xl font-MetBold text-darkGray ">Chat Assistant</h2>
        </div>
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
    </>
  );
};

export default ChatHeader;
