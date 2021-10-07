import React from 'react'
import Button from '@material-ui/core/Button'
import {
    Link
  } from "react-router-dom";
import Card from '../Card/Card'
import HeartIcon from '@material-ui/icons/Favorite'
import styled from 'styled-components';
import questions from '../questions'

function Page1() {    
    return (
        <PageStyle>
            <Card 
                title={`Question ${questions[0].id}`}
                question={questions[0].questionText}
                image={questions[0].cardImage}
                answers={questions[0].answerOptions}
                claimCode={questions[0].claimCode} 
                rewardTitle={questions[0].rewardTitle}
                rewardCardImage={questions[0].rewardCardImage}
                link={questions[0].link}
                id={(questions[0].id + 1).toString()}
                height="260px"
            />
            {/* <Link style={{textDecoration: "none"}} to="/b2">
                <Button 
                    startIcon={<HeartIcon />}
                    endIcon={<HeartIcon />}
                    size="large" 
                    variant="contained" 
                    color="secondary"
                    disabled={}
                    style={{ backgroundColor: "#BF40BF", fontFamily: 'Carter One, cursive'}}
                    >
                        Next
                </Button>
            </Link> */}
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

export default Page1;