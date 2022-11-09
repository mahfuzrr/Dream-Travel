/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/UserContext';

export default function LeftSignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [urlError, setUrlError] = useState('');

    const { createUserUsingEmail, updateUser } = useContext(AuthContext);

    const navigate = useNavigate();

    function isValidHttpUrl(string) {
        let url;
        try {
            url = new URL(string);
        } catch (_) {
            return false;
        }
        return url.protocol === 'http:' || url.protocol === 'https:';
    }

    const handleCreateUser = (e) => {
        e.preventDefault();
        setUrlError('');

        if (avatar && !isValidHttpUrl(avatar)) {
            setUrlError('Provide a valid HTTPS URL!');
            return;
        }

        if (name && email && password) {
            createUserUsingEmail(email, password)
                .then((user) => {
                    updateUser(name, avatar)
                        .then((updatedUser) => {
                            navigate('/');
                        })
                        .catch((err) => {
                            setName('');
                            setEmail('');
                            setPassword('');
                            setAvatar('');
                            const str = err.message.substring(err.message.indexOf(':') + 1);
                            toast.warning(str, {
                                position: toast.POSITION.TOP_RIGHT,
                            });
                        });
                })
                .catch((er) => {
                    setName('');
                    setEmail('');
                    setPassword('');
                    setAvatar('');
                    const str = er.message.substring(er.message.indexOf(':') + 1);
                    toast.warning(str, {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                });

            setName('');
            setEmail('');
            setPassword('');
            setAvatar('');
        }
    };

    return (
        <div className="container me-lg-5 ps-5 pe-5 pt-4" id="left-signup">
            <div className="container" id="upper-signup">
                <h4 className="text-center">Create Account</h4>
            </div>
            <div className="container" id="below-signup">
                <form onSubmit={handleCreateUser} id="signup-form">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="signup-name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            name="signup-email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            name="signup-password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="signup-dp"
                            placeholder="Photo Url"
                            value={avatar}
                            onChange={(e) => setAvatar(e.target.value)}
                        />
                        {urlError && <p className="p-0">{urlError}</p>}
                    </div>
                    <button className="btn submit-btn" type="submit">
                        SignUp
                    </button>
                </form>
                <p className="mt-4 text-center" id="logInLink">
                    Already have an account?{' '}
                    <Link to="/login" className="link-sign">
                        LogIn
                    </Link>
                </p>
            </div>
        </div>
    );
}
