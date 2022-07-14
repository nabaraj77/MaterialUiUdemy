import React from "react";
import { TextField, Button, Checkbox } from "@mui/material";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const initialData = {
  name: "",
  email: "",
  password: "",
  subscribe: false,
};

const FormHandlingWithTextField = () => {
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState(initialData);

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputs.name === "" || inputs.email === "") {
      toast.error("Please Fill the Form Correctly");
    } else {
      setData([...data, inputs]);
      console.log(inputs);

      toast.success("Form Submitted Successfully");

      setInputs(initialData);
    }
  };

  const inputHandler = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
        subscribe: e.target.checked,
      };
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <TextField
          value={inputs.name}
          name="name"
          sx={{ margin: 3 }}
          label="Enter Name"
          variant="standard"
          onChange={inputHandler}
        />
        <TextField
          value={inputs.email}
          name="email"
          sx={{ margin: 3 }}
          type="email"
          label="Email"
          variant="standard"
          onChange={inputHandler}
        />
        <TextField
          value={inputs.password}
          name="password"
          sx={{ margin: 3 }}
          type="password"
          label="Password"
          variant="standard"
          onChange={inputHandler}
        />
        <Checkbox
          onChange={inputHandler}
          name="subscribe"
          checked={inputs.subscribe}
        />
        <Button type="Submit" variant="contained" sx={{ marginLeft: 3 }}>
          Submit
        </Button>
      </form>
      <Toaster />
    </div>
  );
};

export default FormHandlingWithTextField;
