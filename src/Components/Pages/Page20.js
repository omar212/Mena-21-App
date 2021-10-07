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




function Page20() {    
    return (
        <PageStyle>
            <Card 
                title={`Question ${questions[19].id}`}
                question={questions[19].questionText}
                image={questions[19].cardImage}
                answers={questions[19].answerOptions}
                claimCode={questions[19].claimCode}
                rewardTitle={questions[19].rewardTitle}
                rewardCardImage={questions[19].rewardCardImage}
                link={questions[19].link}
                id={(questions[19].id + 1).toString()}
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

export default Page20;