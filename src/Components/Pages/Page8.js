import React from 'react'
import Button from '@material-ui/core/Button'
import {
    Link
  } from "react-router-dom";
import Card from '../Card/Card'
import styled from 'styled-components';
import questions from '../questions'




function Page8() {    
    return (
        <PageStyle>
            <Card 
                title={`Question ${questions[7].id}`}
                question={questions[7].questionText}
                image={questions[7].cardImage}
                answers={questions[7].answerOptions}
                claimCode={questions[7].claimCode}
                rewardTitle={questions[7].rewardTitle}
                rewardCardImage={questions[7].rewardCardImage}
                link={questions[7].link}
                id={(questions[7].id + 1).toString()}
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

export default Page8;