import { Today } from "@suid/icons-material"
import { ToolbarButton } from "./toolbar"
import CalendarViewModel from "../../../viewModel/calendar"

const TodayButton = () => {
  const calendar = CalendarViewModel()

  return (
    <ToolbarButton onclick={
      () => {
        calendar.backToToday()
      }
    }>
      <Today />
    </ToolbarButton>
  )
}

export default TodayButton;