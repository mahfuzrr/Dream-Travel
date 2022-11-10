/* eslint-disable no-underscore-dangle */
import { useNavigate } from 'react-router-dom';

export default function ServiceCard({ data }) {
    const navigate = useNavigate();

    const resizeDesc = (str) => str?.slice(0, 200);

    const handleRedirect = (id) => {
        navigate(`/services/${id}`);
    };

    return (
        <div className="container ms-lg-0 col-3 service-card">
            {/* <!-- Image --> */}
            <div className="container service-image">
                <img className="img-fluid" src={data?.photoURL} alt="serviceImage" />
            </div>
            {/* <!-- Details --> */}
            <div className="container service-short-desc">
                <p className="service-short-title m-0">{data?.title}</p>
                <p className="service-description m-0">
                    <span className="rev">Description:</span>
                    {resizeDesc(data?.description)}
                </p>
                <p className="service-short-dollar m-0">Price: ${data?.price}</p>
                <button
                    type="button"
                    className="btn service-short-btn"
                    onClick={() => handleRedirect(data?._id)}
                >
                    View Details
                </button>
            </div>
        </div>
    );
}
