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




function Page12() {    
    return (
        <PageStyle>
            <Card 
                title={`Question ${questions[11].id}`}
                question={questions[11].questionText}
                image={questions[11].cardImage}
                answers={questions[11].answerOptions}
                claimCode={questions[11].claimCode}
                rewardTitle={questions[11].rewardTitle}
                rewardCardImage={questions[11].rewardCardImage}
                link={questions[11].link}
                id={(questions[11].id + 1).toString()}
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

export default Page12;