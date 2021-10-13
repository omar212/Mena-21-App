import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components';
import questions from '../questions'




function Page21() {    
    return (
        <PageStyle>
            <Card 
                title={`Question ${questions[20].id}`}
                question={questions[20].questionText}
                image={questions[20].cardImage}
                answers={questions[20].answerOptions}
                claimCode={questions[20].claimCode}
                rewardTitle={questions[20].rewardTitle}
                rewardCardImage={questions[20].rewardCardImage}
                link={questions[20].link}
                id={(questions[20].id + 1).toString()}
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

export default Page21;