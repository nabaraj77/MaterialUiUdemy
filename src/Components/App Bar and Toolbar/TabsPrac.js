import React from "react";
import { Tabs, Tab } from "@mui/material";
import { useState } from "react";

const TabsPrac = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <Tabs
        value={value}
        onChange={(e, val) => {
          return setValue(val);
        }}
      >
        <Tab color="primary" label="One" />
        <Tab color="primary" label="Two" />
        <Tab color="primary" label="Three" />
        <Tab color="primary" label="Four" />
      </Tabs>
    </div>
  );
};

export default TabsPrac;
