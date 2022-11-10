import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import AddServices from './pages/AddServices';
import Blog from './pages/Blog';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import MyReviews from './pages/MyReviews';
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
                <Route path="/blog" element={<Blog />} />
                <Route path="*" element={<div>Not Found...</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
