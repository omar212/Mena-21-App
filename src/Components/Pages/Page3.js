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
import mena3 from '../../assests/CardImages/mena3.PNG'



function Page3() {    
    return (
        <PageStyle>
            <Card 
                title={`Question ${questions[2].id}`}
                question={questions[2].questionText}
                image={mena3}
                answers={questions[2].answerOptions}
                claimCode={questions[2].claimCode}
                rewardTitle={questions[2].rewardTitle}
                rewardCardImage={questions[2].rewardCardImage}
                link={questions[2].link}
                id={(questions[2].id + 1).toString()}
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

export default Page3;