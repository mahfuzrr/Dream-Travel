import { useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import SignUpWrapper from '../components/register/SignUpWrapper';

export default function SignUp() {
    useEffect(() => {
        document.title = 'SignUp';
    }, []);
    return (
        <>
            <Navbar />
            <SignUpWrapper />
        </>
    );
}
