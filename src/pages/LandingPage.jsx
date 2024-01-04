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


    return (
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
            <Footer/>
        </>
    );
}

export default LandingPage;
