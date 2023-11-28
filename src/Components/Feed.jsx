/* eslint-disable react/jsx-no-undef */
// Feed is going to be consisted of 2 parts ( side bar (left), and the video feeds on the right side)
import React,{useState, useEffect} from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos} from './'
import { Category } from '@mui/icons-material';
import { fetchFromAPI } from '../Utils/FetchFromAPI';


const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => 
    setVideos(data.items));
    },
  [selectedCategory]);
  return (
    <Stack sx={{flexDirection: {sx: "column" , md: "row"}}}
        // for medium devices and larger : row 
        //(sx: "column" -> usuallu col, for small devices: column 
        >
      <Box sx={{height: {sx: 'auto', md:"92vh"}, borderRight:"1px solid #3d3d3d", px:{sx: 0, md: 2}}}>
      <Sidebar
      selectedCategory = {selectedCategory}
      setSelectedCategory = {setSelectedCategory} 
      />
  {/*Typography: provides a limited set of type sizes that work   
     well together for a consistent layout. */}
        <Typography className='copyright' variant='body2' sx={{mt:1.5 , color:"#ffff"}}>
            Copyright 2023 AR Project
        </Typography>
      </Box>
      {/* This Box is for video feeds */}
      <Box p={2} sx={{overflowY: 'auto', height:"90hv", flex:2}}>
        <Typography 
        variant="h4"
        fontWeight="bold" 
        mb={2} 
        sx={{color:"#FFFF"}}>
          {selectedCategory} <span style={{color: '#F31503'}}> Videos</span>
        </Typography>
        <Videos videos={videos}></Videos>
      </Box>
    </Stack>
  )
}

export default Feed