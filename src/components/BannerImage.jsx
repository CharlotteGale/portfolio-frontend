import React from 'react';
import bannerImage from '../assets/images/banner_image.png'
import '../assets/styles/components/BannerImage.css';

const BannerImage = () => {
    return (
        <div className='image-container'>
            <img src={bannerImage} alt="Banner" />
        </div>
    )
}

export default BannerImage