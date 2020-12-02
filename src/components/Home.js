import React from 'react'
import imgBanner from '../imgs/img_banner.JPG'
import imgBannerFade from '../imgs/fade_banner.png'
import chocolateMelt from '../imgs/chocolate_melt.svg'
import chocolatePlate from '../imgs/chocolateplate.png'
import chocolateInfo from '../imgs/chocolate-info.JPG'
import chocolatesForestMain from '../imgs/chocolates_forest_main.png'
import chocolatesForestBackground from '../imgs/chocolates_forest_background.png'
import blackBoxGif from '../imgs/blackbox.gif'
import chocolateBars from '../imgs/chocolatebars.png'
import chocolateSpecial from '../imgs/witchheel.png'
import contactBackground from '../imgs/contact-background.JPG'

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
            <div className="products">
                <div className="d-flex align-items-center justify-content-center products__title">
                    <div className="horizontal-line"/>
                    <h3 className="text-medium">nuestros productos</h3>
                    <div className="horizontal-line"/>
                </div>
                <div className="products__chocolates">
                    <h4 className="text-large products__chocolates__text">Chocolates</h4>
                    <img className="products__chocolates__background" src={ chocolatesForestBackground } alt="multiple chocolates picture background"/>
                    <img className="products__chocolates__main" src={ chocolatesForestMain } alt="multiple chocolates picture"/>
                </div>
                <div className="products__empaques">
                    <h4 className="text-large products__empaques__text">Empaques</h4>
                    <img className="products__empaques__img" src={ blackBoxGif } alt="gif chocolate box opening"/>
                </div>
                <div className="products__barras"> 
                    <img className="products__barras__img" src={ chocolateBars } alt="chocolate bars picture"/>
                    <h4 className="text-large products__barras__text">Barras</h4>
                </div>
                <div className="products__special">
                    <h4 className="text-large products__special__text">Ocasiones Especiales</h4>
                    <img className="products__special__img" src={ chocolateSpecial } alt="box of chocolates for halloween with the form of a witch heel"/>
                </div>
            </div>
            <div className="home__contact">
                <address className="home__contact__text text-large">
                    Patricia Olarte<br/>
                    <a href="tel:+573012208727">3012208727</a><br/>
                    <a href="#">@chocolarte</a>
                </address>
                <img className="home__contact__background" src={ contactBackground } alt=""/>
            </div>
        </div>
    )
}

export default Home