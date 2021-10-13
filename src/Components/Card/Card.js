import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Popup from '../Popup/Popup'

import './index.scss'


export default function QuestionCard({object, title, question, image, answers, claimCode, rewardCardImage, rewardTitle, link, id, height}) {
  const [correctAnswer, setCorrectAnswer] = useState(false)
  const [submitText, setSubmitAnswer] = useState("")
  const [openPopup, setOpenPopup] = useState(false)



  const chooseAnswer = (answer) => {
    setSubmitAnswer(answer.submitText)
    setCorrectAnswer(answer.isCorrect)
    setOpenPopup(true)
  }

  const handleClose = () => {
    setOpenPopup(false);
  };


  return (
    <div className="card-container">
      <Card sx={{ maxWidth: 345 }}>
        
        <CardMedia
          component="img"
          alt="image of my princess"
          height={height ? height : "240px"}
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {question}
          </Typography>
        </CardContent>
      </Card>
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

        {answers.map(answer => {
            return (
                <Button variant="contained" variant="contained" className="buttons" value={answer.answerText} onClick={() => chooseAnswer(answer, claimCode)} >
                  {console.log("answer.answerText: ",answer.answerText )}
                  {answer.answerText}
                </Button>
            );
        })}
       
      </Box>
      {
          
          <Popup 
            openPopup={openPopup} 
            setOpenPopup={setOpenPopup}
            onClose={handleClose}
            submitText={submitText}
            claimCode={claimCode}
            rewardTitle={rewardTitle}
            rewardCardImage={rewardCardImage}
            correctAnswer={correctAnswer}
            link={link}
            id={id}
            object={object}
          /> 
      }
    </div>
  );
}