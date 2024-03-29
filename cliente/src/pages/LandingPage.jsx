/* The code is a React functional component called `LandingPage`. It imports various components from
different files and renders them in the return statement. */
import React, { useEffect, useState } from 'react';
import NavBar from '../components/atoms/NavBar';
import Carousel from '../components/atoms/Carrousel';
import Footer from '../components/atoms/Footer';
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
    /* The code block is using React hooks to create a state variable `showScrollButton` and a function
    `setShowScrollButton` to update its value. The initial value of `showScrollButton` is set to
    `false`. */
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <NavBar />
            <Carousel />
            <CircleCard />
            <PorQuePrediction />
            <MomentoERP />
            <ImplementacionPrediction />
            <Nosotros />
            <Beneficios />
            <PruebaDeSistema />
            <VideoPrediction />
            <Card />
            <ContactUs />
            <Footer />
            {showScrollButton && (
                <button className="scroll-button" onClick={scrollToTop}>
                    /\
                </button>
            )}
        </>
    );
}

export default LandingPage;
