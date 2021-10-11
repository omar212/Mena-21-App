import React from 'react'
import Button from '@material-ui/core/Button'
import {
    Link
  } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from '../Card/Card'
import HeartIcon from '@material-ui/icons/Favorite'
import styled from 'styled-components';
import questions from '../questions'
import { Typography, Paper } from '@material-ui/core';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const duration = 300;
const heart = "💜"

const paragraph = () => {
    return (
        <div>
            So I hope you enjoyed that Princess, I haven't enjoyed a project ever this much and I know why, because now I'm doing it for the one person
            I truly love most and that I will do anything for. You are my queen, my everything, my world 
            you make me the happiest man to ever live, and I couldn't have been anymore lucky to see you become 21 years old. 
            Big Year, Big Things and I know that you are capabable of even greater things. I love you princess so much, I can't wait 
            to spend every birthday with you inshallah and of course HAPPY 21 <sup>st</sup> BIRTHDAY PRETTY {heart}
        </div>
    )
}

const fontFamily = " 'Major Mono Display, monospace";
    
  
function Page22() {    
    return (
        <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={duration} >
            <PageStyle >
                <Paper >
                    <Typography>
                        <div>
                            So I hope you enjoyed that Princess, I haven't enjoyed a project ever this much and I know why, because now I'm doing it for the one person
                            I truly love most and that I will do anything for. You are my queen, my everything, my world 
                            you make me the happiest man to ever live, and I couldn't have been anymore lucky to see you become 21 years old. 
                            Big Year, Big Things and I know that you are capabable of even greater things. I love you princess so much, I can't wait 
                            to spend every birthday with you inshallah and of course <br/> <span style={{fontFamily: "Major Mono Display, monospace" }}> HAPPY 21<sup>st</sup> BIRTHDAY HABIBITY {' '} {heart} </span>
                        </div>
                    </Typography>
                </Paper>
                <Button variant="contained" className="buttons"  onClick={() => ''} >
                    All Your 
                </Button>
            </PageStyle>
        </Slide>
        
    )
}


const PageStyle = styled.div `
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 690px;
    width: 100%;
    .MuiPaper-rounded {
        border-radius: 25px;
        margin: auto;
        width: 75%;
        background: #FADDAF; // #B2E3E8;
        opacity: 1;
        box-shadow: 5px 5px 40px 20px #E3D1E2; //#0ff;
    }

    .buttons {
        
    }

    .MuiTypography-body1 {
        width: 75%;
        font-size: 1.4rem;
        font-weight: initial;
        margin: auto;
        font-family: 'Tangerine';
        -webkit-text-fill-color: purple; //#694364;
        -webkit-text-stroke-color:  #B8B8B8;
        -webkit-text-stroke-width: .50px; 
    }
    Button {
        margin-bottom: 5%;
    }
`

export default Page22;