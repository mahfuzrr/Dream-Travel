import { useEffect } from 'react';
import Footer from '../components/footer/Footer';
import MyService from '../components/my-service/MyService';
import Navbar from '../components/navbar/Navbar';

export default function MyServicePage() {
    useEffect(() => {
        document.title = 'My Service';
    }, []);
    return (
        <>
            <Navbar />
            <MyService />
            <Footer />
        </>
    );
}
