import React from 'react'
import './blog.css'
import { useNavigate } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";
const BlogDesign = ({ blog }) => {
    const { id, katagori, baslik, description, tarih, yazar, url } = blog;
    const navigate = useNavigate();
    return (

        <>
            <div className='container col-sm-12 content-box'>
                <div className='row '>
                    <div className='blog-img col-sm-12'>

                        <img src={url} alt="" />
                    </div>
                    <div className='blog-detail '>
                        <p className='catagory'>{katagori}</p>
                        <h2 className='baslik'>{baslik}</h2>



                        <p className='metin'>{description}</p>
                        <h6 className='blog-tarih'>{tarih}</h6>
                        <div className='user-info flex-row'>
                            <div className='user-box'>
                                <img className='user-img' src='https://tr.vpnmentor.com/wp-content/uploads/2022/11/Hendrik-Human-150x150.jpg'></img>
                                <p className='user-name'>
                                    {yazar}
                                </p>
                            </div>
                            <div>
                                <a className='detail'
                                    onClick={
                                        () => navigate(id)
                                    }>
                                    Detayları incele <IoIosArrowForward className='arrow' />

                                </a>

                            </div>
                        </div>



                    </div>

                </div>
            </div >


        </>

    )
}

export default BlogDesign