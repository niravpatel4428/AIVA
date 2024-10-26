"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import calenderBlue from "../../../../public/img/calenderBlue.svg";
import notificationBlue from "../../../../public/img/notificationBlue.svg";
import arrowUp from "../../../../public/img/arrowUp.svg";
import CustomBtnRangeCalender from "./CustomBtnRangeCalender";
// Events data
const events = [
  {
    title: "Attend Jay’s School Event",
    start: "2024-10-09",
    extendedProps: {
      icon: calenderBlue,
    },
  },
  {
    title: "Talk to the lawyer about case",
    start: "2024-10-17",
    extendedProps: {
      icon: notificationBlue,
    },
  },
  {
    title: "Clear the laundry",
    start: "2024-10-21",
    extendedProps: {
      icon: calenderBlue,
    },
  },
  {
    title: "Upload the pending documents",
    start: "2024-10-22",
    extendedProps: {
      icon: calenderBlue,
    },
  },
  {
    title: "Attend Jay’s School Event",
    start: "2024-10-05",
    extendedProps: {
      icon: calenderBlue,
    },
  },
  {
    title: "Talk to the lawyer about case",
    start: "2024-10-31",
    extendedProps: {
      icon: notificationBlue,
    },
  },
  {
    title: "Clear the laundry",
    start: "2024-10-28",
    extendedProps: {
      icon: calenderBlue,
    },
  },
  {
    title: "Upload the pending documents",
    start: "2024-10-26",
    extendedProps: {
      icon: calenderBlue,
    },
  },
];

const CalenderView = () => {
  const calendarRef = useRef(null);
  const [showCustomCalender, setShowCustomCalender] = useState(false);
  // Functions to control the FullCalendar views and navigation
  const goToToday = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.today();
  };

  const goToPrev = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.prev();
  };

  const goToNext = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.next();
  };

  const changeView = (view) => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView(view);
  };

  const toggleCustomCalendar = () => {
    setShowCustomCalender((prev) => !prev); // Toggle visibility of the custom calendar
  };

  return (
    <div className="flex flex-col items-center overflow-hidden h-full overflow-y-scroll overview">
      {/* Custom Toolbar */}
      <div className="flex max-md:flex-col max-md:gap-2 max-md:justify-center justify-between items-center w-full relative">
        <div className="flex max-lg:flex-col max-lg:justify-center lg:flex-row gap-2 lg:flex-wrap xl:flex-nowrap">
          <p className="text-darkGray text-base font-MetBold max-lg:text-center">
            October 2024
          </p>
          <div className="flex flex-row gap-2">
            <button
              onClick={goToPrev}
              className="flex items-center justify-center h-6 w-6 bg-[#EAF0FF] text-white rounded-full shadow hover:bg-brightBlue/40  "
            >
              <Image
                src={arrowUp}
                alt="icon"
                className="object-contain -rotate-90"
              />
            </button>
            <button
              onClick={goToToday}
              className="flex items-center justify-center px-3 h-6 bg-[#EAF0FF] text-xs font-MetBold text-brightBlue hover:text-white rounded-full shadow hover:bg-blue-600"
            >
              Go to today
            </button>
            <button
              onClick={goToNext}
              className="flex items-center justify-center h-6 w-6 bg-[#EAF0FF] text-white rounded-full shadow hover:bg-brightBlue/40  "
            >
              <Image
                src={arrowUp}
                alt="icon"
                className="object-contain rotate-90"
              />
            </button>
          </div>
        </div>
        <div className="flex max-md:items-center max-md:flex-col flex-row gap-2 md:gap-4 lg:flex-wrap xl:flex-nowrap max-[400px]:w-full">
          <div className="flex max-[400px]:flex-wrap flex-row gap-2 bg-[#EAF0FF] rounded-[80px] max-[400px]:px-5 max-[400px]:py-2 p-1 max-[400px]:w-full max-[400px]:items-center max-[400px]:justify-center">
            <button
              onClick={() => changeView("timeGridDay")}
              className="max-[400px]:p-[8px_8px] p-[8px_20px] relative bg-transparent text-brightBlue hover:text-white text-xs font-MetBold rounded-[80px] hover:bg-brightBlue"
            >
              Day
            </button>
            <button
              onClick={() => changeView("timeGridWeek")}
              className="max-[400px]:p-[8px_8px] p-[8px_20px] relative bg-transparent text-brightBlue hover:text-white text-xs font-MetBold rounded-[80px] hover:bg-brightBlue"
            >
              Week
            </button>
            <button
              onClick={() => changeView("dayGridMonth")}
              className="max-[400px]:p-[8px_8px] p-[8px_20px] relative bg-transparent text-brightBlue hover:text-white text-xs font-MetBold rounded-[80px] hover:bg-brightBlue"
            >
              Month
            </button>
            <div className="relative">
              <button
                onClick={toggleCustomCalendar}
                className={`max-[400px]:p-[8px_8px] p-[8px_20px] relative bg-transparent text-brightBlue hover:text-white text-xs font-MetBold rounded-[80px] ${
                  showCustomCalender && "!text-white !bg-brightBlue"
                }  hover:bg-brightBlue`}
              >
                Custom
              </button>
              {showCustomCalender && (
                <div className="absolute w-fit h-fit top-10 right-0 !z-10 max-[364px]:left-0">
                  <div className="relative w-fit h-fit block">
                    <CustomBtnRangeCalender />
                    <button
                      onClick={toggleCustomCalendar} // Close calendar button
                      className="absolute top-4 md:top-[26px] right-6 text-brightBlue"
                    >
                      <Cancle />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <button
            onClick={() => changeView("listMonth")}
            className="p-[8px_20px] bg-brightBlue text-white rounded-[80px] hover:text-brightBlue text-xs font-MetBold hover:bg-[#EAF0FF] flex flex-row gap-1 group items-center max-md:w-fit transition-all duration-300"
          >
            No Date Tasks{" "}
            <span className="p-[2px] bg-white rounded-full text-xs font-MetBold w-[18px] h-[18px] text-brightBlue group-hover:bg-brightBlue flex items-center justify-center group-hover:text-white">
              8
            </span>
          </button>
        </div>
      </div>

      {/* FullCalendar Component */}
      <FullCalendar
        ref={calendarRef} // Ref for controlling the calendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        headerToolbar={true} // Disable default toolbar
        editable={true}
        selectable={true}
        events={events}
        eventContent={renderEventContent}
        height="100%"
      />
    </div>
  );
};

// Custom event rendering function
const renderEventContent = (eventInfo) => {
  const { icon } = eventInfo.event.extendedProps;
  return (
    <div className="bg-[#E4E1FC] !rounded-[10px] py-2 px-3 flex gap-1 items-center">
      <Image src={icon} alt="icon" className="w-3 h-3 object-contain" />
      <span className="text-[10px] font-MetSemiBold text-darkGray w-[90%] overflow-hidden text-ellipsis leading-[100%]">
        {eventInfo.event.title}
      </span>
    </div>
  );
};

export default CalenderView;

const Cancle = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="14"
      viewBox="0 0 12 14"
      fill="none"
    >
      <rect
        x="0.11084"
        y="1.39185"
        width="2"
        height="16"
        rx="1"
        transform="rotate(-40 0.11084 1.39185)"
        fill="black"
      />
      <rect
        x="10.3955"
        y="0.106262"
        width="2"
        height="16"
        rx="1"
        transform="rotate(40 10.3955 0.106262)"
        fill="black"
      />
    </svg>
  );
};
