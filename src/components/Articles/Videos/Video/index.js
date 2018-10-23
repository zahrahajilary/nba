import React, { Component } from 'react'
import axios from 'axios'
import { URL } from '../../../../config'
import '../../articles.css'
import Header from './header'
import VideoRelated from '../../../Widgets/Videos/VideosRelated/videoRelated'



class VideoArtcile extends Component {
    state = {
        article: [],
        team: [],
        teams:[],
        related:[]
    }

    componentWillMount() {
        axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
            .then(res => {
                console.log(res)
                let article = res.data[0]
                axios.get(`${URL}/teams?id=${article.team}`)
                    .then(res => {
                        this.setState({
                            article: article,
                            team: res.data
                        })
                        this.getRelated();
                    }

                    )

            })
    }

    getRelated = ()=> {
        console.log(this.state)
        axios.get(`${URL}/teams`)
        .then(res=>{
           let teams = res.data
           axios.get(`${URL}/videos?q=${this.state.team[0].city}&_limit=3`)
           .then(res=>{
                this.setState({
                    teams:teams,
                    related:res.data
                })
           })
        })
    }

    render() {
        console.log(this.state)
        const article = this.state.article
        const team = this.state.team
        return (
            <div>
                <Header teamData={team[0]} />
                <div className='videoWrapper'>
                    <h1>{article.title}</h1>
                    <iframe title="videoplayer"
                        width="100%"
                        height="300px"
                        src={`https://www.youtube.com/embed/${article.url} `}
                    ></iframe>
                </div>
                <VideoRelated data={this.state.related}
                teams = {this.state.team}/>

            </div>
        )
    }
}

export default VideoArtcile