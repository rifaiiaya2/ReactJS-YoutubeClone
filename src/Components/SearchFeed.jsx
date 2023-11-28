
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from './'
import { fetchFromAPI } from '../Utils/FetchFromAPI';
import { useParams } from 'react-router-dom';


const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) =>
        setVideos(data.items));
  },
    [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: 'auto', height: "90hv", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{ color: "#FFFF" }}>
        Search Result For: <span style={{ color: '#F31503' }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos}></Videos>
    </Box>
  )
}

export default SearchFeed