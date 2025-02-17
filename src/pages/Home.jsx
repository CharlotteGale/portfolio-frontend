import React from 'react';

import Header from '../components/Header.jsx';
import BannerImage from '../components/BannerImage.jsx';

import '../assets/styles/pages/Home.css';

const Home = () => {
    return (
        <div className='home-container'>
            <Header />
            <BannerImage />
        </div>
    )
}

export default Home