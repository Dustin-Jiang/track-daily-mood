import { Box, IconButton } from "@suid/material";
import { children, type Component, type JSX, type ParentComponent } from "solid-js";
import TodayButton from "./todayButton";
import { IconButtonProps } from "@suid/material/IconButton";

const Toolbar : Component = () => {
  return (
    <Box sx={{
      margin: "12px"
    }}>
      <TodayButton />
    </Box>
  )
}

const ToolbarButton : ParentComponent<{
  children: JSX.Element
} & IconButtonProps> = (props) => {
  const ctx = children(() => props.children)

  return (
    <IconButton sx={{
      aspectRatio: "1/1",
      width: "48px"
    }} onclick={props.onclick}>
      {ctx()}
    </IconButton>
  )
}

export default Toolbar;
export {
  ToolbarButton
}