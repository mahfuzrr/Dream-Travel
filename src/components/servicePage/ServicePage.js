/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader';

export default function ServicesPage() {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);

    const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate(`/services/${id}`);
    };

    const resizeDesc = (str) => str?.slice(0, 120);

    useEffect(() => {
        fetch('https://dream-travel.vercel.app/get-all-services')
            .then((res) => {
                res.json()
                    .then((upRes) => {
                        if (upRes?.success) {
                            setData(upRes?.message);
                        }
                        setLoad(false);
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    let element1 = (
        <div className="container-fluid overflow-hidden min-vh-100" id="all-services">
            <h4 className="mt-5">All Services</h4>
            <div className="container row gap-2" id="total-services">
                {data?.map((element) => (
                    <div key={element?._id} className="container ms-lg-0 col-3 service-card">
                        {/* <!-- Image --> */}
                        <div className="container service-image">
                            <PhotoProvider>
                                <PhotoView src={element?.photoURL}>
                                    <img
                                        className="img-fluid"
                                        src={element?.photoURL}
                                        alt="service"
                                    />
                                </PhotoView>
                            </PhotoProvider>
                        </div>
                        {/* <!-- Details --> */}
                        <div className="container service-short-desc">
                            <p className="service-short-title m-0">{element?.title}</p>
                            <p className="service-description m-0">
                                <span className="rev">Description:</span>
                                {`${resizeDesc(element?.description)}...`}
                            </p>
                            <p className="service-short-dollar m-0">Price: ${element?.price}</p>
                            <button
                                type="button"
                                className="btn service-short-btn"
                                onClick={() => handleNavigate(element?._id)}
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    if (load) {
        element1 = <Loader />;
    }

    return element1;
}
