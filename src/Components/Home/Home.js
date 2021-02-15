import React from 'react';
import banner from '../../images/banner.png'
import './Home.css'

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="text-center banner-image">
                <img className="img-fluid" src={banner} alt="" />
            </div>

            <div className="text-center py-4">
                <marquee direction="left" scrollamount="12">
                    <h1>Welcome to My School</h1>
                </marquee>
            </div>
        </div>
    );
};

export default Home;