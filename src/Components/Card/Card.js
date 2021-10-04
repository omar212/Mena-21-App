import React, {Component} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Popup from '../Popup/Popup'

import './index.scss'



class ImgMediaCard extends Component {

  constructor(props) {
      super(props)
      this.state = {
          correctAnswer: false,
          answered: false,
          errorText: ''
      }
      this.chooseAnswer = this.chooseAnswer.bind(this)
  }  

  chooseAnswer = (answer) => {
    console.log("answer, truth : ", answer)
    this.setState({
      correctAnswer: answer.isCorrect,
      errorText: answer.submitText,
      answered: true,
    })
  }

  changeValue = () => {
    return false
  }

  render() { 
    const { title, question, image, answers} =  this.props
    const { answered } = this.state

    return (
      <div className="card-container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
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
                  <Button variant="contained" className="buttons" value={answer.answerText} onClick={() => this.chooseAnswer(answer)} >
                    {answer.answerText}
                  </Button>
              );
          })}
          {
            answered ? 
              <Popup changeValue={this.changeValue} open={true}/> : ''
          }
        </Box>
      </div>
    );
  }

}

export default ImgMediaCard;