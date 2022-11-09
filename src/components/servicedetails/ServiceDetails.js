import coverPhoto from '../../assets/image 3.png';
import userImage from '../../assets/user.png';

export default function ServiceDetails() {
    return (
        <div className="container-fluid overflow-hidden" id="servicePage">
            <div className="container" id="service-details">
                <div className="container" id="upper-cover">
                    <img src={coverPhoto} className="img-fluid" alt="coverphoto" />
                </div>

                <div className="container" id="service-info">
                    <h5>Service Name</h5>
                    <p className="m-0 service-page-price">Price: $50</p>
                    <p className="m-0 service-page-des-title">Description</p>
                    <p className="m-0 service-page-descr">
                        There are many variations of passages of Lorem Ipsum available, but the
                        majority have suffered alteration in some form, by injected humour, or
                        randomised words which don&apos;t look even slightly believable. If you are
                        going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t
                        anything embarrassing hidden in the middle of text
                    </p>
                </div>

                <div className="container" id="service-page-review">
                    <p className="m-0 service-review-sect">Reviews</p>
                    <p className="m-0 service-review-warn d-none">
                        You need to log in to post your reviews.
                        <a href="/" className="ms-2">
                            LogIn
                        </a>
                    </p>
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
                                    There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration in some form, by
                                    injected humour, or randomised words which don&apos;t look even
                                    slightly believable. If you are going to use a passage of Lorem
                                    Ipsum, you need to be sure there isn&apos;t anything
                                    embarrassing hidden in the middle of text
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
                                    There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration in some form, by
                                    injected humour, or randomised words which don&apos;t look even
                                    slightly believable. If you are going to use a passage of Lorem
                                    Ipsum, you need to be sure there isn&apos;t anything
                                    embarrassing hidden in the middle of text
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
                                    There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration in some form, by
                                    injected humour, or randomised words which don&apos;t look even
                                    slightly believable. If you are going to use a passage of Lorem
                                    Ipsum, you need to be sure there isn&apos;t anything
                                    embarrassing hidden in the middle of text
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
