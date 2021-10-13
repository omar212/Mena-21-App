import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import MoneyConfetti from '../Confetti/MoneyConfetti'
import './index.scss'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function EasterEggPopup(props) {
  const { openPopup, setOpenPopup, claimCode,rewardCardImage ,rewardTitle, handleClose, link } = props
    console.log("hello")
  return (
    <div>
      <Dialog
        open={openPopup}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText>
            Easter Egg hehe
          </DialogContentText>
          {
            <Box 
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                height: '100%',
              }}
            >
              <a style={{marginTop: '15%', marginBottom: '15%'}} target="_blank" href={link}>
                <img
                  className="claim-card"
                  src={rewardCardImage}
                  alt={rewardTitle}
                  loading="lazy"
                />
                <MoneyConfetti />
              </a>
              <DialogContentText>
                Here's your reward princess <br /> <span style={{color: "#694364", fontWeight: 'bolder'}}>Claim Code: </span> {claimCode}
              </DialogContentText>
            </Box> 
          }
          
        </DialogContent>
        
        <DialogActions>
            <Button onClick={() => setOpenPopup(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}