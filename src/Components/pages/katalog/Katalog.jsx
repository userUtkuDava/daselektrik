import React from 'react'
import './katalog.css'
import pdf1 from './pdfs/mutlusan.pdf'
import pdf2 from './pdfs/viko.pdf'

import { useState } from 'react'
import AllGetMarka from './AllGetMarka'
import PageSmallNav from '../../page-nav-small/PageSmallNav'
import titleBg from '../images/katalog/katalogBg.jpg'
import { useEffect } from 'react'

const Katalog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Şu anki tarihi al
    const now = new Date();

    // Yıl, ay ve günü ayır
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate();
    const showPdf = () => {
        console.log(marka)
    }

    const [pdf, setPdf] = useState(pdf1)
    const mutlusan = () => {
        setPdf(pdf1);
    }
    const viko = () => {
        setPdf(pdf2);
    }


    return (
        <>

            <div className='page-big-title'>
                <img src={titleBg}></img>
            </div>
            <div className='container'>


            </div>





            <div className='container-fluid main'>
                <div className="row">
                    <div className='col-md-12  b'>
                        <h1 className='text-center mt-5 p-1'>Fiyat Listesi <br></br>

                            <p className='title-description'>Fiyat listemizle sunduğumuz hizmetlerin maliyetlerini kolayca inceleyin. Şeffaf ve rekabetçi fiyatlarımızla kaliteli elektrik çözümlerine ulaşın. İhtiyacınıza uygun seçenekler burada sizi bekliyor.<br></br> Güncel Tarih:<span className='tarih'> {month} / {year} </span>   </p>
                        </h1>
                        <div className='markalar'>


                            <AllGetMarka />


                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Katalog