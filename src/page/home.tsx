import { Component } from "solid-js";
import Calendar from "../view/home/calendar";
import { theme } from "../App";
import TopBanner from "../component/home/topBanner";

const Home : Component = () => {
  return (
    <div style={{
      "background-color": theme().palette.background.default,
      height: "100vh"
    }}>
      <TopBanner>日历</TopBanner>
      <Calendar />
    </div>
  )
}

export default Home;