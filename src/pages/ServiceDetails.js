import { useContext } from 'react';
import Footer from '../components/footer/Footer';
import Loader from '../components/Loader';
import Navbar from '../components/navbar/Navbar';
import ServiceDetails from '../components/servicedetails/ServiceDetails';
import { AuthContext } from '../context/UserContext';

export default function ServicesDetails() {
    const { loading } = useContext(AuthContext);
    let element = (
        <>
            <Navbar />
            <ServiceDetails />
            <Footer />
        </>
    );

    if (loading) element = <Loader />;

    return element;
}
