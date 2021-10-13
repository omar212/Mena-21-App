import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components';
import questions from '../questions'

function Page19() {    
    return (
        <PageStyle>
            <Card 
                object={questions[18]}
                title={`Question ${questions[18].id}`}
                question={questions[18].questionText}
                image={questions[18].cardImage}
                answers={questions[18].answerOptions}
                claimCode={questions[18].claimCode}
                rewardTitle={questions[18].rewardTitle}
                rewardCardImage={questions[18].rewardCardImage}
                link={questions[18].link}
                id={(questions[18].id + 1).toString()}
                height="230px"
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

export default Page19;