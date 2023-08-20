import { Accessor, Setter, createMemo, createSignal } from "solid-js";
import CalendarModel, { IDate } from "../model/calendar";

type Color = string;

interface ICalendarDate {
  display: boolean;
  date: IDate;
  color: Color;
  outline: boolean;
  today: boolean;
  disabled: boolean;
}

type DateList = [Accessor<ICalendarDate>, Setter<ICalendarDate>][][];

class Calendar {
  protected calendar = CalendarModel();
  private days: Accessor<IDate[][]>;
  private readonly emptyDate: ICalendarDate = {
    display: false,
    date: {
      year: 0,
      month: 0,
      date: 0,
      day: 0,
    },
    color: "",
    outline: false,
    today: false,
    disabled: false
  };
  private selectedDate: [number, number] = [-1, -1]

  private dateList: DateList = [
    [], [], [], [], [], [],
  ];

  getDays: Accessor<DateList>
  private setDays: Setter<DateList>

  constructor() {
    let [getDays, setDays] = createSignal<DateList>([[], [], [], [], [], []], {equals: false});
    this.getDays = getDays
    this.setDays = setDays
    this.days = createMemo<IDate[][]>(() => 
      this.refreshDays(this.calendar.days)
    );
  }

  nextMonth() {
    // prevent future months
    let thisMonth =
      this.calendar.date.getFullYear() === new Date().getFullYear() &&
      this.calendar.date.getMonth() === new Date().getMonth();
    if (thisMonth) {
      return ;
    }
    this.calendar.nextMonth()
  }
  previousMonth() {
    this.calendar.previousMonth()
  }

  refreshDays(days: IDate[][]) {
    let thisMonth = this.calendar.date.getFullYear() === (new Date()).getFullYear()
      && this.calendar.date.getMonth() === (new Date()).getMonth()

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
            year: dateInfo.year,
            month: dateInfo.month,
            date: dateInfo.date + 1,
            day: dateInfo.day,
          },
          color: "",
          outline: false,
          today: thisMonth && dateInfo.date + 1 === new Date().getDate(),
          disabled: thisMonth && dateInfo.date + 1 > new Date().getDate()
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
      month: "short",
    }).format(d);
  }

  backToToday() {
    this.calendar.today()
  }

  toggleSelected(week: number, date: number) {
    let prev = this.getDays();
    let [selectedWeek, selectedDate] = this.selectedDate

    if (selectedDate === -1 || (week === selectedWeek && date === selectedDate)) {
      let prevDate = prev[week][date][0]()
      prev[week][date] = createSignal({
        ...prevDate,
        outline: !prevDate.outline
      })
    }
    else {
      let prevDate = prev[selectedWeek][selectedDate][0]()
      let nowDate = prev[week][date][0]()
      prev[selectedWeek][selectedDate] = createSignal<ICalendarDate>({
        ...prevDate,
        outline: false
      })
      prev[week][date] = createSignal<ICalendarDate>({
        ...nowDate,
        outline: true
      })
    }

    this.selectedDate = [week, date]
    this.setDays(prev)
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
