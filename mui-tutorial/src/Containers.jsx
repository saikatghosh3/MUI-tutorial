import React from 'react'
import{Container, Typography} from '@mui/material';
const Containers = () => {
  return (
    <div>
      <Container sx={{background:'yellow'}} maxWidth="xs">

        <Typography variant="body2">
          This is xs Container
        </Typography>
      </Container>
      <br />
      <Container sx={{background:'yellow'}} maxWidth="md">

        <Typography variant="body2">
          This is sm Container
        </Typography>
      </Container>
      <br />
      <Container sx={{background:'yellow'}} maxWidth="lg">

        <Typography variant="body2">
          This is lg Container
        </Typography>
      </Container>
      <br />
      <Container sx={{background:'yellow'}} maxWidth="xl">

        <Typography variant="body2">
          This is xl Container
        </Typography>
      </Container>
      
    </div>
  )
}

export default Containers
