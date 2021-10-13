import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components';
import questions from '../questions'


function Page9() {    
    return (
        <PageStyle>
            <Card 
                object={questions[8]}
                title={`Question ${questions[8].id}`}
                question={questions[8].questionText}
                image={questions[8].cardImage}
                answers={questions[8].answerOptions}
                claimCode={questions[8].claimCode}
                rewardTitle={questions[8].rewardTitle}
                rewardCardImage={questions[8].rewardCardImage}
                link={questions[8].link}
                id={(questions[8].id + 1).toString()}
                height="265px"
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

export default Page9;