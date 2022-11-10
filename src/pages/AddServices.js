import { useEffect } from 'react';
import AddServiceForm from '../components/add-service/AddServiceForm';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

export default function AddServices() {
    useEffect(() => {
        document.title = 'SignUp';
    }, []);
    return (
        <>
            <Navbar />
            <AddServiceForm />
            <Footer />
        </>
    );
}
