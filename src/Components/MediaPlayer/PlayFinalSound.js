import React, { useState } from 'react'
import Sound from 'react-sound'
import jason from '../../assests/jason.mp3'


const PlaySound = ( 
    handleSongLoading, 
    handleSongPlaying, 
    handleSongFinishedPlaying,
) => {
    const [isPlaying, setIsPlaying] = useState(true)

    return (
        <Sound
            url={jason}
            playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
            playFromPosition={300}
            onLoading={handleSongLoading}
            onFinishedPlaying={handleSongFinishedPlaying}
        />
    )
    
}
export default PlaySound
