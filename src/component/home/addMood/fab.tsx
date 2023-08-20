import type { Component } from "solid-js";
import { Fab as FabBase } from "@suid/material";
import { Add } from "@suid/icons-material";

const Fab : Component = () => {
  return (<>
    <FabBase color="secondary" sx={{
      borderRadius: "18px",
      aspectRatio: "1/1",
      margin: "32px 24px",
      position: "absolute",
      bottom: "0px",
      right: "0px"
    }}>
      <Add />
    </FabBase>
  </>)
}

export default Fab;