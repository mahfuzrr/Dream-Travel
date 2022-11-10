export default function SingleReview({ data }) {
    return (
        <div className="container d-flex align-items-start single-review">
            <div className="container single-review-dp">
                <img
                    referrerPolicy="no-referrer"
                    src={data?.photoURL}
                    className="img-fluid"
                    alt="user"
                />
            </div>
            <div className="container single-review-des">
                <p className="m-0 single-review-username">{data?.userName}</p>
                <p className="m-0 single-review-original">{data?.review}</p>
            </div>
        </div>
    );
}
