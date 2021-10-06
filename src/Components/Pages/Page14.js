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
import mena1 from '../../assests/CardImages/mena1.jpg'



function Page14() {    
    return (
        <PageStyle>
            <Card 
                title={`Question ${questions[13].id}`}
                question={questions[13].questionText}
                image={mena1}
                answers={questions[13].answerOptions}
                claimCode={questions[13].claimCode}
                rewardTitle={questions[13].rewardTitle}
                rewardCardImage={questions[13].rewardCardImage}
                link={questions[13].link}
                id={(questions[13].id + 1).toString()}
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

export default Page14;