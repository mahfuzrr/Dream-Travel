import 'react-photo-view/dist/react-photo-view.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminRoute from './components/AdminRoute';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';
import AddServices from './pages/AddServices';
import Admin from './pages/Admin';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import MyReviews from './pages/MyReviews';
import MyServicePage from './pages/MyServicePage';
import Profile from './pages/Profile';
import Service from './pages/Service';
import ServicesDetails from './pages/ServiceDetails';
import SignUp from './pages/SignUp';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LogIn />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Service />} />
                <Route
                    path="/my-reviews"
                    element={
                        <PrivateRoute>
                            <MyReviews />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/add-service"
                    element={
                        <PrivateRoute>
                            <AddServices />
                        </PrivateRoute>
                    }
                />
                <Route path="/services/:id" element={<ServicesDetails />} />
                <Route
                    path="/my-profile"
                    element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/my-services"
                    element={
                        <PrivateRoute>
                            <MyServicePage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <AdminRoute>
                            <Admin />
                        </AdminRoute>
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
