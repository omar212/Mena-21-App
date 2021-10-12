import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HeartIcon from '@material-ui/icons/Favorite'
import { Link } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';
import './index.scss'

function Header() {
    return (
        <div className="header-container" style={{fontFamily: 'Tangerine, cursive'}}>
        <Box sx={{ flexGrow: 1, width: '100%' }}>
            <AppBar position="static" style={{ backgroundColor: "#800080 !important"}}>
                <Toolbar>
              
                <HeartIcon onClick={() => console.log("hello")} />
                
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                    <Link style={{textDecoration: 'none', color: 'white', fontFamily: 'Tangerine, cursive', fontSize: '2rem'}}to="/">
                        Happy 21 <sup>st</sup> Birthday Princess 
                    </Link>
                </Typography>
               
                <HeartIcon />
                
                </Toolbar>
                {/* <Box sx={{ width: '100%' }}>
                    <LinearProgress variant="determinate" value={50} />
                </Box> */}
            </AppBar>
            
        </Box>
        </div>
    )
}

export default Header
