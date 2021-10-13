import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components';
import questions from '../questions'

function Page17() {    
    return (
        <PageStyle>
            <Card 
                object={questions[17]}
                title={`Question ${questions[17].id}`}
                question={questions[17].questionText}
                image={questions[17].cardImage}
                answers={questions[17].answerOptions}
                claimCode={questions[17].claimCode}
                rewardTitle={questions[17].rewardTitle}
                rewardCardImage={questions[17].rewardCardImage}
                link={questions[17].link}
                id={(questions[17].id + 1).toString()}
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

export default Page17;