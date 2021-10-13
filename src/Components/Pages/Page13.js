import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components';
import questions from '../questions'

function Page13() {    
    return (
        <PageStyle>
            <Card 
                object={questions[12]}
                title={`Question ${questions[12].id}`}
                question={questions[12].questionText}
                image={questions[12].cardImage}
                answers={questions[12].answerOptions}
                claimCode={questions[12].claimCode}
                rewardTitle={questions[12].rewardTitle}
                rewardCardImage={questions[12].rewardCardImage}
                link={questions[12].link}
                id={(questions[12].id + 1).toString()}
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

export default Page13;