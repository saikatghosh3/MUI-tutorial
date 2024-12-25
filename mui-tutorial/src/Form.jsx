import React, { useState } from "react";
import {
  TextField,
  Button,
  FormGroup,
  Select,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const Form = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    gender: "male", // default value
    courses: "",
    termsAccepted: true, // for the checkbox
  });

  // Input change function
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
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
        {/* Name Field */}
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
        
        {/* Email Field */}
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
        
        {/* Password Field */}
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

        {/* Terms and Conditions Checkbox */}
        <FormGroup sx={{ margin: "2rem" }}>
          <FormControlLabel
            label="I agree T&C"
            control={
              <Checkbox
                name="termsAccepted"
                checked={inputs.termsAccepted}
                onChange={handleChange}
              />
            }
          />
        </FormGroup>
        <br />
        
        {/* Courses Select Dropdown */}
        <FormControl fullWidth sx={{ margin: "2rem" }}>
          <InputLabel id="courses-label">Courses</InputLabel>
          <Select
            labelId="courses-label"
            id="courses"
            value={inputs.courses}
            onChange={handleChange}
            name="courses"
          >
            <MenuItem value="mongodb">MongoDB</MenuItem>
            <MenuItem value="express">Express.js</MenuItem>
            <MenuItem value="nodejs">Node.js</MenuItem>
            <MenuItem value="react">React</MenuItem>
            <MenuItem value="typescript">TypeScript</MenuItem>
          </Select>
        </FormControl>
        <br />
        
        {/* Gender Radio Group */}
        <FormControl sx={{ margin: "2rem" }}>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            name="gender"
            value={inputs.gender}
            onChange={handleChange}
          >
            <FormControlLabel value="male" label="Male" control={<Radio />} />
            <FormControlLabel value="female" label="Female" control={<Radio />} />
            <FormControlLabel value="other" label="Other" control={<Radio />} />
          </RadioGroup>
        </FormControl>
        <br />
        
        {/* Submit Button */}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
