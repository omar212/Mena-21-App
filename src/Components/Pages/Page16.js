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

function Page16() {    
    return (
        <PageStyle>
            <Card 
                title={`Question ${questions[15].id}`}
                question={questions[15].questionText}
                image={questions[15].cardImage}
                answers={questions[15].answerOptions}
                claimCode={questions[15].claimCode}
                rewardTitle={questions[15].rewardTitle}
                rewardCardImage={questions[15].rewardCardImage}
                link={questions[15].link}
                id={(questions[15].id + 1).toString()}
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

export default Page16;