import React, { useState } from 'react'
import Sound from 'react-sound'
import Love from '../../assests/love.mp3'


const PlaySound = ( 
    handleSongLoading, 
    handleSongPlaying, 
    handleSongFinishedPlaying,
) => {
    const [isPlaying, setIsPlaying] = useState(true)

    return (
        <Sound
            url={Love}
            playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
            playFromPosition={300}
            // onLoading={handleSongLoading}
            // onPlaying={handleSongPlaying}
            // onFinishedPlaying={handleSongFinishedPlaying}
        />
    )
    
}
export default PlaySound
