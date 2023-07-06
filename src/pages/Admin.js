import { useEffect } from 'react';
import AdminWrapper from '../components/admin/AdminWrapper';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

export default function Admin() {
    useEffect(() => {
        document.title = 'Dashboard';
    }, []);

    return (
        <>
            <Navbar />
            <AdminWrapper />
            <Footer />
        </>
    );
}
