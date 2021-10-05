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



function Page11() {    
    return (
        <PageStyle>
            <Card 
                title={`Question ${questions[10].id}`}
                question={questions[10].questionText}
                image={mena1}
                answers={questions[10].answerOptions}
                claimCode={questions[10].claimCode}
                rewardTitle={questions[10].rewardTitle}
                rewardCardImage={questions[10].rewardCardImage}
                link={questions[10].link}
                id={(questions[10].id + 1).toString()}
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

export default Page11;