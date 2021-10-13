import React, { useState } from 'react'
import Sound from 'react-sound'
import jason from '../../assests/jason.mp3'

export default function PlaySound(props) {
    const { song, play, pause} = props
  
    
      return (
        <Sound
            url={jason}
            // playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
            playFromPosition={300}
            // onLoading={handleSongLoading}
            // onPlaying={handleSongPlaying}
            // onFinishedPlaying={handleSongFinishedPlaying}
        />
    )
}
