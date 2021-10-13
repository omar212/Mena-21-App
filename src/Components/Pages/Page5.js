import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components';
import questions from '../questions'

function Page5() {    
    return (
        <PageStyle>
            <Card 
                title={`Question ${questions[4].id}`}
                question={questions[4].questionText}
                image={questions[4].cardImage}
                answers={questions[4].answerOptions}
                claimCode={questions[4].claimCode}
                rewardTitle={questions[4].rewardTitle}
                rewardCardImage={questions[4].rewardCardImage}
                link={questions[4].link}
                id={(questions[4].id + 1).toString()}
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

export default Page5;