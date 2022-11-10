/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import SingleReview from './SingleReview';

export default function ServiceDetails() {
    const [data, setData] = useState('');
    const [review, setReview] = useState('');
    const [resReview, setResReview] = useState([]);
    const [isSubmit, setSubmit] = useState(false);

    const { id } = useParams();

    const { user } = useContext(AuthContext);
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (review.length === 0) {
            return;
        }

        const t = new Date().toLocaleTimeString();

        const obj = {
            uId: user?.uid,
            serviceName: data?.title,
            serviceId: id,
            userName: user?.displayName,
            photoURL: user?.photoURL,
            review,
            time: t,
            id,
        };

        fetch('http://localhost:5000/add-review', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                res.json()
                    .then((upRes) => {
                        setSubmit(true);
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
            })
            .catch((err) => {
                console.log(err.message);
            });

        setReview('');
    };

    useEffect(() => {
        fetch(`http://localhost:5000/get-service-details/${id}`)
            .then((res) => {
                res.json()
                    .then((upRes) => {
                        setData(upRes?.message);
                        setResReview(upRes?.message?.reviews);
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [id, isSubmit]);
    return (
        <div className="container-fluid overflow-hidden" id="servicePage">
            <div className="container" id="service-details">
                <div className="container" id="upper-cover">
                    <img src={data?.photoURL} className="img-fluid" alt="coverphoto" />
                </div>

                <div className="container" id="service-info">
                    <h5>{data?.title}</h5>
                    <p className="m-0 service-page-price">Price: ${data?.price}</p>
                    <p className="m-0 service-page-des-title">Description</p>
                    <p className="m-0 service-page-descr">{data?.description}</p>
                </div>

                <div className="container" id="service-page-review">
                    <p className="m-0 service-review-sect">Reviews</p>

                    {user?.uid ? (
                        <div className="container p-0" id="review-box">
                            <textarea
                                className="form-control"
                                rows="5"
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                            />
                            <button
                                type="button"
                                className="btn custom-pos-reviews-btn"
                                onClick={handleSubmit}
                            >
                                Post
                            </button>
                        </div>
                    ) : (
                        <>
                            <p className="m-0 service-review-warn">
                                You need to log in to post your reviews.
                                <Link
                                    to="/login"
                                    state={{ from: location }}
                                    replace
                                    className="ms-2"
                                >
                                    LogIn
                                </Link>
                            </p>
                            <div className="container" id="all-reviews">
                                {resReview?.map((res) => (
                                    <SingleReview data={res} key={res?._id} />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
