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




function Page17() {    
    return (
        <PageStyle>
            <Card 
                title={`Question ${questions[17].id}`}
                question={questions[17].questionText}
                image={questions[17].cardImage}
                answers={questions[17].answerOptions}
                claimCode={questions[17].claimCode}
                rewardTitle={questions[17].rewardTitle}
                rewardCardImage={questions[17].rewardCardImage}
                link={questions[17].link}
                id={(questions[17].id + 1).toString()}
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

export default Page17;