/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../context/UserContext';
import ReviewModal from './ReviewModal';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [show, setShow] = useState(false);
    const [data, setData] = useState('');
    const [update, setUpdate] = useState(false);

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

        fetch(`http://localhost:5000/delete-review`, {
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
        if (user?.uid) {
            fetch(`http://localhost:5000/get-user-reviews/${user?.uid}`)
                .then((res) => {
                    res.json()
                        .then((upRes) => {
                            setReviews(upRes?.message);
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
    return (
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
            </div>
        </div>
    );
}
