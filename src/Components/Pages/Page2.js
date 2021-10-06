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
import mena2 from '../../assests/CardImages/mena2.jpg'
import { useHistory } from "react-router-dom";


function Page2() {    
    let history = useHistory();

    return (
        <PageStyled>
            <Card 
                title={`Question ${questions[1].id}`}
                question={questions[1].questionText}
                image={mena2}
                answers={questions[1].answerOptions}
                claimCode={questions[1].claimCode}
                rewardTitle={questions[1].rewardTitle}
                rewardCardImage={questions[1].rewardCardImage}
                link={questions[1].link}
                id={(questions[1].id + 1).toString()}
            />
        </PageStyled>   
    )
}


const PageStyled = styled.div `
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

export default Page2;