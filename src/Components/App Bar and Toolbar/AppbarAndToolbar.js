import { AppBar, Toolbar, Button } from "@mui/material";
import React from "react";

const AppbarAndToolbar = () => {
  return (
    <div>
      <p>App Bar Section Starts Here.</p>
      <AppBar>
        <Toolbar>
          Logo
          <Button sx={{ marginLeft: 4, marginRight: 4 }} color="error">
            About Us
          </Button>
          <Button sx={{ marginRight: 4 }} color="error">
            Contact
          </Button>
          <Button sx={{ marginRight: 4 }} color="error">
            Address
          </Button>
          <Button sx={{ marginRight: 4, marginLeft: "auto" }} color="error">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppbarAndToolbar;
