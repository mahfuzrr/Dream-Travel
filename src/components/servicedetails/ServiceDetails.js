import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import userImage from '../../assets/user.png';
import { AuthContext } from '../../context/UserContext';

export default function ServiceDetails() {
    const [data, setData] = useState('');

    const { id } = useParams();

    const { user } = useContext(AuthContext);
    const location = useLocation();

    useEffect(() => {
        fetch(`http://localhost:5000/get-service-details/${id}`)
            .then((res) => {
                res.json()
                    .then((upRes) => {
                        setData(upRes?.message);
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [id]);
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
                        <>
                            <div className="container p-0" id="review-box">
                                <textarea className="form-control" rows="5" />
                                <button type="button" className="btn custom-pos-reviews-btn">
                                    Post
                                </button>
                            </div>

                            <div className="container" id="all-reviews">
                                {/* <!-- single-review  --> */}
                                <div className="container d-flex align-items-start single-review">
                                    <div className="container single-review-dp">
                                        <img src={userImage} className="img-fluid" alt="user-dp" />
                                    </div>
                                    <div className="container single-review-des">
                                        <p className="m-0 single-review-username">
                                            Mahfuzur Rahman <span>(2 minutes ago)</span>
                                        </p>
                                        <p className="m-0 single-review-original">
                                            There are many variations of passages of Lorem Ipsum
                                            available, but the majority have suffered alteration in
                                            some form, by injected humour, or randomised words which
                                            don&apos;t look even slightly believable. If you are
                                            going to use a passage of Lorem Ipsum, you need to be
                                            sure there isn&apos;t anything embarrassing hidden in
                                            the middle of text
                                        </p>
                                    </div>
                                </div>

                                {/* <!-- single-review  --> */}
                                <div className="container d-flex align-items-start single-review">
                                    <div className="container single-review-dp">
                                        <img src={userImage} className="img-fluid" alt="user-dp" />
                                    </div>
                                    <div className="container single-review-des">
                                        <p className="m-0 single-review-username">
                                            Mahfuzur Rahman <span>(2 minutes ago)</span>
                                        </p>
                                        <p className="m-0 single-review-original">
                                            There are many variations of passages of Lorem Ipsum
                                            available, but the majority have suffered alteration in
                                            some form, by injected humour, or randomised words which
                                            don&apos;t look even slightly believable. If you are
                                            going to use a passage of Lorem Ipsum, you need to be
                                            sure there isn&apos;t anything embarrassing hidden in
                                            the middle of text
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- single-review  --> */}
                                <div className="container d-flex align-items-start single-review">
                                    <div className="container single-review-dp">
                                        <img src={userImage} className="img-fluid" alt="user-dp" />
                                    </div>
                                    <div className="container single-review-des">
                                        <p className="m-0 single-review-username">
                                            Mahfuzur Rahman <span>(2 minutes ago)</span>
                                        </p>
                                        <p className="m-0 single-review-original">
                                            There are many variations of passages of Lorem Ipsum
                                            available, but the majority have suffered alteration in
                                            some form, by injected humour, or randomised words which
                                            don&apos;t look even slightly believable. If you are
                                            going to use a passage of Lorem Ipsum, you need to be
                                            sure there isn&apos;t anything embarrassing hidden in
                                            the middle of text
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p className="m-0 service-review-warn">
                            You need to log in to post your reviews.
                            <Link to="/login" state={{ from: location }} replace className="ms-2">
                                LogIn
                            </Link>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
