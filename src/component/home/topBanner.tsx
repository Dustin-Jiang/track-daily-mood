import { Typography } from "@suid/material";
import { children, type ParentComponent } from "solid-js";
import { theme } from "../../App";

const TopBanner : ParentComponent<{
  children: string
}> = (props) => {
  const ctx = children(() => props.children)
  return (
    <div style={{
      padding: "40px 20px 0px 20px"
    }}>
        <Typography
          variant="h2"
          sx={{
            color: theme().palette.text.secondary
          }}
        >
          {ctx()}
        </Typography>
    </div>
  );
}

export default TopBanner;