import { useEffect } from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import ServicesPage from '../components/servicePage/ServicePage';

export default function Service() {
    useEffect(() => {
        document.title = 'Services';
    }, []);
    return (
        <>
            <Navbar />
            <ServicesPage />
            <Footer />
        </>
    );
}
