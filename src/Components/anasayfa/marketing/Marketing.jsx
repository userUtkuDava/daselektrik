import React from 'react'
import { useEffect } from 'react';
import './marketing.css'
import { BiSolidPhone } from "react-icons/bi";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Marketing = () => {


    useEffect(() => {
        AOS.init({ duration: 900 }); // Animasyon süresi
        AOS.init();
        window.addEventListener('resize', AOS.refresh); // Ekran boyutu değiştiğinde AOS'u yenile

        return () => {
            window.removeEventListener('resize', AOS.refresh);
        };
    }, []);


    return (
        <>

            <div className='marketing-container'>
                <div className='row'>
                    <div className='marketing-text-container col-md-7'>
                        <div className='marketing-text-content' data-aos='slide-right' >
                            <h1 className='marketing-title'> Toptan Elektrik Malzemeleriyle<br></br> <span className='vurgu'>Güçlü Çözümler Sunuyoruz</span>  </h1>

                            <p>

                                Elektrik sektöründe yılların verdiği deneyimle, toptan elektrik malzemeleri satışında lider konumdayız. Geniş ürün yelpazemizle, ihtiyacınıza uygun kaliteli malzemeleri en uygun fiyatlarla sunuyoruz. Uzman ekibimiz, sektördeki yenilikleri takip ederek, sizlere en iyi hizmeti sağlamak için sürekli çalışmaktadır.
                            </p>



                            <p>
                                Müşterilerimize sunduğumuz ürünlerle birlikte, iş süreçlerinizi kolaylaştıracak etkili çözümler üretiyoruz. Toptan alım avantajlarından yararlanarak, projenizde maliyetleri düşürebilir ve verimliliğinizi artırabilirsiniz. Bizimle iletişime geçerek, elektrik malzemelerinizin ihtiyaçlarını en iyi şekilde karşılayabilirsiniz.
                            </p>
                            <button className='custom-bg-red btn btn-lg custom-color-white   rounded shadow btn-lg  mt-3'>
                                <BiSolidPhone className='mb-1' /> 0212 568 70 81
                            </button>
                        </div>
                    </div>
                    <div className='marketing-images-container col-md-5 ' data-aos={window.innerWidth > 767 ? 'slide-left' : undefined}>
                        <div className='marketing-images'>
                            <img src='https://hasbelagac.com/wp-content/uploads/kablo-makara-fiyati.jpg'></img>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Marketing