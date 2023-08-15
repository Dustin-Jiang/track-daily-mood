import { KeyboardArrowLeft, KeyboardArrowRight } from "@suid/icons-material";
import { IconButton, Typography } from "@suid/material";
import type { Component } from "solid-js";
import CalendarViewModel from "../../../viewModel/calendar";
import { theme } from "../../../App";

const calendar = CalendarViewModel()

const MonthController : Component = () => {
  return (
    <div style={{
      display: "flex",
      "align-items": "center",
      color: theme().palette.text.secondary
    }}>
      <IconButton onclick={() => calendar.previousMonth()}>
        <KeyboardArrowLeft sx={{ color: theme().palette.text.secondary }} />
      </IconButton>
      <Typography sx={{ width: "132px", textAlign: "center", margin: "0 4px" }}>
        {calendar.monthToString()}
      </Typography>
      <IconButton onclick={() => calendar.nextMonth()}>
        <KeyboardArrowRight sx={{ color: theme().palette.text.secondary }} />
      </IconButton>
    </div>
  );
}

export default MonthController;