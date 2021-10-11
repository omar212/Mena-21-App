import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Box from '@mui/material/Box';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from "react-router-dom";
import Slide from '@mui/material/Slide';
import './index.scss'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopupAll(props) {
  const { openPopup, setOpenPopup } = props

  return (
    <div>
      <Dialog
        open={openPopup}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText>
            {/* {submitText} */}
          </DialogContentText>
          {/* {
            correctAnswer ? 
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
              </a>
              <DialogContentText>
                Here's your reward princess <br /> <span style={{color: "#694364", fontWeight: 'bolder'}}>Claim Code: </span> {claimCode}
              </DialogContentText>
            </Box> : ''
          } */}
          
        </DialogContent>
        <DialogActions>
            <Button onClick={() => setOpenPopup(false)}>Close</Button>
        </DialogActions> 
      </Dialog>
    </div>
  );
}