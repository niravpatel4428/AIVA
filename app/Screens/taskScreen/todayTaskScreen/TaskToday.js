"use client";
import React, { useState } from "react";
import Image from "next/image";
import mark from "../../../../public/img/mark.svg";
import pen from "../../../../public/img/pen.svg";
import bin from "../../../../public/img/bin.svg";
import location from "../../../../public/img/location.svg";
import arrowUp from "../../../../public/img/arrowUp.svg";
import notesBlue from "../../../../public/img/notesBlue.svg";
import clockBlue from "../../../../public/img/clockBlue.svg";
import cancleBlue from "../../../../public/img/cancleBlue.svg";
import trueBlue from "../../../../public/img/trueBlue.svg";
import calenderBlue from "../../../../public/img/calenderBlue.svg";
import notificationBlue from "../../../../public/img/notificationBlue.svg";
import { taskData } from "./taskData";
import TaskComp from "./Task";
import Modal from "../../../components/Modal";
// datepicker and timepicker
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
// full calender import
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
// ____________________________________________________________

const TaskToday = () => {
  const completedTasks = taskData.filter((task) => task.completed);
  const activeTasks = taskData.filter((task) => !task.completed);
  // simpleModal
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [time, setTime] = useState("18:00");
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Editablemodal
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [selectedDate1, setSelectedDate1] = useState(new Date());
  const [time1, setTime1] = useState("18:00");
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  // simpleModal
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleTimeChange = (newTime) => setTime(newTime);
  const handleDateChange = (date) => setSelectedDate(date);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  // Editablemodal
  const handleOpenModalEdit = () => setIsModalOpenEdit(true);
  const handleCloseModalEdit = () => setIsModalOpenEdit(false);
  const handleTimeChange1 = (newTime) => setTime(newTime);
  const handleDateChange1 = (date) => setSelectedDate1(date);
  const toggleDropdown1 = () => setIsDropdownOpen1(!isDropdownOpen);
  return (
    <>
      <div className="overflow-auto md:overflow-hidden h-full overview max-md:pb-5">
        <div className="flex flex-wrap gap-3 mb-4 pt-[2px]">
          <button
            className={`text-xs font-MetSemiBold text-brightBlue bg-[#2764fe1a] hover:bg-[#2764fe37] transition-all duration-300 p-[8px_16px] rounded capitalize border-none focus:!outline-none outline-0 ring-0 ring-none `}
          >
            All
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`text-xs font-MetSemiBold text-brightBlue bg-[#2764fe1a] hover:bg-[#2764fe37] transition-all duration-300 p-[8px_16px] rounded capitalize border-none focus:!outline-none outline-0 ring-0 ring-none `}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:h-full">
          {/* ----------- Tasks ------------ */}
          <div className="w-full md:w-[49%] flex flex-col gap-4 overflow-y-scroll overview md:pb-[200px]">
            <div className="flex flex-row items-center gap-2">
              <Image
                src={notesBlue}
                alt="notes"
                className="object-contain w-5 h-5"
              />
              <p className="text-darkGray text-lg font-MetBold">Tasks (4)</p>
            </div>
            {/* ------- task list ------- */}
            <div className="flex flex-col gap-2">
              {activeTasks.map((task) => (
                <TaskComp
                  key={task.id}
                  task={task}
                  onClick={() => handleOpenModal()}
                />
              ))}
            </div>
            {/* ------- completed list ------- */}
            <p className="text-darkGray text-lg font-MetBold">Completed (2)</p>
            <div className="flex flex-col gap-2">
              {completedTasks.map((task) => (
                <TaskComp
                  key={task.id}
                  task={task}
                  onClick={() => handleOpenModal()}
                />
              ))}
            </div>
          </div>
          {/* ----------- Appointments ------------ */}
          <div className="w-full md:w-[49%]">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center gap-2">
                <NotiFicationBlue />
                <p className="text-darkGray text-lg font-MetBold">
                  Appointments (2)
                </p>
              </div>
              <div className="relative rounded-2xl bg-white">
                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  initialView="timeGridDay"
                  events={events}
                  eventContent={renderEventContent} // Using custom content renderer
                  editable={true}
                  selectable={true}
                  headerToolbar={{
                    left: "",
                    center: "",
                    right: "",
                  }}
                  dayHeaderContent={(args) => {
                    const dayName = args.text; // FullCalendar will provide the day name here
                    const dateNumber = args.date.getDate(); // Get the numeric date from the args.date object

                    return (
                      <>
                        <div className="flex flex-col gap-2 items-start">
                          <p className="text-xs font-MetBold text-darkGray/50">
                            {dayName}
                          </p>
                          <span className="font-MetBold text-xs text-white bg-brightBlue rounded-full w-6 h-6 flex items-center justify-center">
                            {dateNumber}
                          </span>
                        </div>
                      </>
                    );
                  }}
                />
              </div>
            </div>
            {/* <div className=""></div> */}
          </div>
        </div>
        {/* ------ modal ------- */}
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <div className="md:flex md:flex-col h-full">
            <div className="flex justify-between w-full max-w-[636px] mb-3 sm:mb-7 max-md:pr-10 max-sm:items-start">
              <h2 className="text-darkGray text-xl font-MetBold">
                Attend Jay’s School Event
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
            <div className="md:flex max-md:gap-4 max-md:justify-end md:flex-row-reverse h-full overflow-y-scroll overview max-md:pb-52">
              <div className="md:h-full md:pl-4 max-md:flex max-sm:flex-col max-sm:flex-nowrap max-md:flex-wrap max-md:justify-between w-full  md:max-w-[205px] ">
                {/* ------ type date ------ */}
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
                    Location
                  </p>
                  <div className="flex flex-row gap-[5px] items-center">
                    <Image
                      src={location}
                      alt="location"
                      className="object-contain w-4 h-4"
                    />
                    <p className="font-MetMedium text-[#6C6B6B] text-xs leading-[150%] cursor-pointer">
                      Samson Street
                    </p>
                  </div>
                </div>
                {/* -------- projects ------- */}
                <div className="py-2 sm:py-4 md:border-b-[1px] border-[#f1f1f1] max-md:basis-[48%] max-md:flex max-md:flex-col">
                  <p className="text-[#6C6B6B] font-MetBold text-xs mb-2 leading-[150%] capitalize">
                    Projects
                  </p>
                  <div className="flex flex-wrap gap-2 items-center">
                    <p className="font-MetSemiBold bg-[#E4EAF9] p-2 rounded-lg text-darkGray text-[10px] w-20 text-center capitalize">
                      Finance
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-[451px] pr-6 md:border-r-[1px] border-[#dfdfdf]">
                <p className="text-[#6C6B6B] font-MetRegular text-sm leading-[150%]">
                  Lorem ipsum dolor sit amet consectetur. Habitasse pretium leo
                  tincidunt mauris
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
                    <p className="text-darkGray font-MetMedium text-xs">
                      Delete
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Modal>
        {/* ------ edit modal ------- */}
        <Modal isOpen={isModalOpenEdit} onClose={handleCloseModalEdit}>
          <div className="flex flex-col h-full">
            <div className="flex justify-between w-full max-w-[636px] mb-3 sm:mb-7 max-md:pr-10 items-start max-md:flex-col max-md:gap-5">
              <div className="reltive flex flex-col gap-2 w-full max-w-[400px]">
                <input
                  type="text"
                  value="Attend Jay's School Event"
                  className="text-darkGray text-xl font-MetBold p-[8px_17px] border border-[#DFDFDF] rounded-lg bg-white focus:outline-none "
                />
                <div className="flex flex-row gap-2">
                  <div className="w-6 h-6 rounded-full flex justify-center items-center bg-[#EAF0FF]">
                    <Image
                      src={cancleBlue}
                      alt="cancleBlue"
                      className="object-contain"
                    />
                  </div>
                  <div className="w-6 h-6 rounded-full flex justify-center items-center bg-brightBlue">
                    <Image
                      src={trueBlue}
                      alt="trueBlue"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="relative flex flex-row items-center">
                <button className="bg-[#EAF0FF] w-6 h-6 rounded-full flex justify-center items-center border-none focus:border-none focus:outline-none opacity-40 hover:opacity-100 mr-2">
                  <Left />
                </button>
                <button className="bg-[#EAF0FF] w-6 h-6 rounded-full flex justify-center items-center border-none focus:border-none focus:outline-none opacity-40 hover:opacity-100">
                  <Right />
                </button>
                <div className="w-[1px] h-4 bg-[#dfdfdf] mx-[11px] max-md:hidden"></div>
              </div>
            </div>
            {/* ----------- modal header finished ----------- */}
            <div className="md:flex max-md:gap-4 max-md:justify-end md:flex-row-reverse h-full overflow-y-scroll overview max-md:pb-52">
              <div className="md:h-full md:pl-4 max-md:flex max-sm:flex-col max-sm:flex-nowrap max-md:flex-wrap max-md:justify-between w-full  md:max-w-[205px] ">
                {/* ------ type date ------ */}
                <div className="py-2 sm:pb-4 md:border-b-[1px] border-[#f1f1f1] max-md:basis-[48%] max-md:flex max-md:flex-col">
                  <p className="text-[#6C6B6B] font-MetBold text-xs mb-2 leading-[150%] capitalize">
                    Type
                  </p>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={toggleDropdown1}
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
                          isDropdownOpen1 ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown */}
                    {isDropdownOpen1 && (
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
                      selected={selectedDate1}
                      onChange={handleDateChange1}
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
                      onChange={handleTimeChange1}
                      value={time1}
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
                    Location
                  </p>
                  <div className="flex flex-row gap-[5px] items-center">
                    <Image
                      src={location}
                      alt="location"
                      className="object-contain w-4 h-4"
                    />
                    <p className="font-MetMedium text-[#6C6B6B] text-xs leading-[150%] cursor-pointer">
                      Samson Street
                    </p>
                  </div>
                </div>
                {/* -------- projects ------- */}
                <div className="py-2 sm:py-4 md:border-b-[1px] border-[#f1f1f1] max-md:basis-[48%] max-md:flex max-md:flex-col">
                  <p className="text-[#6C6B6B] font-MetBold text-xs mb-2 leading-[150%] capitalize">
                    Projects
                  </p>
                  <div className="flex flex-wrap gap-2 items-center">
                    <p className="font-MetSemiBold bg-[#E4EAF9] p-2 rounded-lg text-darkGray text-[10px] w-20 text-center capitalize">
                      Finance
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-[451px] pr-6 md:border-r-[1px] border-[#dfdfdf]">
                <p className="text-[#6C6B6B] font-MetRegular text-sm leading-[150%]">
                  Lorem ipsum dolor sit amet consectetur. Habitasse pretium leo
                  tincidunt mauris
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
                    <p className="text-darkGray font-MetMedium text-xs">
                      Delete
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Modal>
        {/* ------- add button -------- */}
        <button
          onClick={handleOpenModalEdit}
          className="w-10 h-10 md:w-14 md:h-14 lg:w-[72px] lg:h-[72px] focus:border-none focus:outline-none bg-brightBlue hover:bg-brightBlue/80 rounded-full shadow-[0px_4px_4px_0px_#00000025] flex justify-center items-center absolute z-10 bottom-6 right-6"
        >
          <Add />
        </button>
      </div>
    </>
  );
};

const renderEventContent = (eventInfo) => {
  const { icon } = eventInfo.event.extendedProps;

  // Debug the event info to ensure it's correctly being passed
  console.log("Event Info: ", eventInfo);

  return (
    <div className="bg-[#E4E1FC] rounded-lg py-2 px-3 flex gap-1 items-center">
      <Image src={icon} alt="icon" className="w-3 h-3 object-contain" />
      <span className="text-[10px] font-MetSemiBold text-darkGray w-[90%] overflow-hidden text-ellipsis leading-[100%]">
        {eventInfo.event.title}
      </span>
    </div>
  );
};

const events = [
  {
    title: "Talk to the lawyer about case",
    start: "2024-10-24T09:00:00", // Adding specific time for accuracy
    extendedProps: {
      icon: notificationBlue, // Ensure the icon path is correct
    },
  },
  {
    title: "Driving Training",
    start: "2024-10-24T11:00:00", // Adding specific time for accuracy
    extendedProps: {
      icon: notificationBlue, // Ensure the icon path is correct
    },
  },
];

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

const NotiFicationBlue = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.6553 16.6274C7.91274 16.3974 8.30784 16.4197 8.53779 16.6772C9.37579 17.6153 10.6235 17.6066 11.456 16.6767C11.6862 16.4194 12.0814 16.3976 12.3385 16.6278C12.5957 16.8581 12.6175 17.2532 12.3873 17.5104C11.0628 18.9899 8.94538 19.0098 7.60554 17.5098C7.37559 17.2524 7.39787 16.8573 7.6553 16.6274Z"
          fill="#405FBA"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.46682 3.66157C6.43468 2.41375 7.93453 1.47012 9.99677 1.47012C12.0587 1.47012 13.5584 2.41377 14.5264 3.66154C15.4791 4.88966 15.9226 6.41555 15.9226 7.65306C15.9226 8.00826 15.9118 8.27196 15.9036 8.47207C15.9019 8.51324 15.9004 8.55166 15.8989 8.58766C15.8909 8.80291 15.8925 8.90632 15.9091 9.00874C15.9468 9.24174 16.0659 9.52874 16.5421 10.5782C16.5469 10.5887 16.5514 10.5992 16.5555 10.61C16.8995 11.4954 16.8226 12.3099 16.4134 13.0001C16.0229 13.6587 15.3667 14.1437 14.6574 14.4976C13.2388 15.2052 11.3634 15.5098 9.99677 15.5098C8.62977 15.5098 6.75423 15.2052 5.33563 14.4976C4.62625 14.1437 3.96999 13.6587 3.57964 13C3.17057 12.3097 3.09382 11.4952 3.43807 10.6099C3.44224 10.5992 3.44669 10.5886 3.45144 10.5782C3.92762 9.52874 4.0468 9.24174 4.08444 9.00874C4.10099 8.90632 4.10262 8.80291 4.09457 8.58766C4.09322 8.55166 4.09165 8.51324 4.08997 8.47207C4.08177 8.27197 4.07098 8.00827 4.07098 7.65306C4.07098 6.41561 4.51419 4.88972 5.46682 3.66157ZM6.45452 4.42768C5.68055 5.42552 5.32098 6.6786 5.32098 7.65306C5.32098 7.98064 5.33063 8.21729 5.33876 8.41649C5.34052 8.45957 5.3422 8.50082 5.3437 8.54091C5.35199 8.76249 5.35635 8.97341 5.31844 9.20807C5.24802 9.64399 5.03392 10.1158 4.60561 11.0597L4.59725 11.0781C4.38985 11.622 4.45638 12.0276 4.65498 12.3627C4.87416 12.7326 5.29429 13.08 5.89363 13.379C7.0925 13.9771 8.76386 14.2598 9.99677 14.2598C11.2293 14.2598 12.9004 13.9771 14.0994 13.379C14.6987 13.08 15.1189 12.7325 15.3382 12.3627C15.5369 12.0274 15.6034 11.6218 15.3963 11.078L15.3879 11.0597C14.9596 10.1158 14.7455 9.64399 14.6751 9.20807C14.6372 8.97341 14.6416 8.76249 14.6499 8.54091C14.6514 8.50082 14.653 8.45957 14.6548 8.41649C14.6629 8.2173 14.6726 7.98065 14.6726 7.65306C14.6726 6.67866 14.3129 5.42558 13.5388 4.42772C12.7799 3.44949 11.6294 2.72012 9.99677 2.72012C8.36377 2.72012 7.21323 3.44951 6.45452 4.42768Z"
          fill="#405FBA"
        />
      </svg>
    </>
  );
};

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

export default TaskToday;

