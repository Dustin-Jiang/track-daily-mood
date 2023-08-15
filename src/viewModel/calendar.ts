import { Accessor, Setter, createMemo, createSignal } from "solid-js";
import CalendarModel, { IDate } from "../model/calendar";

type Color = string;

interface ICalendarDate {
  display: boolean;
  date: IDate;
  color: Color;
  outline: boolean;
  today: boolean;
}

type DateList = [Accessor<ICalendarDate>, Setter<ICalendarDate>][][];

class Calendar {
  protected calendar = CalendarModel();
  private days: Accessor<IDate[][]>;
  private readonly emptyDate = {
    display: false,
    date: {
      date: 0,
      day: 0,
    },
    color: "",
    outline: false,
    today: false,
  };

  private dateList: DateList = [
    [], [], [], [], [], [],
  ];

  getDays: Accessor<DateList>
  private setDays: Setter<DateList>

  constructor() {
    let [getDays, setDays] = createSignal<DateList>([[], [], [], [], [], []]);
    this.getDays = getDays
    this.setDays = setDays
    this.days = createMemo<IDate[][]>(() => 
      this.refreshDays(this.calendar.days)
    );
  }

  nextMonth() {
    this.calendar.nextMonth()
  }
  previousMonth() {
    this.calendar.previousMonth()
  }

  refreshDays(days: IDate[][]) {
    console.log(days)

    this.dateList = [[], [], [], [], [], []];
    let weekCount = 0;

    this.dateList.forEach((week) => {
      for (let i = 0; i < 7; i++) {
        week.push(createSignal<ICalendarDate>(this.emptyDate));
      }
    });

    days.forEach((week) => {
      week.forEach((dateInfo) => {
        this.dateList[weekCount][dateInfo.day][1]({
          display: true,
          date: {
            date: dateInfo.date + 1,
            day: dateInfo.day,
          },
          color: "",
          outline: false,
          today: false,
        });
      });

      weekCount += 1;
    });
    this.setDays([])
    this.setDays(this.dateList)

    return this.calendar.days
  }

  monthToString() {
    let d = this.calendar.date
    return new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "long",
    }).format(d);
  }
}

let calendar: Calendar
const CalendarViewModel = () => {
  if (calendar !== undefined) {
    return calendar;
  }
  calendar = new Calendar();
  return calendar;
};


export type { ICalendarDate };
export default CalendarViewModel
