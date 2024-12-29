// we can create theme later we have to connect in main.jsx file

import { createTheme } from '@mui/material/styles'
import App from './App';
import React from 'react';

export const theme = createTheme({
    palette: {
        primary: {
        main: '#f44336',
        },
        secondary: {
        main: '#3f51b5',
        },
    },
    typography: {
        fontFamily: 'Roboto',
    },
    });


    // in the main.jsx file we have to Write 
    // <React.StrictMode>
    //     <ThemeProvider theme={theme}>
    //         <App />
    //         <React.StrictMode>
    //     </ThemeProvider>

    // then it will work porperly 