import React from 'react'
import './contact.css'
import { PiCursorClickDuotone } from "react-icons/pi";
import { AiFillStar } from "react-icons/ai";
import { BsLightningFill } from "react-icons/bs";
const contact = () => {
    return (
        <>


            <div className='quality-container' data-aos='slide-up'>

                <p>Das Elektrik <BsLightningFill className='text-light custom-bg-red rounded p-1 fs-5 mb-1 ms-1' /></p>
                <h2 className='p-2  fs-5 fw-bold'>Güven Verilmez Kazanılır!</h2>

                <h1> <span className='vurgu' >2000+</span>
                    Fazla ödüllü ajans ve firmanın güvendiği
                </h1>
                <h1>
                    Toptan Elektrik Malzemeleri Satışında Türkiyenin Önder Şirketi
                </h1>

                <div className='quality-puan-container'>

                    <div className='quality-puan-content'>
                        <div className='quality-count'>
                            <h2>4.9</h2>
                        </div>
                        <div className='d-flex flex-column quality-description'>
                            <div>
                                <h2>
                                    <AiFillStar className='star-icon' />
                                    <AiFillStar
                                        className='star-icon' />
                                    <AiFillStar className='star-icon' />
                                    <AiFillStar
                                        className='star-icon' />
                                    <AiFillStar
                                        className='star-icon' />
                                    <h2>Ürün Yelpazesi</h2>

                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className='quality-puan-content'>
                        <div className='quality-count'>
                            <h2>5.0</h2>
                        </div>
                        <div className='d-flex flex-column quality-description'>
                            <div>
                                <h2>
                                    <AiFillStar className='star-icon' />
                                    <AiFillStar
                                        className='star-icon' />
                                    <AiFillStar className='star-icon' />
                                    <AiFillStar
                                        className='star-icon' />
                                    <AiFillStar
                                        className='star-icon' />
                                    <h2>Google Yorumlar</h2>

                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className='quality-puan-content'>
                        <div className='quality-count'>
                            <h2>4.8</h2>
                        </div>
                        <div className='d-flex flex-column quality-description'>
                            <div>
                                <h2>
                                    <AiFillStar className='star-icon' />
                                    <AiFillStar
                                        className='star-icon' />
                                    <AiFillStar className='star-icon' />
                                    <AiFillStar
                                        className='star-icon' />
                                    <AiFillStar
                                        className='star-icon' />
                                    <h2>Müşteri Memnuniyeti</h2>

                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default contact