import { useEffect } from 'react';
import LogInWrapper from '../components/login/LogInWrapper';
import Navbar from '../components/navbar/Navbar';

export default function LogIn() {
    useEffect(() => {
        document.title = 'LogIn';
    }, []);
    return (
        <>
            <Navbar />
            <LogInWrapper />
        </>
    );
}
