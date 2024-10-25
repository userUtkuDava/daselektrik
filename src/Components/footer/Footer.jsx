import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import { MdLocalPhone } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
import logo from '../../assets/logodas.png'
const Footer = () => {

    return (
        <>

            <footer className="footer-04">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
                            <h2 className="footer-heading">
                                <a href="#" className="logo">

                                    <img className='bg-light rounded-2' src={logo}>
                                    </img>
                                </a>
                            </h2>
                            <p>

                                Das Elektrik, endüstriyel ve ticari alanlarda geniş bir elektrik ürünleri yelpazesi sunan bir toptan elektrikçi olarak sektördeki yerini sağlamlaştırmıştır.
                            </p>
                            <a href="hakkımızda">Daha Fazla <span className="ion-ios-arrow-round-forward"></span></a>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
                            <h2 className="footer-heading">Sayfalar</h2>
                            <ul className="list-unstyled">
                                <Link to={"//"}><li className="py-1 d-block text-light">Ana sayfa</li></Link>
                                <Link to={"/katalog"}><li className="py-1 d-block text-light">Ürünler</li></Link>
                                <Link to={"/blog"}><li className="py-1 d-block text-light">Blog</li></Link>
                                <Link to={"/hakkımızda"}><li className="py-1 d-block text-light">Hakkımızda</li></Link>
                                <Link to={"/iletisim"}><li className="py-1 d-block text-light">İletişim</li></Link>
                                <Link to={"/hizmetler"}><li className="py-1 d-block text-light">Hizmetlerimiz</li></Link>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
                            <h2 className="footer-heading">İletisim</h2>
                            <div className="tagcloud">
                                <div className=''>
                                    <p className='fw-bold text-light'><MdLocalPhone className='fs-3 p-2 mb-1 bg-dark text-light rounded-5 ' /> 0212 568 70 81</p>
                                    <p className='fw-bold text-light'><CiMail className='mb-1 text-light  bg-dark rounded-5 fs-3 p-2' /> daselektrik.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
                            <h2 className="footer-heading">Adres</h2>
                            <div>
                                <p className='text-light fw-bold'>
                                    Bağlar, semdal22@gmail.com, 34212 Bağcılar/İstanbul
                                </p>
                            </div>
                            <h2 className="footer-heading mt-5">Ziyaret Et</h2>
                            <div className='d-flex flex-row'>
                                <div className='m-2'>
                                    <img src={logo} className='bg-light rounded-5 p-2 cursor-pointer' width={55}></img>
                                </div>
                                <div className='m-2'>
                                    <img src='https://cdn-icons-png.freepik.com/512/13051/13051741.png?ga=GA1.1.382380607.1722269787' className='bg-light rounded-5 cursor-pointer' width={55}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-100 mt-5 border-top ">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-8">
                                <p className="copyright">
                                    © 2024 UTKU DAVA. Bu web sitesi üzerindeki tüm içerik ve tasarım, yazarın izni olmadan kullanılamaz.
                                </p>
                            </div>
                            <div className="col-md-6 col-lg-4 text-md-right">
                                <p className="mb-0 list-unstyled text-black fw-light">
                                    <strong className='fw-light'> Das elektrik toptan elektrik malzeme satışı</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>



        </>
    )
}

export default Footer