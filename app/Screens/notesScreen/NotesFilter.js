"use client";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "../../components/Modal";
import mark from "./../../../public/img/mark.svg";
import pen from "./../../../public/img/pen.svg";
import bin from "./../../../public/img/bin.svg";
import more from "./../../../public/img/more.svg";
import arrowUp from "./../../../public/img/arrowUp.svg";
import notesBlue from "./../../../public/img/notesBlue.svg";
import calenderBlue from "./../../../public/img/calenderBlue.svg";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
const NotesFilter = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [time, setTime] = useState("06:00");

  const handleTimeChange = (newTime) => {
    setTime(newTime);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const filteredNotes = activeCategory
    ? notesData.filter((note) => note.category === activeCategory)
    : notesData;
  const firstColumn = filteredNotes.filter((_, index) => index % 3 === 0);
  const secondColumn = filteredNotes.filter((_, index) => index % 3 === 1);
  const thirdColumn = filteredNotes.filter((_, index) => index % 3 === 2);
  return (
    <div className="overflow-hidden relative h-full">
      {/* ------- Category Buttons -------  */}
      <div className="flex flex-wrap gap-3 mb-4 pt-[2px]">
        <button
          onClick={() => setActiveCategory(null)} // Button to reset the filter
          className={`text-xs font-MetSemiBold text-brightBlue bg-[#2764fe1a] hover:bg-[#2764fe37] transition-all duration-300 p-[8px_16px] rounded capitalize border-none focus:!outline-none outline-0 ring-0 ring-none ${
            activeCategory === null ? "bg-[#2764fe37]" : ""
          }`}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`text-xs font-MetSemiBold text-brightBlue bg-[#2764fe1a] hover:bg-[#2764fe37] transition-all duration-300 p-[8px_16px] rounded capitalize border-none focus:!outline-none outline-0 ring-0 ring-none ${
              activeCategory === category ? "bg-[#2764fe37]" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* ------ Masonry Grid Layout ------ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-full overview overflow-y-scroll">
        {/* First column */}
        <div className="grid gap-4 h-fit">
          {firstColumn.map((note, index) => (
            <div
              key={index}
              className="grid gap-4 h-fit transition-transform duration-300 ease-in-out"
            >
              <div className="p-4 bg-white rounded-xl border border-[#eaeaea] w-full h-fit">
                <h4 className="text-darkGray text-base font-MetMedium leading-[150%] mb-2">
                  {note.title}
                </h4>
                <ul className="pl-4">
                  {note.content.map((item, i) => (
                    <li
                      key={i}
                      className="text-[#6C6B6B] text-sm font-MetRegular leading-[150%] xl:w-[90%] list-disc"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="text-xs font-MetSemiBold text-[#405FBA] bg-[#2764fe1a] hover:bg-[#2764fe37] transition-all duration-300 p-[8px_16px] rounded capitalize border-none focus:outline-none mt-4">
                  {note.category}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Second column */}
        <div className="grid gap-4 h-fit">
          {secondColumn.map((note, index) => (
            <div
              key={index}
              className="grid gap-4 h-fit transition-transform duration-300 ease-in-out"
            >
              <div className="p-4 bg-white rounded-xl border border-[#eaeaea] w-full h-fit">
                <h4 className="text-darkGray text-base font-MetMedium leading-[150%] mb-2">
                  {note.title}
                </h4>
                <ul className="pl-4">
                  {note.content.map((item, i) => (
                    <li
                      key={i}
                      className="text-[#6C6B6B] text-sm font-MetRegular leading-[150%] xl:w-[90%] list-disc"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="text-xs font-MetSemiBold text-[#405FBA] bg-[#2764fe1a] hover:bg-[#2764fe37] transition-all duration-300 p-[8px_16px] rounded capitalize border-none focus:outline-none mt-4">
                  {note.category}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Third column */}
        <div className="grid gap-4 h-fit">
          {thirdColumn.map((note, index) => (
            <div
              key={index}
              className="grid gap-4 h-fit transition-transform duration-300 ease-in-out last:mb-48"
            >
              <div className="p-4 bg-white rounded-xl border border-[#eaeaea] w-full h-fit">
                <h4 className="text-darkGray text-base font-MetMedium leading-[150%] mb-2">
                  {note.title}
                </h4>
                <ul className="pl-4">
                  {note.content.map((item, i) => (
                    <li
                      key={i}
                      className="text-[#6C6B6B] text-sm font-MetRegular leading-[150%] xl:w-[90%] list-disc"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleOpenModal}
                  className="text-xs font-MetSemiBold text-[#405FBA] bg-[#2764fe1a] hover:bg-[#2764fe37] transition-all duration-300 p-[8px_16px] rounded capitalize border-none focus:outline-none mt-4"
                >
                  {note.category}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ----- Modal content ----- */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="flex flex-col h-full">
          <div className="flex justify-between w-full max-w-[636px] mb-3 sm:mb-7 max-md:pr-10 max-sm:items-start">
            <h2 className="text-darkGray text-xl font-MetBold">
              Meeting Agenda
            </h2>
            <div className="relative flex flex-row items-center">
              <button className="bg-[#EAF0FF] w-6 h-6 rounded-full flex justify-center items-center border-none focus:border-none focus:outline-none opacity-40 hover:opacity-100 mr-2">
                <Left />
              </button>
              <button className="bg-[#EAF0FF] w-6 h-6 rounded-full flex justify-center items-center border-none focus:border-none focus:outline-none opacity-40 hover:opacity-100">
                <Right />
              </button>
              <div className="w-[1px] h-4 bg-[#dfdfdf] mx-[11px]"></div>
            </div>
          </div>
          {/* ----------- modal header finished ----------- */}
          <div className="flex flex-col-reverse max-md:gap-4 max-md:justify-end md:flex-row h-full overflow-y-auto overview">
            <div className="w-full max-w-[451px] pr-6 md:border-r-[1px] border-[#dfdfdf]">
              <p className="text-[#6C6B6B] font-MetRegular text-sm leading-[150%]">
                Lorem ipsum dolor sit amet consectetur. Tristique egestas hac
                platea ullamcorper egesta pellentesque blandit mauris. Er
                Tristique donec bibendum egestas blandit nisi tortor at odio
                suscipit metus nisl. Sit vitae ultricies id egestas diam
              </p>
              <div className="bg-[#f1f1f1] w-full h-[1px] relative content-[''] my-5"></div>
              <ul className="flex flex-row gap-2 sm:gap-4 items-center max-sm:flex-wrap max-sm:justify-between">
                <li className="flex flex-row gap-2 max-sm:basis-[48%] ">
                  <Image src={mark} alt="icons" className="object-contain" />
                  <p className="text-darkGray font-MetMedium text-xs">
                    Mark Complete
                  </p>
                </li>
                <li className="flex flex-row gap-2 max-sm:basis-[48%] ">
                  <Image src={pen} alt="icons" className="object-contain" />
                  <p className="text-darkGray font-MetMedium text-xs">Edit</p>
                </li>
                <li className="flex flex-row gap-2 max-sm:basis-[48%] ">
                  <Image src={bin} alt="icons" className="object-contain" />
                  <p className="text-darkGray font-MetMedium text-xs">Delete</p>
                </li>
                <li className="flex flex-row gap-2 max-sm:basis-[48%] ">
                  <Image src={more} alt="icons" className="object-contain" />
                  <p className="text-darkGray font-MetMedium text-xs">More</p>
                </li>
              </ul>
            </div>
            <div className="md:h-full md:pl-4 max-md:flex max-sm:flex-col max-sm:flex-nowrap max-md:flex-wrap max-md:justify-between">
              <div className="py-2 sm:pb-4 md:border-b-[1px] border-[#f1f1f1] max-md:basis-[48%] max-md:flex max-md:flex-col">
                <p className="text-[#6C6B6B] font-MetBold text-xs mb-2 leading-[150%] capitalize">
                  Type
                </p>
                <div className="relative">
                  <button
                    type="button"
                    onClick={toggleDropdown}
                    className="flex justify-between bg-slightPurple p-[8px_12px] rounded-lg h-[36px] w-full"
                  >
                    <div className="flex flex-rowv items-center gap-[5px]">
                      <Image
                        src={notesBlue}
                        alt="notesBlue"
                        className="object-contain w-4 h-4"
                      />
                      <p className="font-MetSemiBold text-brightBlue text-[10px]">
                        Note
                      </p>
                    </div>
                    <Image
                      src={arrowUp}
                      alt="arrowUp"
                      className={`object-contain transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  {isDropdownOpen && (
                    <div className="absolute z-[2] mt-1 bg-white border border-[#f1f1f1] rounded-lg shadow-lg w-full">
                      <ul className="p-2">
                        <li className="py-1 text-darkGray text-xs font-MetRegular px-2 hover:bg-gray-200 cursor-pointer">
                          Note
                        </li>
                        <li className="py-1 text-darkGray text-xs font-MetRegular px-2 hover:bg-gray-200 cursor-pointer">
                          Reminder
                        </li>
                        <li className="py-1 text-darkGray text-xs font-MetRegular px-2 hover:bg-gray-200 cursor-pointer">
                          Task
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              {/* ------ due date ------ */}
              <div className="py-2 sm:pb-4 md:border-b-[1px] border-[#f1f1f1] max-md:basis-[48%] max-md:flex max-md:flex-col">
                <p className="text-[#6C6B6B] font-MetBold text-xs mb-2 leading-[150%] capitalize">
                  Due Date
                </p>
                <div className="flex flex-row gap-[5px] items-center">
                  <Image
                    src={calenderBlue}
                    alt="calendarBlue"
                    className="object-contain w-4 h-4"
                  />
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd MMM yyyy"
                    customInput={
                      <p className="font-MetMedium text-[#6C6B6B] text-xs leading-[150%] cursor-pointer">
                        {selectedDate.toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    }
                  />
                </div>
              </div>
              {/* --------- time -------- */}
              <div className="py-2 sm:py-4 md:border-b-[1px] border-[#f1f1f1] max-md:basis-[48%] max-md:flex max-md:flex-col">
                <p className="text-[#6C6B6B] font-MetBold text-xs mb-2 leading-[150%] capitalize">
                  Time
                </p>
                <div className="only-time notesFilter-modal">
                  <TimePicker
                    onChange={handleTimeChange}
                    value={time}
                    clearIcon={null}
                    format="hh:mm a"
                    disableClock={false}
                    className="font-MetMedium text-[#6C6B6B] text-xs leading-[150%] cursor-pointer"
                  />
                </div>
              </div>
              {/* -------- projects ------- */}
              <div className="py-2 sm:py-4 md:border-b-[1px] border-[#f1f1f1] max-md:basis-[48%] max-md:flex max-md:flex-col">
                <p className="text-[#6C6B6B] font-MetBold text-xs mb-2 leading-[150%] capitalize">
                  Projects
                </p>
                <div className="flex flex-wrap gap-2 items-center">
                  <p className="font-MetSemiBold bg-[#E4EAF9] p-2 rounded-lg text-darkGray text-[10px] w-20 text-center capitalize">
                    Urgent
                  </p>
                  <p className="font-MetSemiBold bg-[#E4EAF9] p-2 rounded-lg text-darkGray text-[10px] w-20 text-center capitalize">
                    Finance
                  </p>
                  <p className="font-MetSemiBold bg-[#E4EAF9] p-2 rounded-lg text-darkGray text-[10px] w-20 text-center capitalize">
                    School
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* ------ add button ------ */}
      <div className="w-10 h-10 md:w-14 md:h-14 lg:w-[72px] lg:h-[72px] bg-brightBlue hover:bg-brightBlue/80 rounded-full shadow-[0px_4px_4px_0px_#00000025] flex justify-center items-center absolute z-10 bottom-[6px] right-6">
        <Add />
      </div>
    </div>
  );
};

const categories = [
  "Avia",
  "Google",
  "Personal",
  "Default",
  "Meeting",
  "Research",
  "Finance",
  "Design",
];

const notesData = [
  {
    title: "Meeting Agenda",
    content: [
      "Lorem ipsum dolor sit amet",
      "Tristique egestas hac platea ullamcorper egesta",
      "pellentesque blandit mauris. Er",
      "Tristique donec bibendum egestas blandit nisi tortor at odio",
      "suscipit metus nisl.",
      "Sit vitae ultricies id egestas diam",
    ],
    category: "Meeting",
  },
  {
    title: "Research Findings",
    content: [
      "Lorem ipsum dolor sit amet consectetur. Habitasse pretium leo tincidunt mauris",
    ],
    category: "Research",
  },
  {
    title: "To-Do List",
    content: [
      "Lorem ipsum dolor sit amet consectetur. Habitasse pretium leo tincidunt mauris",
      "Lorem ipsum dolor sit amet consectetur. Habitasse pretium leo tincidunt mauris",
    ],
    category: "Meeting",
  },
  {
    title: "Design Mockups",
    content: [
      "Lorem ipsum dolor sit amet consectetur. Habitasse pretium leo tincidunt mauris",
    ],
    category: "Design",
  },
  {
    title: "Budget Proposal",
    content: [
      "Lorem ipsum dolor sit amet consectetur. Habitasse pretium leo tincidunt mauris",
      "Lorem ipsum dolor sit amet consectetur. Habitasse pretium leo tincidunt mauris",
    ],
    category: "Finance",
  },
  {
    title: "Meeting Agenda",
    content: [
      "Lorem ipsum dolor sit amet",
      "Tristique egestas hac platea ullamcorper egesta",
      "pellentesque blandit mauris. Er",
      "Tristique donec bibendum egestas blandit nisi tortor at odio",
      "suscipit metus nisl.",
      "Sit vitae ultricies id egestas diam",
    ],
    category: "Meeting",
  },
];

const Left = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
      >
        <path
          d="M5.19391 9.47332C5.2564 9.41135 5.306 9.33761 5.33984 9.25637C5.37369 9.17513 5.39111 9.088 5.39111 8.99999C5.39111 8.91198 5.37369 8.82484 5.33984 8.7436C5.306 8.66236 5.2564 8.58863 5.19391 8.52666L2.14058 5.47332C2.0781 5.41135 2.0285 5.33761 1.99465 5.25637C1.96081 5.17513 1.94338 5.088 1.94338 4.99999C1.94338 4.91198 1.96081 4.82484 1.99465 4.7436C2.0285 4.66237 2.0781 4.58863 2.14058 4.52666L5.19391 1.47332C5.2564 1.41135 5.306 1.33761 5.33984 1.25637C5.37369 1.17513 5.39111 1.088 5.39111 0.999989C5.39111 0.911981 5.37369 0.824844 5.33984 0.743605C5.306 0.662365 5.2564 0.588631 5.19391 0.526656C5.06901 0.402489 4.90004 0.332794 4.72391 0.332794C4.54779 0.332794 4.37882 0.402489 4.25391 0.526656L1.19391 3.58666C0.81938 3.96166 0.609007 4.46999 0.609007 4.99999C0.609007 5.52999 0.81938 6.03832 1.19391 6.41332L4.25391 9.47332C4.37882 9.59749 4.54779 9.66718 4.72391 9.66718C4.90004 9.66718 5.06901 9.59749 5.19391 9.47332Z"
          fill="#2764FE"
        />
      </svg>
    </>
  );
};

const Right = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
      >
        <path
          d="M0.806085 0.526678C0.7436 0.588654 0.694003 0.662387 0.660157 0.743626C0.626312 0.824865 0.608886 0.912003 0.608886 1.00001C0.608886 1.08802 0.626312 1.17516 0.660157 1.2564C0.694003 1.33764 0.7436 1.41137 0.806085 1.47334L3.85942 4.52668C3.9219 4.58865 3.9715 4.66239 4.00535 4.74363C4.03919 4.82487 4.05662 4.912 4.05662 5.00001C4.05662 5.08802 4.03919 5.17516 4.00535 5.2564C3.9715 5.33763 3.9219 5.41137 3.85942 5.47334L0.806086 8.52668C0.7436 8.58865 0.694004 8.66239 0.660158 8.74363C0.626312 8.82487 0.608887 8.912 0.608887 9.00001C0.608887 9.08802 0.626312 9.17516 0.660158 9.2564C0.694004 9.33763 0.7436 9.41137 0.806086 9.47334C0.930994 9.59751 1.09996 9.66721 1.27609 9.66721C1.45221 9.66721 1.62118 9.59751 1.74609 9.47334L4.80609 6.41334C5.18062 6.03834 5.39099 5.53001 5.39099 5.00001C5.39099 4.47001 5.18062 3.96168 4.80609 3.58668L1.74609 0.526678C1.62118 0.402511 1.45221 0.332815 1.27609 0.332815C1.09996 0.332815 0.930993 0.402511 0.806085 0.526678Z"
          fill="#2764FE"
        />
      </svg>
    </>
  );
};

const Add = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 20.6241C11.3527 20.6241 10.8281 20.0995 10.8281 19.4522V4.54781C10.8281 3.90046 11.3527 3.37593 12 3.37593C12.6473 3.37593 13.1719 3.90046 13.1719 4.54781V19.4522C13.1719 20.0995 12.6473 20.6241 12 20.6241Z"
          fill="white"
        />
        <path
          d="M19.4522 13.1719H4.54785C3.90051 13.1719 3.37598 12.6473 3.37598 12C3.37598 11.3527 3.90051 10.8281 4.54785 10.8281H19.4522C20.0996 10.8281 20.6241 11.3527 20.6241 12C20.6241 12.6473 20.0996 13.1719 19.4522 13.1719Z"
          fill="white"
        />
      </svg>
    </>
  );
};
export default NotesFilter;
