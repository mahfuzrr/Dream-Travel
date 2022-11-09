import serviceCardImage from '../../assets/photo-1.jpg';

export default function ServiceCard() {
    return (
        <div className="container ms-lg-0 col-3 service-card">
            {/* <!-- Image --> */}
            <div className="container service-image">
                <img className="img-fluid" src={serviceCardImage} alt="serviceImage" />
            </div>
            {/* <!-- Details --> */}
            <div className="container service-short-desc">
                <p className="service-short-title m-0">Data Structure</p>
                <p className="service-description m-0">
                    <span className="rev">Review:</span>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                    in a piece of classical Latin.
                </p>
                <p className="service-short-dollar m-0">Price: $50.5</p>
                <button type="button" className="btn service-short-btn">
                    View Details
                </button>
            </div>
        </div>
    );
}
