import { Component } from 'react';
import React, { useEffect, useState } from 'react'
import './menu.css'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Blog from '../pages/blog/Blog';
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { SiWebmoney } from "react-icons/si";
import { FcBusinessContact } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { ImBlog } from "react-icons/im";
import { GoCrossReference } from "react-icons/go";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiStorefrontBold } from "react-icons/pi";
import { BsLink } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai"
import hdlogo from '../../assets/logoHdDas.png'


const Menu = () => {


    const [mobilebBtn, setMobilBtn] = useState('bi bi-list');
    const [menuActive, setMenuActive] = useState('mobile-menu');

    const toggleIcon = () => {
        setMobilBtn(prevClass => prevClass === 'bi bi-list' ? 'bi bi-x' : 'bi bi-list');

        setMenuActive(prevClass => prevClass === 'mobile-menu-active' ? 'mobile-menu' : 'mobile-menu-active');
        console.log(menuActive);
        console.log(mobilebBtn)
    };

    return (

        <>


            <nav className='nav '>

                <div className='menu-logo '>
                    <img
                        src={hdlogo}
                        alt='Das Elektrik Logo'
                        title='Das Elektrik'
                    >

                    </img>

                </div>


                <div >

                    <ul id='navbar' >
                        <Link to={"//"}><li className="fw-bold"><MdHome className='nav-ico' />Ana sayfa</li></Link>
                        <Link to={"/katalog"}><li className="fw-bold"><AiFillProduct className='nav-ico' />Katalog</li></Link>
                        <Link to={"/blog"}><li className="fw-bold"><ImBlog className='nav-ico' />Blog</li></Link>
                        <Link to={"/hakkımızda"}><li className="fw-bold"><GoCrossReference className='nav-ico' />Hakkımızda</li></Link>
                        <Link to={"/iletisim"}><li className="fw-bold"><RiCustomerService2Fill className='nav-ico' />İletişim</li></Link>
                        <Link to={"/hizmetler"}><li className="fw-bold"><RiServiceLine className='nav-ico' />Hizmetlerimiz</li></Link>

                    </ul>
                </div>

                <div className=''>
                    <button className='mobile-menu-button' onClick={toggleIcon}>
                        <i class={mobilebBtn}></i>
                    </button>

                </div>

            </nav>
            <div className={menuActive}>
                <ul className='deneme '>
                    <Link to={"/"} onClick={toggleIcon}>
                        <li>
                            <MdHome className='nav-ico' />
                            Ansayafa
                        </li>
                    </Link>
                    <Link to={"/katalog"} onClick={toggleIcon}>
                        <li>
                            <AiFillProduct className='nav-ico' />
                            Katalog
                        </li>
                    </Link>
                    <Link to={"/blog"} onClick={toggleIcon}>
                        <li>
                            <ImBlog className='nav-ico' />
                            Blog
                        </li>
                    </Link>
                    <Link to={"/hakkımızda"} onClick={toggleIcon}>
                        <li>
                            <GoCrossReference className='nav-ico' />
                            Hakkımızda
                        </li>
                    </Link>
                    <Link to={"/İletisim"} onClick={toggleIcon}>
                        <li>
                            <RiCustomerService2Fill className='nav-ico' />
                            iletisim
                        </li>
                    </Link>
                    <Link to={"/hizmetler"} onClick={toggleIcon}>
                        <li>
                            <RiServiceLine className='nav-ico' />
                            Hizmetler
                        </li>
                    </Link>
                    <Link to={"hizmetler"} onClick={toggleIcon}><li className='teklif text-danger p-0'> <BsBoxArrowInUpRight className='nav-ico' />
                        Hemen Alışveriş
                    </li></Link>
                    <button id='menu-close-btn' className='mobile-menu-button' onClick={toggleIcon}>
                        <i className={mobilebBtn} ></i>
                    </button>

                </ul>

            </div>
        </>
    )

}


export default Menu