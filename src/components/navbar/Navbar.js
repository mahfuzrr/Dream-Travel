import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/UserContext';

export default function Navbar() {
    const [url, setUrl] = useState('');

    const { user, logOut } = useContext(AuthContext);

    const userImage = 'https://bootdey.com/img/Content/avatar/avatar6.png';

    useEffect(() => {
        setUrl(window.location.pathname);
    }, []);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathaname || '/login';

    const handleLogIn = () => {
        navigate(from, { replace: true });
    };

    const handleLogOut = () => {
        logOut()
            // eslint-disable-next-line no-unused-vars
            .then((result) => {
                navigate('/');
            })
            .catch((err) => {
                toast.error(err.message, {
                    position: toast.POSITION.TOP_RIGHT,
                });
            });
    };

    const handleSignUp = () => {
        navigate('/register');
    };

    return (
        <nav className="navbar navbar-expand-lg" id="navbar">
            <div className="container mt-lg-4">
                <Link className="navbar-brand" to="/">
                    Dream Travel
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navToggler"
                    aria-controls="navToggler"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fa-solid fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navToggler">
                    <ul className="navbar-nav ms-auto me-md-3 mb-2 mb-lg-0" id="navItem">
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${url === '/' && 'active'}`}
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${url === '/services' && 'active'}`}
                                to="/services"
                            >
                                Services
                            </Link>
                        </li>
                        {user?.uid && (
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${url === '/my-reviews' && 'active'}`}
                                    to="/my-reviews"
                                >
                                    My Reviews
                                </Link>
                            </li>
                        )}
                        {user?.uid && (
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${url === '/add-service' && 'active'}`}
                                    to="/add-service"
                                >
                                    Add services
                                </Link>
                            </li>
                        )}
                        {user?.uid && (
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${url === '/my-services' && 'active'}`}
                                    to="/my-services"
                                >
                                    My Services
                                </Link>
                            </li>
                        )}
                        {user?.uid === '9ZLupSJrgFO9KqgntwKfLfRrRgR2' && (
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${url === '/dashboard' && 'active'}`}
                                    to="/dashboard"
                                >
                                    Dashboard
                                </Link>
                            </li>
                        )}
                    </ul>
                    <ul className="navbar-nav ms-lg-5 gap-lg-4" id="logInSection">
                        {user?.uid ? (
                            <>
                                <li
                                    className="nav-item user-nav-dp"
                                    onClick={() => {
                                        navigate('/my-profile');
                                    }}
                                    role="presentation"
                                >
                                    <img
                                        referrerPolicy="no-referrer"
                                        src={user?.photoURL ? user?.photoURL : userImage}
                                        alt="userdp"
                                    />
                                </li>
                                <li className="nav-item">
                                    <button
                                        type="button"
                                        className="btn"
                                        id="logOut-nav"
                                        onClick={handleLogOut}
                                    >
                                        LogOut
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <button
                                        type="button"
                                        className="btn"
                                        id="logIn-nav"
                                        onClick={handleLogIn}
                                    >
                                        LogIn
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="btn"
                                        type="button"
                                        id="signup-nav"
                                        onClick={handleSignUp}
                                    >
                                        SignUp
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
