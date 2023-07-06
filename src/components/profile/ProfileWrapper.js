import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/UserContext';

export default function ProfileWrapper() {
    const { user } = useContext(AuthContext);

    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (user) {
            if (user?.uid === '9ZLupSJrgFO9KqgntwKfLfRrRgR2') {
                setName('Admin');
            } else setName(user?.displayName);

            setEmail(user?.email);
        }
    }, []);

    return (
        <div className="container" id="profile-container">
            <div className="main-body">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card profile-card bg-white">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img
                                        src={
                                            user?.photoURL
                                                ? user?.photoURL
                                                : 'https://bootdey.com/img/Content/avatar/avatar6.png'
                                        }
                                        alt="Admin"
                                        className="rounded-circle p-1 bg-primary"
                                        width="110"
                                    />
                                    <div className="mt-3">
                                        <h4>{name}</h4>
                                        <p className="text-secondary mb-1">{email}</p>
                                        {/* <p className="text-muted font-size-sm">Followed by 2k</p>
                                        <button type="button" className="btn btn-primary py-1 fs-6">
                                            Follow
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card profile-details-card">
                            <div className="card-body">
                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Full Name</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={email}
                                            disabled
                                        />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Photo URL</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={photo}
                                            onChange={(e) => setPhoto(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-3" />
                                    <div className="col-sm-9 text-secondary">
                                        <input
                                            type="button"
                                            className="btn btn-primary px-4"
                                            value="Save Changes"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
