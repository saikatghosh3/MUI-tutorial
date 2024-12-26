
import React from 'react';
import {Typography, Button, TextField} from '@mui/material';
import Form from './Form';
import Nav from './Nav';
import Cards from './Cards';

function App() {
 

  return (
    <>
    {/* <Typography variant='h1' sx={{color: "red"}}>Techinfo Yt</Typography> */}
      {/* <h1>MUI Tutorial </h1>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, quia.</p>
     <Button variant='contained' color='success' sx={{margin: '2rem'}}>Click Me</Button>
     <Button variant='text'>Click Me</Button>
     <Button variant='outlined' onClick={()=>alert("you clicked!")}>Click Me</Button>

<br/>
<br/>
<br/>
     <TextField type='text' placeholder="Enter your name" variant="standard" sx={{margin: "2rem"}}/>
     <TextField type='text' placeholder="Enter your name" variant="outlined" sx={{margin: "2rem"}}/>
     <TextField type='text' placeholder="Enter your name" variant="filled" sx={{margin: "2rem"}}/>
     */}
     {/* <Form/> */}
     {/* <Nav/> */}
     <Cards/>
    </>
  )
}

export default App
