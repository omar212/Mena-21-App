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



function Page21() {    
    return (
        <PageStyle>
            <Card 
                title={`Question ${questions[20].id}`}
                question={questions[20].questionText}
                image={mena1}
                answers={questions[20].answerOptions}
                claimCode={questions[20].claimCode}
                rewardTitle={questions[20].rewardTitle}
                rewardCardImage={questions[20].rewardCardImage}
                link={questions[20].link}
                id={(questions[20].id + 1).toString()}
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

export default Page21;