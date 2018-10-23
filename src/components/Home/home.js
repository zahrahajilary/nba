import React from 'react'
import NewsSlider from '../Widgets/NewsSlider/slider'
import NewsList from '../Widgets/NewsList/newsList'
import VideoList from '../Widgets/Videos/videoList'

const Home = () => {
    console.log('home')
    return (
        <div>
            <NewsSlider
                type="featured"
                start={0}
                amount={3}
                settings={{
                    dots: false,
                }}
            />

            <NewsList
                type="card"
                loadmore={true}
                amount={3}
                start={0}
            />

            <VideoList
                type="card"
                title={true}
                loadmore={true}
                start={0}
                amount={3}
            />
        </div>
    )
}

export default Home;