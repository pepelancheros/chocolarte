import React, { useState, useRef, useEffect } from 'react'
import imgBanner from '../imgs/img_banner.JPG'
import imgBannerFade from '../imgs/fade_banner.png'
import chocolatePlate from '../imgs/chocolateplate.png'
import chocolateInfo from '../imgs/chocolate-info.JPG'
import chocolatesForestMain from '../imgs/chocolates_forest_main.png'
import blackBoxGif from '../imgs/blackbox.gif'
import chocolateBars from '../imgs/chocolatebars.png'
import chocolateSpecial from '../imgs/witchheel.png'
import contactBackground from '../imgs/contact-background.JPG'
import chocolarteTitle from '../imgs/chocolarte_title.svg'
import _ from 'lodash';

function Home() {
    const [mustMelt, setMustMelt] = useState(false);
    const myRef = useRef(null);
    const myAnimation = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', _.throttle(handleScroll, 800))
    });
    useEffect(() => {
        if (mustMelt === true) {
            myAnimation.current.beginElement();
        }
    }, [mustMelt]);
    function handleScroll() {
        const scrollTop = myRef.current.getBoundingClientRect().top;

        if (scrollTop < 0) {
            setMustMelt(true); 
        }
    }

    return(
        <div className="home container-fluid">
                <img className="chocolarte-title" src={ chocolarteTitle } alt="chocolarte title"/>
                <img className="banner" src={ imgBanner } alt="chocolate ingredients"/>
                <img className="banner--fade" src={ imgBannerFade } alt="decoration"/>
                <div ref={myRef} className="chocolate-melt">
                    <svg className="chocolate-melt__background" viewBox="0 0 1440 1493" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path id="holi" d="M0 -0.000244141H1440V161C1440 161 1381.5 416 1381.5 161C1381.5 29.0662 1235.5 161 1188 161C1140.5 161 1111 161 1068 161C1025 161 999.5 170.093 984 161C968.5 151.906 948 161 910 161C872 161 856 150.5 841 161C826 171.5 806.205 161 776 161C745.795 161 744 169.963 733 161C722 152.037 698.5 167 686 161C673.5 155 650 161 636.5 161C582.5 161 607.5 161 560 161C512.5 161 551 71.488 444 161C337 250.511 336 179 242 161C148 143 102 150 0 161V-0.000244141Z" fill="url(#paint0_linear)">
                            <animate ref={myAnimation} begin="indefinite" dur="4s" attributeName="d" fill="freeze" to="M0 0H1440V1492.5C1440 1492.5 1380.5 1490.5 1380.5 1235.5C1380.5 1103.57 1316.03 1046.5 1268.53 1046.5C1221.03 1046.5 1182.03 1092 1139.03 1092C1096.03 1092 1069.53 1064.59 1054.03 1055.5C1038.53 1046.41 1004.03 1018 966.031 1018C928.031 1018 898.031 1037 883.031 1047.5C868.031 1058 852.236 1069 822.031 1069C791.826 1069 777.531 1056.46 766.531 1047.5C755.531 1038.54 744.531 1030 732.031 1024C719.531 1018 706.032 1016 692.531 1016C638.531 1016 669.031 1127 621.531 1127C574.031 1127 615.031 963.988 508.031 1053.5C401.031 1143.01 378.032 1043 284.031 1025C190.031 1007 102 1168 0 1179V0Z"></animate>
                        </path>
                        <defs>
                        <linearGradient id="paint0_linear" x1="720.116" y1="-268" x2="720.116" y2="1465.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#302020"/>
                            <stop offset="0.197917" stopColor="#302020"/>
                            <stop offset="0.625" stopColor="#472E2E"/>
                            <stop offset="1" stopColor="#4D3131"/>
                        </linearGradient>
                        </defs>
    
                    </svg>
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
                        <img className="products__chocolates__main" src={ chocolatesForestMain } alt="multiple chocolates"/>
                    </div>
                    <div className="products__empaques">
                        <h4 className="text-large products__empaques__text">Empaques</h4>
                        <img className="products__empaques__img" src={ blackBoxGif } alt="gif chocolate box opening"/>
                    </div>
                    <div className="products__barras"> 
                        <img className="products__barras__img" src={ chocolateBars } alt="chocolate bars"/>
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
        );
}


export default Home