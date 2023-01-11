import { useState, useEffect } from "react";
import { Box, Typography } from '@mui/material';
import { useParams } from "react-router-dom";

import { fetchFromAPI } from '../utils/fetchFromAPI'; /*We want to call this as soon as it loads, because we want to immediately fetch the data */

import { Videos } from './';

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]); /* Because of this dependency array the function is going to be recalled each time the selected category changes */

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
        Search results for: <span style={{ color: '#F31503' }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed