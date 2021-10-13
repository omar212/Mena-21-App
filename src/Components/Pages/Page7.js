import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components';
import questions from '../questions'

function Page7() {    
    return (
        <PageStyle>
            <Card 
                object={questions[6]}
                title={`Question ${questions[6].id}`}
                question={questions[6].questionText}
                image={questions[6].cardImage}
                answers={questions[6].answerOptions}
                claimCode={questions[6].claimCode}
                rewardTitle={questions[6].rewardTitle}
                rewardCardImage={questions[6].rewardCardImage}
                link={questions[6].link}
                id={(questions[6].id + 1).toString()}
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

export default Page7;