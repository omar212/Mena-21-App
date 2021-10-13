import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components';
import questions from '../questions'

function Page4() {    
    return (
        <PageStyle>
            <Card 
                object={questions[3]}
                title={`Question ${questions[3].id}`}
                question={questions[3].questionText}
                image={questions[3].cardImage}
                answers={questions[3].answerOptions}
                claimCode={questions[3].claimCode}
                rewardTitle={questions[3].rewardTitle}
                rewardCardImage={questions[3].rewardCardImage}
                link={questions[3].link}
                id={(questions[3].id + 1).toString()}
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

export default Page4;