import { Button } from "@suid/material";
import { Accessor, Component, Setter, createSignal } from "solid-js";
import { ICalendarDate } from "../../../viewModel/calendar";

type CalendarConfig = [Accessor<ICalendarDate>, Setter<ICalendarDate>]

const CalendarDate : Component<{
  config: CalendarConfig
}> = (props) => {
  let [options, setOptions] = createSignal(props.config[0]())

  return (
    <Button
      sx={{
        aspectRatio: "1/1",
        visibility: options().display ? "visible" : "hidden",
        borderRadius: "18px",
        margin: "8px",
        fontSize: "1rem",
      }}
      variant={getVariant(options())}
      onclick={() =>
        setOptions({
          ...options(),
          outline: !options().outline,
        })
      }
    >
      {options().date.date}
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