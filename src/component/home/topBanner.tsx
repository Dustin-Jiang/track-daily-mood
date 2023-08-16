import { Box, Typography } from "@suid/material";
import { Accessor, children, JSX, type ParentComponent } from "solid-js";
import { theme } from "../../App";
import { largeMobile } from "../../utils/responsive";

const TopBanner : ParentComponent<{
  children: string,
  toolbar?: Accessor<JSX.Element>
}> = (props) => {
  const ctx = children(() => props.children)
  const toolbar = children(props.toolbar)
  return (
    <div style={{
      padding: "48px 16px 0px 16px"
    }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: largeMobile() ? "3.5rem" : "3rem",
            color: theme().palette.text.secondary
          }}
        >
          {ctx()}
        </Typography>
        <Box sx={{
          position: "fixed",
          right: "0px",
          top: "0px"
        }}>
          {toolbar()}
        </Box>
    </div>
  );
}

export default TopBanner;