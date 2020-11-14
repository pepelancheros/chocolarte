import React from 'react'
import imgBanner from '../imgs/img_banner.JPG'

const Home = () => {
    return (
        <div className="home container-fluid">
            <img className="banner" src={ imgBanner } alt="ingredientes de chocolates"/>
        </div>
    )
}

export default Home