import React from 'react'
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"


function YouTubeVideo({videoId}) {
    return (
        <div>
            <LiteYouTubeEmbed
                aspectHeight={9}
                aspectWidth={16}
                id={videoId}
                title={"video_title"}
            />

        </div>
    )
}

export default YouTubeVideo