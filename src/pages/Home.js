import { useContext, useEffect, useState } from 'react';
import Footer from '../components/footer/Footer';
import ProcessSection from '../components/home/ProcessSection';
import ServiceSection from '../components/home/ServiceSection';
import Slider from '../components/home/Slider';
import SubscriptionSection from '../components/home/SubscriptionSection';
import Loader from '../components/Loader';
import Navbar from '../components/navbar/Navbar';
import { AuthContext } from '../context/UserContext';

export default function Home() {
    const [data, setData] = useState([]);
    const { loading, user } = useContext(AuthContext);

    useEffect(() => {
        if (user?.uid) {
            fetch(`http://localhost:5000/get-services/${user?.uid}`)
                .then((res) => {
                    res.json().then((upRes) => {
                        if (upRes?.success) {
                            setData(upRes?.message);
                        }
                    });
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
        document.title = 'Home';
    }, [user]);

    let element = <Loader />;
    if (!loading) {
        element = (
            <>
                <Navbar />
                <Slider />
                <ServiceSection data={data} />
                <ProcessSection />
                <SubscriptionSection />
                <Footer />
            </>
        );
    }
    return element;
}
