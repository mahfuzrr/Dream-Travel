import { useContext, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../context/UserContext';

/* eslint-disable jsx-a11y/label-has-associated-control */
export default function AddServiceForm() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [description, setDescription] = useState('');

    const { user } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const obj = {
            userId: user?.uid,
            email: user?.email,
            title,
            price,
            photoURL,
            description,
        };

        fetch('https://dream-travel.vercel.app/add-services', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                res.json()
                    .then((upRes) => {
                        setTitle('');
                        setPrice('');
                        setPhotoURL('');
                        setDescription('');
                        toast.success(upRes.message, {
                            position: toast.POSITION.TOP_RIGHT,
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                        toast.error(err.message, {
                            position: toast.POSITION.TOP_RIGHT,
                        });
                    });
            })
            .catch((err) => {
                console.log(err);
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
                            value={title}
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
                            value={price}
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
                            value={photoURL}
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
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                        <label className="form-label" htmlFor="descr">
                            Description
                        </label>
                    </div>

                    <button type="submit" className="btn custom-add-service-btn">
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
}
