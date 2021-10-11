import React from 'react'
import Button from '@material-ui/core/Button'
import {
    Link
  } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from '../Card/Card'
import styled from 'styled-components';
import questions from '../questions'

function Page6() {    
    return (
        <PageStyle>
            <Card 
                title={`Question ${questions[5].id}`}
                question={questions[5].questionText}
                image={questions[5].cardImage}
                answers={questions[5].answerOptions}
                claimCode={questions[5].claimCode}
                rewardTitle={questions[5].rewardTitle}
                rewardCardImage={questions[5].rewardCardImage}
                link={questions[5].link}
                id={(questions[5].id + 1).toString()}
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

export default Page6;