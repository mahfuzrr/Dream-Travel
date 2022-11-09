import processImage from '../../assets/Processing-cuate.svg';

export default function ProcessSection() {
    return (
        <div className="container-fluid overflow-hidden" id="process-section">
            <div className="container mt-4" id="inside-process-section">
                <h5>Processes</h5>
                <p>
                    Through these steps enjoy your safe and dream travel with us.
                    <br />
                    We are always care about our clients.
                </p>
                <div className="container d-flex flex-column flex-lg-row" id="process-both-side">
                    <div className="container p-0  d-flex flex-column" id="process-section-left">
                        {/* <!-- Single list item --> */}
                        <div className="container d-flex mt-0 process-contents">
                            <div className="container process-contents-icon">
                                <span>
                                    <i className="fa-solid fa-clipboard-check" />
                                </span>
                            </div>
                            <div className="container process-contents-desc">
                                <p className="m-0 process-title">Book a Service</p>
                                <p className="m-0 process-desc">
                                    Book your service for a safe travel
                                </p>
                            </div>
                        </div>
                        {/* <!-- Single list item --> */}
                        <div className="container d-flex process-contents mt-4">
                            <div className="container process-contents-icon">
                                <span>
                                    <i className="fa-regular fa-credit-card" />
                                </span>
                            </div>
                            <div className="container process-contents-desc">
                                <p className="m-0 process-title">Pay Service Charge</p>
                                <p className="m-0 process-desc">
                                    Pay your service charge for better tour plan
                                </p>
                            </div>
                        </div>
                        {/* <!-- Single list item --> */}
                        <div className="container d-flex process-contents mt-4">
                            <div className="container process-contents-icon">
                                <span>
                                    <i className="fa-solid fa-bus" />
                                </span>
                            </div>
                            <div className="container process-contents-desc">
                                <p className="m-0 process-title">Enjoy your trip</p>
                                <p className="m-0 process-desc">Enjoy your dream trip with us</p>
                            </div>
                        </div>
                    </div>
                    <div className="container m-0 p-0" id="process-section-right">
                        <img src={processImage} className="img-fluid" alt="process" />
                    </div>
                </div>
            </div>
        </div>
    );
}
