import React from 'react'
import Button from '@material-ui/core/Button'
import HeartIcon from '@material-ui/icons/Favorite'
import {
    Link
  } from "react-router-dom";

import './index.scss';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


function PrettyPage() {      
    return (
        <div className="pretty-container">
            <Box
                sx={{
                    display: 'flex',
                    '& > :not(style)': {
                    m: 1,
                    width: '85%',
                    height: '100%',
                    backgroundColor: '#B58BAB', //'rgb(191, 64, 191)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    border: '1px solid #C4C4C0',
                    borderRadius: '25px',
                    boxShadow: '5px 5px 40px 20px #E3D1E2',
                    },
                    justifyContent: 'center',
                }}
                >
                <Paper>
                    <Typography variant="h5">
                        Hi Birthday Girl 🥳 🎂 Welcome to the game of 21, 
                        in this game you will answer 21 questions, 
                        something you might know pretty well, 
                        answer correctly and you will be rewarded, answer incorrectly ... well don't worry princess, don't be afraid to try them all, I'll give you unlimited chances lol. Good luck hayati, 
                        I love you and here's a bosa for good luck 😘.
                    </Typography>
                </Paper>
            </Box>
            <Link style={{textDecoration: "none"}} to="/b1">
                <Button 
                    startIcon={<HeartIcon />}
                    endIcon={<HeartIcon />}
                    size="large" 
                    variant="contained" 
                    color="secondary"
                    style={{ backgroundColor: "#BF40BF", border: '1px solid #C4C4C0'}}
                    >
                        Let's Begin Pretty
                </Button>
            </Link>
        </div>
    )
}

export default PrettyPage
