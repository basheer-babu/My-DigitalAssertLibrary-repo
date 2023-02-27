import React from 'react'
import ReactDOM from "react-dom";


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, AvatarGroup, Button, CardActionArea, CardActions, Divider, Stack, styled } from '@mui/material';
const faces = [
    "http://i.pravatar.cc/300?img=1",
    "http://i.pravatar.cc/300?img=2",
    "http://i.pravatar.cc/300?img=3",
    "http://i.pravatar.cc/300?img=4"
  ];

  
function ProjectCard({ classes }) {
  return (
    <div className='d-flex justify-content-center'>
    <Card sx={{ maxWidth: 345, ':hover':{boxShadow: 20} }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <hr/>
       
      </CardContent>
      <Button size="small" color="primary">
        link
      </Button>
      
    </CardActionArea>
    <CardActions>
    <Stack direction="row" spacing={1}>
        {/* <AvatarGroup> */}
          {faces.map(face => (
            <Avatar key={face} src={face} />
          ))}
          {/* </AvatarGroup> */}
          </Stack>
          <div >
      
      </div>
    </CardActions>
  </Card>
  </div>
  )
}

export default ProjectCard