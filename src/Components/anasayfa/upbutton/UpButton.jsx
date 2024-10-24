import React from 'react'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { PiArrowFatLineUp } from "react-icons/pi";
import { MdKeyboardArrowUp } from "react-icons/md";
const UpButton = () => {


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // Kaydırma hareketinin yumuşak olmasını sağlar
        });
    }


    return (
        <div><button onClick={scrollToTop} className='upbutton'>
            <MdKeyboardArrowUp className='mb-2' />
        </button></div>
    )
}

export default UpButton