import React from 'react';
import { List, ListItem, ListItemText, ListItemButton } from '@mui/material';

const ListComponent = () => {
  const courses = ['react', 'nodejs', 'angular', 'viewjs'];

  return (
    <div>
      <List sx={{ width: 250, background: 'grey' }}>
        {courses.map((course, index) => (
          <ListItem key={index}>
            <ListItemButton>{'>'}</ListItemButton>
            <ListItemText primary={course} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ListComponent;
