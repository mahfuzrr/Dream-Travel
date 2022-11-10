/* eslint-disable no-underscore-dangle */
import { useNavigate } from 'react-router-dom';
import ServiceCard from './ServiceCard';

export default function ServiceSection({ data }) {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/services');
    };

    return (
        <div className="container-fluid overflow-hidden mb-5" id="home-services-section">
            <div className="container" id="home-services-all">
                <h5>Services</h5>
                <div
                    className="container ms-0 me-0 d-flex flex-column flex-lg-row gap-lg-0 gap-3 mt-5"
                    id="home-services-all-cards"
                >
                    {data?.map((element) => (
                        <ServiceCard key={element?._id} data={element} />
                    ))}
                </div>
                <button
                    type="button"
                    className="mt-4 ms-3 btn"
                    id="home-view-all"
                    onClick={handleNavigate}
                >
                    View All <i className="fa-solid fa-arrow-right" />
                </button>
            </div>
        </div>
    );
}
