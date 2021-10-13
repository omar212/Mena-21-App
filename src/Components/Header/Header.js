import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HeartIcon from '@material-ui/icons/Favorite'
import BirtdayConfetti from '../Confetti/BdayConfetti';
import './index.scss'


export default function Header() {
    return (
        <div className="header-container" style={{fontFamily: 'Tangerine, cursive'}}>
            <Box sx={{ flexGrow: 1, width: '100%' }}>
                <AppBar position="static" style={{ backgroundColor: "#800080 !important"}}>
                    <Toolbar>
                            <HeartIcon />
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                                <div style={{width: '100%', textDecoration: 'none', color: 'white', fontFamily: 'Tangerine, cursive', fontSize: '2rem'}}>
                                    <BirtdayConfetti />
                                </div>
                            </Typography>
                    
                        <HeartIcon />
                    
                    </Toolbar>

                </AppBar>
            </Box>
        </div>
    )
}
