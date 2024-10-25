import React from 'react'
import './info.css'
import { PiWhatsappLogoThin } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";


const İnfo = () => {
  return (
    <>
      <div className='container-fluid info-container d-flex flex-row'>
        <div className='d-flex info-content'>
          <div className='col mail-info-content d-flex align-items-center'>
            <a href='#' className=''> daselektrik.com <CiMail className=' ms-1 mb-1 info-icons' /></a>
          </div>
          <div className='col phone-info-content d-flex align-items-center'>
            <a href='tel:05533211188' className='ms-2'>
              0553 321 11 88 <CiPhone className='ms-1 mb-1 info-icons' />
            </a>
          </div>
          <div className='col whatsapp-info-content d-flex align-items-center'>
            <a href='https://wa.me/905533211188' target='_blank' className=''>
              Whatsapp
            </a>
            <PiWhatsappLogoThin className='info-icons d-block ms-1' />
          </div>
        </div>
      </div >


    </>
  )
}

export default İnfo