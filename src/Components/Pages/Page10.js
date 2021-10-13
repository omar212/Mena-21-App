import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components';
import questions from '../questions'




function Page10() {    
    return (
        <PageStyle>
            <Card 
                title={`Question ${questions[9].id}`}
                question={questions[9].questionText}
                image={questions[9].cardImage}
                answers={questions[9].answerOptions}
                claimCode={questions[9].claimCode}
                rewardTitle={questions[9].rewardTitle}
                rewardCardImage={questions[9].rewardCardImage}
                link={questions[9].link}
                id={(questions[9].id + 1).toString()}
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

export default Page10;