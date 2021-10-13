import React, {useState} from 'react';
import Button from '@mui/material/Button';
import { Typography, Paper } from '@material-ui/core';
import Box from '@mui/material/Box';
import PopupAll from '../PopupAll/PopupAll'
import styled from 'styled-components'


import './index.scss'


export default function CardAll({title, questions, image, height}) {
  const [openPopup, setOpenPopup] = useState(false)

  const chooseAnswer = () => {
    setOpenPopup(true)
  }
  const heart = "💜"


  return (
    <div className="card-container">
        <PageStyle>
            <Paper>
                    <Typography>
                        <div>
                            So I hope you enjoyed that Princess, I haven't enjoyed a project ever this much and I know why, because now I'm doing it for the one person
                            I truly love most and that I will do anything for. You are my queen, my everything, my world 
                            you make me the happiest man to ever live, and I couldn't have been anymore lucky to see you become 21 years old. 
                            Big Year, Big Things and I know that you are capabable of even greater things. I love you princess so much, I can't wait 
                            to spend every birthday with you inshallah and of course <br/> <span style={{fontFamily: "Major Mono Display, monospace" }}> HAPPY 21<sup>st</sup> BIRTHDAY HABIBITY {' '} {heart} </span>
                        </div>
                    </Typography>
                </Paper>
        </PageStyle>
      <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': 
            {
                m: 3,
                marginLeft: 4,
                width: 128,
                height: 48,
                borderRadius: '25px'
            },
        }}
      >
        <Button variant="contained" color="success"   variant="contained" className="buttons" onClick={() => chooseAnswer()} >
            All Your Rewards
        </Button>
      </Box>
      {
          
          <PopupAll 
            openPopup={openPopup} 
            setOpenPopup={setOpenPopup}
            title={"List of Rewards 💜"}
          /> 
      }
    </div>
  );
}


const PageStyle = styled.div `
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 690px;
    width: 100%;
    .MuiPaper-rounded {
        border-radius: 25px;
        margin: auto;
        width: 75%;
        background: #FADDAF !important; // #B2E3E8;
        opacity: 1;
        box-shadow: 5px 5px 40px 20px #E3D1E2; //#0ff;
    }

    .buttons {
        
    }

    .MuiTypography-body1 {
        width: 75%;
        font-size: 1.4rem;
        font-weight: initial;
        margin: auto;
        font-family: 'Tangerine';
        -webkit-text-fill-color: purple; //#694364;
        -webkit-text-stroke-color:  #B8B8B8;
        -webkit-text-stroke-width: .50px; 
    }
    Button {
        margin-bottom: 5%;
    }
`