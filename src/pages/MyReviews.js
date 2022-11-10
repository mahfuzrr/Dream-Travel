import { useEffect } from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import Reviews from '../components/review/Reviews';

export default function MyReviews() {
    useEffect(() => {
        document.title = 'My Reviews';
    }, []);
    return (
        <>
            <Navbar />
            <Reviews />
            <Footer />
        </>
    );
}
