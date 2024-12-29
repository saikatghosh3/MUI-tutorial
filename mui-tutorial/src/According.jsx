import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Autocomplete, TextField } from '@mui/material'

const According = () => {
    const courses = ['react', 'nodejs', 'angular', 'viewjs', 'next.js'];
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={'>'}>

            <Typography variant='h6'>
                What is mern stack?
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem unde, voluptates laudantium rerum iste id voluptas totam blanditiis reiciendis deleniti fugit dolorum ab consequuntur.
            </Typography>
        </AccordionDetails>
      </Accordion>
  <br /> 
  <br />
      <Autocomplete sx={{width: 200}}
      options={courses}
      renderInput={(params)=>
        <TextField {...params} label= "Select a Course"/>
      }
      >

   
      </Autocomplete>
    </div>
  )
}

export default According
