export default function Footer() {
    return (
        <footer className="container-fluid d-flex flex-column justify-content-center">
            <div className="container text-center mt-2">
                <a href="/" target="_blank">
                    <i className="fa-brands fa-facebook-f" />
                </a>
                <a href="/" className="ms-2" target="_blank">
                    <i className="fa-brands fa-github" />
                </a>
            </div>
            <p className="ms-0 mt-4 me-0 mb-0 text-center">© All right reserved 2022</p>
        </footer>
    );
}
