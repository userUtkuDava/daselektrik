import React from 'react'
import { useEffect } from 'react';
import BlogDesign from './BlogDesign';
import PageSmallNav from '../../page-nav-small/PageSmallNav';
import titleBg from '../images/blog/blogBg.jpg'
import './blog.css'
import AllGetBlog from './AllGetBlog';
import Footer from '../../footer/Footer';

const Blog = () => {

    useEffect(() => {
        window.scrollTo(0, 0);

    }, []);
    return (
        <>
            <div className='page-big-title'>
                <img src={titleBg}></img>
            </div>
            <div className='container blog-main'>
                <PageSmallNav currentPage="blog" />
                <h3 className='title-blog'>Blog</h3>

                <AllGetBlog />

            </div>
        </>
    )
}

export default Blog