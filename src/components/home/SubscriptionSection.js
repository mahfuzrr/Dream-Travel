import emailImage from '../../assets/Email campaign-pana.svg';

export default function SubscriptionSection() {
    return (
        <div className="container-fluid" id="email-subscription">
            <div className="container mt-4 pb-lg-4" id="subscription-content">
                <h5>Subscribe</h5>
                <div className="container d-flex gap-5" id="subscription-bothSide">
                    <div className="container" id="subscription-leftSide">
                        <img src={emailImage} className="img-fluid" alt="email" />
                    </div>
                    <div
                        className="container d-flex flex-column justify-content-center"
                        id="subscription-rightSide"
                    >
                        <h4>Don&apos;t miss any updates !</h4>
                        <p className="m-0">
                            Get the latest news and best deals in your inbox everyday
                        </p>
                        <input
                            className="form-control"
                            type="email"
                            id="subscription-email"
                            placeholder="Email"
                        />
                        <button type="button" className="btn" id="subscription-btn">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
