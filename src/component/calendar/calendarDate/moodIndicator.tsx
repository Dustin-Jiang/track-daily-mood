import { Box } from "@suid/material";
import { For, type Accessor, type Component } from "solid-js";
import { Mood, MoodTypes, moodTypes } from "../../../model/mood";
import { dark } from "../../../utils/dark";

const MoodIndicator : Component = () => {
  return (
    <Box sx={{
      position: "absolute",
      bottom: "8px"
    }}>
      <Indicator width="24px" moods={[
        "fine",
        "fine",
        "fine",
        "mild",
        "severe"
      ]} / >
    </Box>
  );
};

const Indicator : Component<{
  width: string,
  moods: MoodTypes[]
}> = (props) => {
  let indicators = countMood(props.moods)
  let moodsCount = props.moods.length
  let totalWidth = parseInt(props.width.slice(0, -2))

  return (
    <Box sx={{
      width: props.width,
      display: "flex"
    }}>
      <For each={moodTypes}>
        {(moodType) => {
          if (!(moodType in indicators)) {
            return ;
          }
          return (
            <Box
              sx={{
                height: "4px",
                borderRadius: "2px",
                width: totalWidth / moodsCount * indicators[moodType].count,
                background: indicators[moodType].backgroundColor,
                margin: "1px",
                minWidth: "4px"
              }}
            ></Box>
          );
        }}
      </For>
    </Box>
  );
};

const countMood = (moods: MoodTypes[]) => {
  type IndicatorProps = Partial<{
    [k in MoodTypes]: {
      backgroundColor: string,
      count: number
    }
  }>

  let result: IndicatorProps = {}
  moods.forEach((mood) => {
    result[mood] = {
      backgroundColor: Mood[dark() ? "dark" : "light"][mood].main,
      count: (result) ? (result[mood]) ? result[mood].count + 1 : 1 : 1
    }
  })

  return result
}

export default MoodIndicator