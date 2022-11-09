import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogInImage from '../../assets/Tablet login-bro.svg';
import LogInLeftSide from './LogInLeftSide';

export default function LogInWrapper() {
    return (
        <div className="container-fluid overflow-hidden mt-1" id="login-content">
            <ToastContainer />
            <div className="container d-flex" id="full-login">
                <LogInLeftSide />
                <div className="container" id="right-login">
                    <img className="img-fluid" src={LogInImage} alt="logIn" />
                </div>
            </div>
        </div>
    );
}
