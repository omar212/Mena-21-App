import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components';
import questions from '../questions'


function Page20() {    
    return (
        <PageStyle>
            <Card 
                object={questions[19]}
                title={`Question ${questions[19].id}`}
                question={questions[19].questionText}
                image={questions[19].cardImage}
                answers={questions[19].answerOptions}
                claimCode={questions[19].claimCode}
                rewardTitle={questions[19].rewardTitle}
                rewardCardImage={questions[19].rewardCardImage}
                link={questions[19].link}
                id={(questions[19].id + 1).toString()}
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

export default Page20;