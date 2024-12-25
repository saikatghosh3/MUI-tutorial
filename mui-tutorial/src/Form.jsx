import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const Form = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Input change function
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Form handling
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          value={inputs.name}
          onChange={handleChange}
          placeholder="Enter your name"
          type="text"
          variant="outlined"
          sx={{ margin: "2rem" }}
        />
        <br />
        <TextField
          name="email"
          value={inputs.email}
          onChange={handleChange}
          placeholder="Enter your email"
          type="email"
          variant="outlined"
          sx={{ margin: "2rem" }}
        />
        <br />
        <TextField
          name="password"
          value={inputs.password}
          onChange={handleChange}
          placeholder="Enter your password"
          type="password"
          variant="outlined"
          sx={{ margin: "2rem" }}
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
