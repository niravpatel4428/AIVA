"use client";
import React from "react";
import Image from "next/image";
import notesBlue from "../../../../public/img/notesBlue.svg";
import notificationBlue from "../../../../public/img/notificationBlue.svg";
import tasksBlue from "../../../../public/img/tasksBlue.svg";
import { taskData } from "./taskData";
import TaskComp from "./Task";
// full calender import
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const TaskWeek = () => {
  const completedTasks = taskData.filter((task) => task.completed);
  const activeTasks = taskData.filter((task) => !task.completed);

  return (
    <>
      <div className="overflow-auto md:overflow-hidden h-full overview max-md:pb-5">
        <div className="flex flex-wrap gap-3 mb-4 pt-[2px] pl-[2px]">
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
                src={tasksBlue}
                alt="tasks"
                className="object-contain w-5 h-5"
              />
              <p className="text-darkGray text-lg font-MetBold">Tasks (4)</p>
            </div>
            {/* ------- task list ------- */}
            <div className="flex flex-col gap-2">
              {activeTasks.map((task) => (
                <TaskComp key={task.id} task={task} />
              ))}
            </div>
            {/* ------- completed list ------- */}
            <p className="text-darkGray text-lg font-MetBold">Completed (2)</p>
            <div className="flex flex-col gap-2">
              {completedTasks.map((task) => (
                <TaskComp key={task.id} task={task} />
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
                  plugins={[dayGridPlugin]}
                  initialView="dayGridWeek"
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
                  aspectRatio="1"
                  contentHeight="auto"
                  height="auto"
                  // contentHeight="auto"
                />
              </div>
            </div>
          </div>
        </div>
        <button className="w-10 h-10 md:w-14 md:h-14 lg:w-[72px] lg:h-[72px] focus:border-none focus:outline-none bg-brightBlue hover:bg-brightBlue/80 rounded-full shadow-[0px_4px_4px_0px_#00000025] flex justify-center items-center absolute z-10 bottom-6 right-6">
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
    start: "2024-10-07T09:00:00", // Adding specific time for accuracy
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

export default TaskWeek;
