import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Box from '@mui/material/Box';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from "react-router-dom";
import CardHeader from '@mui/material/CardHeader';
import Slide from '@mui/material/Slide';
import Grid from '@mui/material/Grid';
import { Typography, Paper } from '@material-ui/core';
import './index.scss'
import styled from 'styled-components'
import ButtonBase from '@mui/material/ButtonBase';
import rewards from '../questions'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


export default function PopupAll(props) {
  const { openPopup, setOpenPopup, title } = props

  console.log("rewards: ", rewards)
  return (
    <div>
      <Dialog
        open={openPopup}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent className="final-popupAll-container">
          <CardHeader
            title={title} 
          />
          <hr />
          <Paper>
          {rewards.map(reward => {
            return (
              
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                      <a target="_blank" href={reward.link} rel="noreferrer">
                        <Img alt="complex" src={reward.rewardCardImage} />
                      </a>
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={21} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                          {reward.rewardTitle}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Claim Code: {reward.claimCode}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" component="div">
                        $19.00
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
            
            );
           })}
        </Paper>
        </DialogContent>
        <DialogActions >
          <div className="button-group">
            <Button onClick={() => setOpenPopup(false)}>Close</Button>
          </div>
        </DialogActions> 
      </Dialog>
    </div>
  );
}