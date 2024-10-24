import React from 'react'
import { useParams } from 'react-router-dom'
import BlogDesign from './BlogDesign';
import BlogDetailDesign from './BlogDetailDesign';
import { bloglar } from './blogData'
import { useEffect } from 'react';
const BlogDetail = () => {


    useEffect(() => {
        window.scrollTo(0, 0);

    }, []);
    const params = useParams();
    console.log(params)
    return (
        <>
            {
                bloglar && bloglar.map(blog => {
                    if (params.id == blog.id) {

                        return <BlogDetailDesign blog={blog} />

                    }
                })
            }

        </>
    )
}

export default BlogDetail