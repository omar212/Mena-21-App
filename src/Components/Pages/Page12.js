import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components';
import questions from '../questions'

function Page12() {    
    return (
        <PageStyle>
            <Card 
                object={questions[11]}
                title={`Question ${questions[11].id}`}
                question={questions[11].questionText}
                image={questions[11].cardImage}
                answers={questions[11].answerOptions}
                claimCode={questions[11].claimCode}
                rewardTitle={questions[11].rewardTitle}
                rewardCardImage={questions[11].rewardCardImage}
                link={questions[11].link}
                id={(questions[11].id + 1).toString()}
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

export default Page12;