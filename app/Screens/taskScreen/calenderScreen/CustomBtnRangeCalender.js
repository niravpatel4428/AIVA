"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomBtnRangeCalender = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const setRange = (rangeType) => {
    const today = new Date();
    switch (rangeType) {
      case "Today":
        setStartDate(today);
        setEndDate(null);
        break;
      case "Yesterday":
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        setStartDate(yesterday);
        setEndDate(yesterday);
        break;
      case "Last week":
        const startOfLastWeek = new Date(today);
        startOfLastWeek.setDate(today.getDate() - today.getDay() - 7);
        const endOfLastWeek = new Date(startOfLastWeek);
        endOfLastWeek.setDate(startOfLastWeek.getDate() + 6);
        setStartDate(startOfLastWeek);
        setEndDate(endOfLastWeek);
        break;
      case "Last month":
        const startOfLastMonth = new Date(
          today.getFullYear(),
          today.getMonth() - 1,
          1
        );
        const endOfLastMonth = new Date(
          today.getFullYear(),
          today.getMonth(),
          0
        );
        setStartDate(startOfLastMonth);
        setEndDate(endOfLastMonth);
        break;
      case "Last quarter":
        const quarterStartMonth = today.getMonth() - (today.getMonth() % 3) - 3;
        const startOfLastQuarter = new Date(
          today.getFullYear(),
          quarterStartMonth,
          1
        );
        const endOfLastQuarter = new Date(
          today.getFullYear(),
          quarterStartMonth + 3,
          0
        );
        setStartDate(startOfLastQuarter);
        setEndDate(endOfLastQuarter);
        break;
      default:
        break;
    }
  };

  const resetDates = () => {
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-8 xl:gap-11 rounded-lg shadow-xl w-fit py-2 px-2 md:py-4 md:px-3 bg-white custom-date-range-picker">
      {/* Sidebar with date range options */}
      <div className="flex max-md:mt-7 max-md:flex-wrap md:flex-col">
        {["Today", "Yesterday", "Last week", "Last month", "Last quarter"].map(
          (range) => (
            <button
              key={range}
              onClick={() => setRange(range)}
              className="text-left text-[#293050] text-[13px] md:text-base font-MetRegular leading-[125%] py-2 px-3 rounded md:whitespace-nowrap"
            >
              {range}
            </button>
          )
        )}
        <button
          onClick={resetDates}
          className="mt-auto py-2 px-3 text-left text-brightBlue text-[13px] md:text-base font-MetRegular leading-[125%]"
        >
          Reset
        </button>
      </div>

      {/* Datepicker for custom range */}
      <div>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
        />
      </div>
    </div>
  );
};

export default CustomBtnRangeCalender;
