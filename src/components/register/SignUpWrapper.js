import SignUpImage from '../../assets/SignUpSVG.svg';
import LeftSignUp from './LeftSignUp';

export default function SignUpWrapper() {
    return (
        <div className="container-fluid overflow-hidden" id="signup-content">
            <div className="container d-flex" id="full-signup">
                <LeftSignUp />
                <div className="container" id="right-signup">
                    <img className="img-fluid" src={SignUpImage} alt="signup" />
                </div>
            </div>
        </div>
    );
}
