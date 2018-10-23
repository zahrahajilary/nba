import React from 'react'
import './videos.css'

import { Link } from 'react-router-dom'
import CardInfo from '../CardInfo/cardInfo'
const VideosTemplae = (props) => {
    return (
        props.data.map((item, i) => {
            return (
                <div key={i}>
                    <Link to={`/videos/${item.id}`} >
                        <div className="videoListitem_wrapper">
                            <div className="left"
                                style={{
                                    background: `url(/images/videos/${item.image})`
                                }}>
                                <div></div>

                            </div>
                            <div className='right'>
                                <CardInfo teams={props.teams} team={item.team} date={item.date} />
                                <h2>{item.title}</h2>
                            </div>
                        </div>

                    </Link>
                </div>
            ) 


        })


    )


}
export default VideosTemplae