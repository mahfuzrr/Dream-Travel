import { useEffect } from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import ProfileWrapper from '../components/profile/ProfileWrapper';

export default function Profile() {
    useEffect(() => {
        document.title = 'Profile';
    }, []);

    return (
        <>
            <Navbar />
            <ProfileWrapper />
            <Footer />
        </>
    );
}
