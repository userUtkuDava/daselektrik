import React from 'react'

const NotFound = () => {
    return (
        <div className='half-height d-flex flex-column align-items-center justify-content-center'>
            <h1 className='fw-bold'>404</h1>
            <h3>Sayfa Bulunamadı</h3>
            <a href='/' className='fw-bold mt-5 py-2 px-5 btn btn-dark'>Ana Sayfaya Git</a>
        </div>

    )
}

export default NotFound