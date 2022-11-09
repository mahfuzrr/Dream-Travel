import { useContext } from 'react';
import Footer from '../components/footer/Footer';
import ProcessSection from '../components/home/ProcessSection';
import ServiceSection from '../components/home/ServiceSection';
import Slider from '../components/home/Slider';
import SubscriptionSection from '../components/home/SubscriptionSection';
import Loader from '../components/Loader';
import Navbar from '../components/navbar/Navbar';
import { AuthContext } from '../context/UserContext';

export default function Home() {
    const { loading } = useContext(AuthContext);

    let element = <Loader />;
    if (!loading) {
        element = (
            <>
                <Navbar />
                <Slider />
                <ServiceSection />
                <ProcessSection />
                <SubscriptionSection />
                <Footer />
            </>
        );
    }
    return element;
}
