import { useEffect } from 'react';
import BlogSection from '../components/blog/BlogSection';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

export default function Blog() {
    useEffect(() => {
        document.title = 'Blog';
    }, []);
    return (
        <>
            <Navbar />
            <BlogSection />
            <Footer />
        </>
    );
}
