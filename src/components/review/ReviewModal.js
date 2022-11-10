/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function ReviewModal({ datas, state, handleModal, setUpdate }) {
    const [review, setReview] = useState('');

    const handleUpdate = () => {
        const obj = {
            review,
            sid: datas?.serviceId,
            rid: datas?._id,
        };

        fetch('https://dream-travel.vercel.app/update-review', {
            method: 'PATCH',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                res.json()
                    .then(() => {
                        toast.success('Updated Successful!', {
                            position: toast.POSITION.TOP_RIGHT,
                            autoClose: 1000,
                        });
                    })
                    .catch((err) => {
                        toast.error(err.message, {
                            position: toast.POSITION.TOP_RIGHT,
                            autoClose: 1000,
                        });
                    });
            })
            .catch((err) => {
                toast.error(err.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1000,
                });
            });
        setUpdate(true);
        handleModal();
    };

    useEffect(() => {
        setReview(datas?.review);
    }, []);

    return (
        <div className={`container p-0 ${state ? 'show' : 'hide'}`} id="reviewEditorModal">
            <div className="container-fluid p-0" id="innerEditor">
                {/* <!-- Upper --> */}
                <div className="container-fluid p-0 d-flex justify-content-around" id="upper-modal">
                    <div className="container" id="upper-modal-title">
                        <p className="m-0 w-100 d-flex justify-content-start">
                            {datas?.serviceName}
                        </p>
                    </div>
                    <div className="container d-flex justify-content-end" id="upper-modal-icon">
                        <span role="presentation" onClick={() => handleModal()}>
                            <i className="fa-solid fa-circle-xmark" />
                        </span>
                    </div>
                </div>
                {/* <!-- Upper --> */}
                <div className="container-fluid" id="below-modal">
                    <textarea
                        className="form-control"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        rows="5"
                    />
                    <button
                        type="button"
                        className="btn custom-modal-button"
                        onClick={() => handleUpdate()}
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
}
