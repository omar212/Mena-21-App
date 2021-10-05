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
import mena1 from '../../assests/mena1.jpg'
import { useHistory } from "react-router-dom";



function Page2() {    
    let history = useHistory();

    return (
        <PageOneStyled>
            <Card 
                title={`Question ${questions[1].id}`}
                question={questions[1].questionText}
                image={mena1}
                answers={questions[1].answerOptions}
                claimCode={questions[1].claimCode}
                rewardTitle={questions[1].rewardTitle}
                rewardCardImage={questions[1].rewardCardImage}
                link={questions[1].link}
            />
            {/* <Link style={{textDecoration: "none"}} to="/b1">
                <Button 
                    startIcon={<HeartIcon />}
                    endIcon={<HeartIcon />}
                    size="large" 
                    variant="contained" 
                    color="secondary"
                    style={{ backgroundColor: "#BF40BF", fontFamily: 'Carter One, cursive'}}
                    >
                        Next
                </Button>
            </Link> */}
        </PageOneStyled>
        
    )
}


const PageOneStyled = styled.div `
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

export default Page2;