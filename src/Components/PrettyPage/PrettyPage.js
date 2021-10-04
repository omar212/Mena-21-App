import React from 'react'
import Button from '@material-ui/core/Button'
import HeartIcon from '@material-ui/icons/Favorite'
import {
    Link
  } from "react-router-dom";

import './index.scss';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


function PrettyPage() {      
    return (
        <div className="pretty-container">
            <Link style={{textDecoration: "none"}} to="/b1">
                <Button 
                    startIcon={<HeartIcon />}
                    endIcon={<HeartIcon />}
                    size="large" 
                    variant="contained" 
                    color="secondary"
                    style={{ backgroundColor: "#BF40BF"}}
                    >
                        Let's Begin Pretty 1
                </Button>
            </Link>
        </div>
    )
}

export default PrettyPage
