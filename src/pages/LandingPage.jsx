import React, { useState, useEffect } from 'react';
import NavBar from '../components/atoms/NavBar';
import Carousel from '../components/atoms/Carrousel';
import Footer from '../components/atoms/Footer';
import Section2 from '../components/molecules/Section2';
import Card from '../components/atoms/Card';
import CircleCard from '../components/atoms/CircleCard';
import PorQuePrediction from '../components/atoms/PorQuePrediction';
import MomentoERP from '../components/atoms/MomentoERP';
import ImplementacionPrediction from '../components/atoms/ImplementasionPrediction';
import Nosotros from '../components/atoms/Nosotros';
import Beneficios from '../components/atoms/Beneficios';
import PruebaDeSistema from '../components/atoms/PruebaDeSistema';
import VideoPrediction from '../components/atoms/VideoPrediction';
import ContactUs from '../components/atoms/ContactUs';
import '../assets/style/LandingPage.css';

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
                    <CircleCard/>
                    <PorQuePrediction/>
                    <MomentoERP/>
                    <ImplementacionPrediction/>
                    <Nosotros/>
                    <Beneficios/>
                    <PruebaDeSistema/>
                    <VideoPrediction/>
                    <Card/>
                    <ContactUs/>
                    <Section2/>
                    <Footer/>
                </>
            )}
        </>
    );
}

export default LandingPage;
