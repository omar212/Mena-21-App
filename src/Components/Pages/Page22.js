import React from 'react'
import styled from 'styled-components';
import questions from '../questions'
import CardAll from '../CardAll/CardAll'
import PlaySound from '../MediaPlayer/PlayFinalSound'


function Page22() {    
    return (
        <PageStyle>
            {/* <PlaySound /> */}
            <CardAll 
                image={questions[0].cardImage}
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

export default Page22;


