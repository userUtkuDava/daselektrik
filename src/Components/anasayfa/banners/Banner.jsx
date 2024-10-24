import React from 'react'
import './banner.css'

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner ">
                <div className="carousel-item active" id="slide-1">
                    <img src="src/Components/anasayfa/banners/img/slide-1.avif" className="d-block  w-100" alt="..."></img>
                    <div className='anabaslik'>
                        <h1 >DAS <span className='vurgubaslik'>ELEKTRİK</span></h1>
                        <p className='baslik-aciklamasi '>Güven Verilmez Kazanılır</p>
                    </div>
                    <div className="carousel-caption d-none d-md-block" id="slide-aciklama">

                    </div>
                </div>
                <div className="carousel-item">
                    <img src="src/Components/anasayfa/banners/img/slide-2.jpg" className="d-block w-100" alt="..."></img>
                    <div className="carousel-caption  d-md-block" id="slide-aciklama">
                        <h3>Şalt Malzemeleri</h3>
                        <p className='d-none'>Uygun fiyat & Kaliteli Hizmet</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://img.freepik.com/free-photo/modern-living-room-interior-with-large-tv-screen-displaying-home-automation-system_9975-33164.jpg?t=st=1729687795~exp=1729691395~hmac=e4a0e16a37a1dd81617c9c4cdfd9595f93e2f711d8ba0443da51ac401439ba0d&w=1380  " className="d-block w-100" alt="..."></img>
                    <div className="carousel-caption  d-md-block" id="slide-aciklama">
                        <h3>Ev Aydınlatma Ürünleri</h3>
                        <p className=''>Ev, ofis ve iş yerleri için aydınlatma çözümleri.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon btn-banner" aria-hidden="true"></span>
                <span className="visually-hidden ">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon btn-banner" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Banner