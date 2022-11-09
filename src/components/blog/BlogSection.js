export default function BlogSection() {
    return (
        <div className="container-fluid overflow-hidden min-vh-100" id="blog-content">
            <div className="container" id="blog-wrapper">
                <h3>Blog</h3>
                <div className="accordion" id="blog">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                First Question
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingOne"
                            data-bs-parent="#blog"
                        >
                            <div className="accordion-body">
                                <strong>This is the first item&apos;s accordion body.</strong> It is
                                shown by default, until the collapse plugin adds the appropriate
                                classes that we use to style each element. These classes control the
                                overall appearance, as well as the showing and hiding via CSS
                                transitions. You can modify any of this with custom CSS or
                                overriding our default variables. It&apos;s also worth noting that
                                just about any HTML can go within the <code>.accordion-body</code>,
                                though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Second Question
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#blog"
                        >
                            <div className="accordion-body">
                                <strong>This is the second item&apos;s accordion body.</strong> It
                                is hidden by default, until the collapse plugin adds the appropriate
                                classes that we use to style each element. These classes control the
                                overall appearance, as well as the showing and hiding via CSS
                                transitions. You can modify any of this with custom CSS or
                                overriding our default variables. It&apos;s also worth noting that
                                just about any HTML can go within the <code>.accordion-body</code>,
                                though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                Third Question
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#blog"
                        >
                            <div className="accordion-body">
                                <strong>This is the third item&apos;s accordion body.</strong> It is
                                hidden by default, until the collapse plugin adds the appropriate
                                classes that we use to style each element. These classes control the
                                overall appearance, as well as the showing and hiding via CSS
                                transitions. You can modify any of this with custom CSS or
                                overriding our default variables. It&apos;s also worth noting that
                                just about any HTML can go within the <code>.accordion-body</code>,
                                though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
