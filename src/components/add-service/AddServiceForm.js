import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* eslint-disable jsx-a11y/label-has-associated-control */
export default function AddServiceForm() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const obj = {
            title,
            price,
            photoURL,
            description,
        };

        fetch('http://localhost:5000/add-services', { method: 'POST', body: obj })
            .then(() => {
                toast.success('Service Added Successfully!', {
                    position: toast.POSITION.TOP_RIGHT,
                });
            })
            .catch((err) => {
                toast.error(err.message, {
                    position: toast.POSITION.TOP_RIGHT,
                });
            });
    };

    return (
        <div className="container-fluid overflow-hidden min-vh-100" id="add-service-content">
            <ToastContainer />
            <div className="container" id="add-service-all">
                <h4 className="text-center">Add a service</h4>
                <form onSubmit={handleSubmit} id="add-service-form">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                        <label className="form-label" htmlFor="title">
                            Title
                        </label>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="price"
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                        <label className="form-label" htmlFor="price">
                            Price
                        </label>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="url"
                            onChange={(e) => setPhotoURL(e.target.value)}
                            required
                        />
                        <label className="form-label" htmlFor="url">
                            Photo Url
                        </label>
                    </div>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            id="descr"
                            rows="3"
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                        <label className="form-label" htmlFor="descr">
                            Description
                        </label>
                    </div>

                    <button type="button" className="btn custom-add-service-btn">
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
}
