import React from "react";
import { Typography } from "@mui/material";

const TypographyPrac = () => {
  return (
    <div>
      Typography Session Starts Here.
      {<hr />}
      <Typography
        align="center"
        variant="h4"
        sx={{ border: "1px solid red" }}
        color="primary"
      >
        Hello I am Typography
      </Typography>
    </div>
  );
};

export default TypographyPrac;
