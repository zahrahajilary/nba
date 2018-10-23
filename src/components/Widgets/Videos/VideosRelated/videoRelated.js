import React from 'react'

import '../videos.css'
import VideosTemplae from '../videosTemplate';



const video = (props) => {
    return (
        <div className="relatedWrapper">
            <VideosTemplae data={props.data}
                teams={props.teams} />
        </div>
    )
}
export default video