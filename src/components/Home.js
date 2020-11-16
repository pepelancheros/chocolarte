import React from 'react'
import imgBanner from '../imgs/img_banner.JPG'
import imgBannerFade from '../imgs/fade_banner.png'
import chocolateMelt from '../imgs/chocolate_melt.svg'
import chocolatePlate from '../imgs/chocolateplate.png'
import chocolateInfo from '../imgs/chocolate-info.JPG'

const Home = () => {
    return (
        <div className="home container-fluid">
            <img className="banner" src={ imgBanner } alt="chocolate ingredients"/>
            <img className="banner--fade" src={ imgBannerFade } alt="image decoration"/>
            <div className="chocolate-melt">
                <img className="chocolate-melt__background" src={ chocolateMelt } alt="chocolate melt decoration"/>
                <div className="container">
                    <div className="chocolate-melt__info row">    
                        <div className="col-6">
                            <img className="chocolate-melt__image" src={ chocolatePlate } alt="chocolate in plate"/>
                        </div>
                        <div className="col-6 d-flex align-items-center text-medium light-text">
                            <p>Creamos chocolates y empaques personalizados para cada emoción y cada momento</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chocolate-customization">
                <img className="chocolate-customization__image" src={ chocolateInfo } alt=""/>
                <div className="col-6 chocolate-customization__info text-medium">
                    <p className="chocolate-customization__info__text">Personaliza tus chocolates con el porcentaje de cacao, relleno y decoración que más te guste </p>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-center home-products">
                <div className="horizontal-line"/>
                <h4 className="text-medium">nuestros productos</h4>
                <div className="horizontal-line"/>
            </div>
        </div>
    )
}

export default Home