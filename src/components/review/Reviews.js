/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../context/UserContext';
import Loader from '../Loader';
import ReviewModal from './ReviewModal';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [show, setShow] = useState(false);
    const [data, setData] = useState('');
    const [update, setUpdate] = useState(false);
    const [load, setLoad] = useState(true);

    const { user } = useContext(AuthContext);

    const handleModal = (d) => {
        setShow(!show);
        setData(d);
    };

    const handleDelete = (sid, rid) => {
        const obj = {
            sid,
            rid,
        };

        fetch(`https://dream-travel.vercel.app/delete-review`, {
            method: 'PATCH',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                res.json()
                    .then(() => {
                        setUpdate(true);
                        toast.success('Deleted Successful!', {
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
    };

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (user?.uid) {
            fetch(`https://dream-travel.vercel.app/get-user-reviews/${user?.uid}`, {
                headers: {
                    Authorization: token,
                },
            })
                .then((res) => {
                    res.json()
                        .then((upRes) => {
                            if (upRes?.success) {
                                setReviews(upRes?.message);
                                setLoad(false);
                            }
                        })
                        .catch((err) => {
                            console.log(err.message);
                        });
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
        setUpdate(false);
    }, [update]);

    let renderElement = (
        <div className="container-fluid min-vh-100 overflow-hidden" id="myReviews">
            <ToastContainer />
            {show && (
                <ReviewModal
                    datas={data}
                    handleModal={handleModal}
                    state={show}
                    setUpdate={setUpdate}
                />
            )}
            <div className="container" id="myReviewsContent">
                {reviews.length > 0 ? (
                    <table className="table" id="reviewTable">
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Reviews</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviews?.map((res) =>
                                res?.reviews?.map((revRes) => (
                                    <tr key={revRes?._id}>
                                        <td>{revRes?.serviceName}</td>
                                        <td className="text-start">{revRes?.review}</td>
                                        <td>
                                            <div className="container-fluid d-flex gap-3 justify-content-center align-items-center responsive-icons">
                                                <span
                                                    className="table-review-edit-icon"
                                                    role="presentation"
                                                    onClick={() => handleModal(revRes)}
                                                >
                                                    <i className="fa-solid fa-pen-to-square" />
                                                </span>
                                                <span
                                                    className="table-review-delete-icon"
                                                    role="presentation"
                                                    onClick={() =>
                                                        handleDelete(revRes?.serviceId, revRes?._id)
                                                    }
                                                >
                                                    <i className="fa-solid fa-trash" />
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                ) : (
                    <h4 id="no-review">No reviews were added</h4>
                )}
            </div>
        </div>
    );

    if (load) {
        renderElement = <Loader />;
    }
    return renderElement;
}
