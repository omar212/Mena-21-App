import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@material-ui/core/Button'
import IconButton from '@mui/material/IconButton';
import HeartIcon from '@material-ui/icons/Favorite'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div style={{fontFamily: 'Tangerine, cursive'}}>
        <Box sx={{ flexGrow: 1, width: '100%' }}>
            <AppBar position="static" style={{ backgroundColor: "#800080"}}>
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <HeartIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                    <Link style={{textDecoration: 'none', color: 'white', fontFamily: 'Tangerine, cursive', fontSize: '2rem'}}to="/">
                        Happy 21 <sup>st</sup> Birthday Princess 
                    </Link>
                </Typography>
                <HeartIcon />
                </Toolbar>
            </AppBar>
            
        </Box>
        </div>
    )
}

export default Header
