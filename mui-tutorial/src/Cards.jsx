import React from 'react'
import {Card, CardContent, CardMedia, CardActions, Button, Typography} from '@mui/material'

const Cards = () => {
  return (
    <div>
      <Card sx={{ maxWidth: "345px"}}>
        <CardMedia
             component={'img'}
             height={"154"}
             image='https://unsplash.com/photos/a-person-sitting-on-the-floor-0_9dFXVOZ4k'
             alt='test image' />
             <CardContent>
                <Typography gutterBottom variant='h5' component="div">
                    Web design
                </Typography>
                <Typography variant='body2'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, rem.
                
                
                </Typography>



             </CardContent>

             <CardActions>
                <Button size='small' color='primary'>Share</Button>
             </CardActions>
      </Card>
    </div>
  )
}

export default Cards
