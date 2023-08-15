import { Component, For, createEffect } from "solid-js";
import CalendarDate from "../../component/calendar/calendarDate/calendarDate";
import CalendarViewModel from "../../viewModel/calendar";
import MonthController from "../../component/calendar/monthController/monthController";

const Calendar : Component = () => {
  const calendar = CalendarViewModel()

  return (
    <div style={{
      padding: "0 20px"
    }}>
      <MonthController />
      <For each={calendar.getDays()}>
        {(week) => {
          return (
            <div
              style={{
                display: "flex",
                "justify-content": "center",
              }}
            >
              <For each={week}>
                {(date) => {
                  return <CalendarDate config={date} />;
                }}
              </For>
            </div>
          );
        }}
      </For>
    </div>
  );
}

export default Calendar;