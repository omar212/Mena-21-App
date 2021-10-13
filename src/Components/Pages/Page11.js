import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components';
import questions from '../questions'




function Page11() {    
    return (
        <PageStyle>
            <Card 
                title={`Question ${questions[10].id}`}
                question={questions[10].questionText}
                image={questions[10].cardImage}
                answers={questions[10].answerOptions}
                claimCode={questions[10].claimCode}
                rewardTitle={questions[10].rewardTitle}
                rewardCardImage={questions[10].rewardCardImage}
                link={questions[10].link}
                id={(questions[10].id + 1).toString()}
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

export default Page11;