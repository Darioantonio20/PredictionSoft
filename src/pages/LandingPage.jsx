import React, { useState, useEffect } from 'react';
import NavBar from '../components/atoms/NavBar';

import Carousel from '../components/atoms/Carrousel';
import '../assets/style/LandingPage.css';
import Footer from '../components/atoms/Footer';
import Section2 from '../components/molecules/Section2';

function LandingPage() {
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2258);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <div className="containercito align-items-center">
                    <div className="loadercito mb-5 mt-5"></div>
                    <div className="loader mt-5"></div>
                </div>
            ) : (
                <>
                    <NavBar/>
                    <Carousel/>
                    <Section2/>
                 
                    <Footer/>
                </>
            )}
        </>
    );
}

export default LandingPage;
