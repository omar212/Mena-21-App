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


function Page15() {    
    return (
        <PageStyle>
            <Card 
                title={`Question ${questions[14].id}`}
                question={questions[14].questionText}
                image={questions[14].cardImage}
                answers={questions[14].answerOptions}
                claimCode={questions[14].claimCode}
                rewardTitle={questions[14].rewardTitle}
                rewardCardImage={questions[14].rewardCardImage}
                link={questions[14].link}
                id={(questions[14].id + 1).toString()}
                height="250px"
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

export default Page15;