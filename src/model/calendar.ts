import { Accessor, Setter, batch, createSignal } from "solid-js";
import { SetStoreFunction, Store, createStore } from "solid-js/store";

interface IDate {
  date: number;
  day: number;
}

class MonthlyCalendar {
  days: Store<IDate[][]>;
  private setDays: SetStoreFunction<IDate[][]>;


  private leapYear: boolean;
  private monthList: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  private dateStorage: Accessor<Date>
  private setDateStorage: Setter<Date>

  constructor(dateIncome?: Date) {
    let [days, setDays] = createStore<IDate[][]>([[], [], [], [], [], []]);
    this.days = days;
    this.setDays = setDays;

    let [date, setDate] = createSignal<Date>(dateIncome || new Date())
    this.dateStorage = date
    this.setDateStorage = setDate
    
    this.date = this.dateStorage();
  }

  private set date(d: Date) {
    this.setDateStorage(d)

    let year = d.getFullYear();
    this.leapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
    this.monthList[1] = this.leapYear ? 29 : 28;

    let weeks = 0;
    let days: IDate[] = []

    // Avoid refreshing when unfinished
    batch(() => {
      for (
        let dateIndex = 0;
        dateIndex < this.monthList[this.dateStorage().getMonth()];
        dateIndex++
      ) {
        let day = new Date(
          this.dateStorage().getFullYear(),
          this.dateStorage().getMonth(),
          dateIndex + 1 // JS Date feature
        );

        days.push({
          date: dateIndex,
          day: day.getDay(),
        });

        // New Week
        if (day.getDay() === 6) {
          this.setDays(weeks, days);

          days = [];
          weeks++;
        }
      }
      if (days.length !== 0) {
        this.setDays(weeks, days);
        weeks++;
      }
      for (weeks; weeks < 6; weeks++) {
        this.setDays(weeks, undefined);
      }
    })
  }

  get date() {
    return this.dateStorage()
  }

  today() {
    this.date = (new Date());
  }

  nextMonth() {
    let previous = this.dateStorage();
    this.date = (new Date(
      previous.getFullYear(),
      previous.getMonth() + 1
    ))
  }

  previousMonth() {
    let previous = this.dateStorage()
    this.date = (new Date(
      previous.getFullYear(),
      previous.getMonth() - 1
    ))
  }
}

let calendar : MonthlyCalendar | undefined

const CalendarModel = (date?: Date) => {
  if (calendar !== undefined) {
    return calendar
  }
  calendar = new MonthlyCalendar(date);
  return calendar;
}

export default CalendarModel;
export type {
  IDate
}