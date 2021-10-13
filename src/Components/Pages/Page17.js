import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components';
import questions from '../questions'




function Page17() {    
    return (
        <PageStyle>
            <Card 
                title={`Question ${questions[16].id}`}
                question={questions[16].questionText}
                image={questions[16].cardImage}
                answers={questions[16].answerOptions}
                claimCode={questions[16].claimCode}
                rewardTitle={questions[16].rewardTitle}
                rewardCardImage={questions[16].rewardCardImage}
                link={questions[16].link}
                id={(questions[16].id + 1).toString()}
                height="260px"
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

export default Page17;