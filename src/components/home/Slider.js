import firstImage from '../../assets/photo-1.jpg';
import secondImage from '../../assets/photo-2.jpg';
import thirdImage from '../../assets/photo-3.jpg';

export default function Slider() {
    return (
        <div className="container-fluid overflow-hidden" id="slider-content">
            <div className="container" id="slider-inside">
                <div id="homecarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#homecarousel"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        />
                        <button
                            type="button"
                            data-bs-target="#homecarousel"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        />
                        <button
                            type="button"
                            data-bs-target="#homecarousel"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        />
                    </div>
                    <div className="carousel-inner" id="carousel-items">
                        <div className="carousel-item active custom-carousel-item">
                            <img
                                src={firstImage}
                                className="d-block w-100 h-100"
                                alt="firstImage"
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <p className="m-0">All you need to</p>
                                <h4>Expore Beautiful Places</h4>
                            </div>
                        </div>
                        <div className="carousel-item custom-carousel-item">
                            <img
                                src={secondImage}
                                className="d-block w-100 h-100"
                                alt="secondImage"
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <p className="m-0">All you need to</p>
                                <h4>Expore Beautiful Places</h4>
                            </div>
                        </div>
                        <div className="carousel-item custom-carousel-item">
                            <img src={thirdImage} className="d-block w-100" alt="thirdImage" />
                            <div className="carousel-caption d-none d-md-block">
                                <p className="m-0">All you need to</p>
                                <h4>Expore Beautiful Places</h4>
                            </div>
                        </div>
                    </div>
                    <p className="m-0" id="place">
                        Paris
                    </p>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#homecarousel"
                        data-bs-slide="prev"
                    >
                        <i className="fa-solid fa-circle-arrow-left" />
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#homecarousel"
                        data-bs-slide="next"
                    >
                        <i className="fa-solid fa-circle-arrow-right" />
                    </button>
                </div>
            </div>
        </div>
    );
}
