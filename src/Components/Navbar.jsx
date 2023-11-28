import React from 'react'
import { Stack } from '@mui/material';
// The Stack component manages the layout of its immediate children along the vertical or horizontal axis, with optional spacing and dividers between each child.
import { Link } from 'react-router-dom';
import { logo } from '../Utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => (

 <Stack 
  direction='row'
  alignItems='center'
  p={2} 
  sx={{position:'sticky', background:'#000', top:0, justifyContent:"space-between"}}>
    {/* sx prop in mui is to provide the styles (like style={{}} in css*/}
    <Link to="/" style={{display:"flex", alignItems:"center"}}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
  );


export default Navbar