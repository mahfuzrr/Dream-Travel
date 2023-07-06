import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import Loader from './Loader';

export default function AdminRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loader />;
    }

    if (user && user?.uid === '9ZLupSJrgFO9KqgntwKfLfRrRgR2') {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
}
