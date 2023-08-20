import { Button } from "@suid/material";
import { Accessor, Component, Setter, createEffect, createSignal } from "solid-js";
import CalendarViewModel, { ICalendarDate } from "../../../viewModel/calendar";
import { desktop, largeMobile } from "../../../utils/responsive";
import MoodIndicator from "./moodIndicator";

type CalendarConfig = [Accessor<ICalendarDate>, Setter<ICalendarDate>]

const calendar = CalendarViewModel()

const CalendarDate : Component<{
  config: CalendarConfig,
  week: number,
  date: number
}> = (props) => {
  let [options, setOptions] = createSignal(props.config[0]())
  createEffect(() => {
    setOptions(props.config[0]())
  })

  return (
    <Button
      sx={{
        aspectRatio: "1/1",
        visibility: options().display ? "visible" : "hidden",
        borderRadius: "18px",
        margin: desktop() ? "8px" : (largeMobile() ? "4px" : "0"),
        width: desktop() ? "64px" : (largeMobile() ? "56px" : "48px"),
        minWidth: desktop() ? "64px" : (largeMobile() ? "56px" : "48px"),
        fontSize: "1rem"
      }}
      variant={getVariant(options())}
      onclick={() =>
        calendar.toggleSelected(props.week, props.date)
      }
      disabled={options().disabled}
    >
      {options().date.date}
      <MoodIndicator />
    </Button>
  );
}

const getVariant = (config: ICalendarDate) => {
  if (config.today) {
    return "contained";
  }
  if (config.outline) {
    return "outlined"
  }
  return "text"
}

export default CalendarDate;