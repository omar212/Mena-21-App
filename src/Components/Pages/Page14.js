import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components';
import questions from '../questions'




function Page14() {    
    return (
        <PageStyle>
            <Card 
                title={`Question ${questions[13].id}`}
                question={questions[13].questionText}
                image={questions[13].cardImage}
                answers={questions[13].answerOptions}
                claimCode={questions[13].claimCode}
                rewardTitle={questions[13].rewardTitle}
                rewardCardImage={questions[13].rewardCardImage}
                link={questions[13].link}
                id={(questions[13].id + 1).toString()}
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

export default Page14;