import { Button, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import React, { useState } from 'react';

const DrawerMenu = () => {
  const [open, setOpen] = useState(false);
  const courses = ['react', 'nodejs', 'angular', 'viewjs', 'next.js'];

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
    </div>
  );
};

export default DrawerMenu;
