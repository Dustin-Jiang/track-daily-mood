import { Component, For } from "solid-js";
import CalendarDate from "../../component/calendar/calendarDate/calendarDate";
import CalendarViewModel from "../../viewModel/calendar";
import MonthController from "../../component/calendar/monthController/monthController";

const Calendar : Component = () => {
  const calendar = CalendarViewModel()

  return (
    <div style={{
      padding: "0 16px"
    }}>
      <MonthController />
      {calendar.getDays().map(
        (week, weekIndex) => {
          return (
            <div
              style={{
                display: "flex",
                "justify-content": "center",
              }}
            >
              <For each={week}>
                {(date, dateIndex) => {
                  return <CalendarDate config={date} week={weekIndex} date={dateIndex()}/>;
                }}
              </For>
            </div>
          );
        }
      )}
    </div>
  );
}

export default Calendar;