"use client";
import React, { useRef } from "react";
import Image from "next/image";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import calenderBlue from "../../../../public/img/calenderBlue.svg";
import notificationBlue from "../../../../public/img/notificationBlue.svg";
import arrowUp from "../../../../public/img/arrowUp.svg";
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
];

const CalenderView = () => {
  const calendarRef = useRef(null);

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

  return (
    <div className="flex flex-col items-center overflow-hidden h-full overflow-y-scroll overview">
      {/* Custom Toolbar */}
      <div className="flex justify-between items-center w-full mb-4">
        <div className="flex flex-row gap-2">
        <p className="text-darkGray text-base font-MetBold">October 2024</p>

          <button
            onClick={goToPrev}
            className="flex items-center justify-center h-6 w-6 bg-[#EAF0FF] text-white rounded-full shadow hover:bg-brightBlue/40 "
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
            className="flex items-center justify-center h-6 w-6 bg-[#EAF0FF] text-white rounded-full shadow hover:bg-brightBlue/40 "
          >
            <Image
              src={arrowUp}
              alt="icon"
              className="object-contain rotate-90"
            />
          </button>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-row gap-2 bg-[#EAF0FF] rounded-[80px] overflow-hidden p-1">
            <button
              onClick={() => changeView("timeGridDay")}
              className="p-[8px_20px]  bg-transparent text-brightBlue hover:text-white text-xs font-MetBold rounded-[80px] hover:bg-brightBlue"
            >
              Day
            </button>
            <button
              onClick={() => changeView("timeGridWeek")}
              className="p-[8px_20px]  bg-transparent text-brightBlue hover:text-white text-xs font-MetBold rounded-[80px] hover:bg-brightBlue"
            >
              Week
            </button>
            <button
              onClick={() => changeView("dayGridMonth")}
              className="p-[8px_20px]  bg-transparent text-brightBlue hover:text-white text-xs font-MetBold rounded-[80px] hover:bg-brightBlue"
            >
              Month
            </button>
            <button
              onClick={() => alert("Custom action")}
              className="p-[8px_20px]  bg-transparent text-brightBlue hover:text-white text-xs font-MetBold rounded-[80px] hover:bg-brightBlue"
            >
              Custom
            </button>
          </div>
            <button
              onClick={() => changeView("listMonth")}
              className="p-[8px_20px] bg-brightBlue text-white rounded-[80px] hover:text-brightBlue text-xs font-MetBold hover:bg-[#EAF0FF] flex flex-row gap-1 group items-center"
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
        headerToolbar={false} // Disable default toolbar
        events={events}
        eventContent={renderEventContent} // Custom event rendering
        height="auto" // Adjust height as per the container
      />
    </div>
  );
};

// Custom event rendering function with Tailwind
const renderEventContent = (eventInfo) => {
  const { icon } = eventInfo.event.extendedProps;
  return (
    <>
      <Image src={icon} alt="icon" className="w-4 h-4 object-contain" />
      <span>{eventInfo.event.title}</span>
    </>
  );
};

export default CalenderView;
