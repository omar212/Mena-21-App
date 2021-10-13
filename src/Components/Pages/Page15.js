import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components';
import questions from '../questions'


function Page15() {    
    return (
        <PageStyle>
            <Card 
                object={questions[14]}
                title={`Question ${questions[14].id}`}
                question={questions[14].questionText}
                image={questions[14].cardImage}
                answers={questions[14].answerOptions}
                claimCode={questions[14].claimCode}
                rewardTitle={questions[14].rewardTitle}
                rewardCardImage={questions[14].rewardCardImage}
                link={questions[14].link}
                id={(questions[14].id + 1).toString()}
                height="250px"
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

export default Page15;