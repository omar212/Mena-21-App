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
import CardAll from '../CardAll/CardAll'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const duration = 300;
const heart = "💜"


function Page22() {    
    return (
        <PageStyle>
            <CardAll 
                image={questions[0].cardImage}
                height="260px"
            />
        </PageStyle>
        
    )
}


const PageStyle = styled.div `
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 690px;
    width: 100%;
    Button {
        margin-bottom: 5%;
    }
`

export default Page22;


