import { Alert, Button, CircularProgress, Drawer, LinearProgress, List, ListItemButton, ListItemText, Rating, Snackbar, Typography } from '@mui/material';
import React, { useState } from 'react';

const DrawerMenu = () => {
  const [open, setOpen] = useState(false);
  const courses = ['react', 'nodejs', 'angular', 'viewjs', 'next.js'];
  const [value, setValue] = useState();

  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {courses.map((course, index) => (
            <ListItemButton key={index} onClick={() => setOpen(false)}>
              <ListItemText primary={course} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <br/>
      <br/>
      <Snackbar open={true} autoHideDuration={2000}>
        <Alert severity='success' >This is an important Message</Alert>
      </Snackbar>
      <br />
      <CircularProgress color='secondary' value={75} />
      <br />
      <LinearProgress  />
 
 <br />
    <Rating value={value} onChange={(e, Val) => setValue(Val) }
    size='large'
    precision={0.5} />
        <Typography>Rated {value !== undefined ? value : 0 } stars</Typography>

    </div>
  );
};

export default DrawerMenu;
