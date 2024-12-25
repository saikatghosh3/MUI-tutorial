import  { useState } from "react";
import { Typography, AppBar, Toolbar, Tabs, Tab } from "@mui/material";

const Nav = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          <Tabs
            sx={{ marginLeft: "auto" }}
            value={value}
            onChange={(e, val) => setValue(val)}
            textColor="inherit"
            indicatorColor="secondary"
          >
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Contact" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
