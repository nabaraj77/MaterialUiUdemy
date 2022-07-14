import React from "react";
import { Typography, Button, Alert } from "@mui/material";

import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import Add from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";

import { Checkbox } from "@mui/material";

const ButtonPrac = () => {
  const [show, setShow] = useState(true);
  const plusHandler = () => {
    console.log("Plus Button Clicked");
  };

  return (
    <div>
      <Typography>Hello I am from Button Component</Typography>
      <hr />
      <Button
        variant="contained"
        href="https://github.com/nabaraj77"
        sx={{ marginRight: 3 }}
      >
        Button 1
      </Button>
      <Button variant="contained" startIcon={<AlarmOnIcon />}>
        Button 2
      </Button>
      <Button startIcon={<Add />}>Add to cart</Button>
      <Button
        variant="contained"
        onClick={plusHandler}
        sx={{
          borderRadius: "100%",
          padding: 0,
          margin: 0,
          minWidth: 20,
        }}
      >
        <Add />
      </Button>
      <Checkbox
        icon={<FavoriteBorder color="success" />}
        checkedIcon={<FavoriteIcon color="error" />}
      />
      {show && (
        <Alert
          onClose={() => {
            return setShow(false);
          }}
          severity="error"
        >
          This is an error alert — check it out!
        </Alert>
      )}
    </div>
  );
};

export default ButtonPrac;
