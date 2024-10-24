import React from 'react';
import './css/gecis.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import resim1 from './img/img/1.jpg'
import resim2 from './img/img/2.png'
import resim3 from './img/img/3.jpg'
import resim4 from './img/img/4.png'
import resim5 from './img/img/5.png'
import resim6 from './img/img/6.png'
import Contact from '../contact us/contact';


const Gecis = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true, // Otomatik ilerleme özelliğini etkinleştir
        autoplaySpeed: 2000, // Her slide arasında ne kadar süre bekleyeceğini ayarlarsın (ms cinsinden)
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // Bu breakpoint, mobil için ayarlanacak
                settings: {
                    slidesToShow: 1, // Mobilde 1 slide göster
                    slidesToScroll: 1, // 1 slide kaydır
                },
            },
        ],
    };

    return (
        <>
            <div className='container-fluid gecis-container' data-aos='slide-right'>
                <h3 className='page-title custom-gecis-title'>

                    Markalar
                </h3>
                <p className='title-description '>Kalite ve şıklığı ön planda tutarak, yaşam alanlarınıza değer katacak ürünler sunmaktan mutluluk duyuyoruz.</p>
                <div className='my-4 d-flex align-items-center justify-content-center'><button className='border-0 fw-semi  btn btn-secondary bold fs-6 py-2 px-3 shadow'>E-ticaret Sitemizi ziyaret edin</button></div>


                <Slider {...settings}>
                    <div className='img-container'>
                        <img className='img-content-img' src={resim1} ></img>
                        <h1 className='text-center py-2  custom-color-black   fw-semibold  fs-5 '>Viko</h1>

                    </div>
                    <div className='img-container'>
                        <img src={resim2} ></img>
                        <h1 className=' text-center py-2 custom-color-black  fw-semibold  fs-5 '>Legrand</h1>
                    </div>
                    <div className='img-container'>
                        <img src={resim3} ></img>
                        <h1 className=' text-center py-2  custom-color-black    fw-semibold  fs-5 '>Chint</h1>
                    </div>
                    <div className='img-container'>
                        <img src={resim4} ></img>
                        <h1 className=' text-center py-2  custom-color-black  fw-semibold  fs-5 '>Cata</h1>
                    </div>
                    <div className='img-container'>
                        <img src={resim5} ></img>
                        <h1 className=' text-center py-2  custom-color-black   fw-semibold  fs-5 '>Noas</h1>
                    </div>
                    <div className='img-container'>
                        <img src={resim6} ></img>
                        <h1 className='text-center py-2  custom-color-black   fs-5 fw-semibold '>Öznür Kablo</h1>
                    </div>

                </Slider >
                <Contact />

            </div>
        </>
    );
};

export default Gecis;
