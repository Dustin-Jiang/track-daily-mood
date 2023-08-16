import { Component } from "solid-js";
import Calendar from "../view/home/calendar";
import { theme } from "../App";
import TopBanner from "../component/home/topBanner";
import Toolbar from "../component/home/toolbar/toolbar";

const Home : Component = () => {
  return (
    <div style={{
      "background-color": theme().palette.background.default,
      height: "100vh"
    }}>
      <TopBanner toolbar={() => <Toolbar />}>日历</TopBanner>
      <Calendar />
    </div>
  )
}

export default Home;