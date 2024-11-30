import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CartWidget from "./CartWidget.jsx";
 




export default function Navbar() {
    const cartItemCount = 3
  return (
  
    <Box sx={{ flexGrow: 5 }}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
         <RocketLaunchIcon/>
          <Typography variant="h6" color="inherit" component="div">
            Tienda Electronica                                                
          </Typography>
          <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
            <CartWidget/>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    
    
  );
 
}
