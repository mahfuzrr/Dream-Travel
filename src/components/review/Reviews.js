import ReviewModal from './ReviewModal';

export default function Reviews() {
    return (
        <div className="container-fluid min-vh-100 overflow-hidden" id="myReviews">
            <ReviewModal />
            <div className="container" id="myReviewsContent">
                <table className="table" id="reviewTable">
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Reviews</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- First Row --> */}
                        <tr>
                            <td>Algorithm</td>
                            <td className="text-start">
                                There are many variations of passages of Lorem Ipsum available, but
                                the majority have suffered alteration in some form, by injected
                                humour, or randomised words which don&apos;t look even slightly
                                believable. If you are going to use a passage of Lorem Ipsum, you
                                need to be sure there isn&apos;t anything embarrassing hidden in the
                                middle of text.
                            </td>
                            <td>
                                <div className="container-fluid d-flex gap-3 justify-content-center align-items-center responsive-icons">
                                    <span
                                        className="table-review-edit-icon"
                                        data-bs-toggle="modal"
                                        data-bs-target="#reviewEditorModal"
                                    >
                                        <i className="fa-solid fa-pen-to-square" />
                                    </span>
                                    <span className="table-review-delete-icon">
                                        <i className="fa-solid fa-trash" />
                                    </span>
                                </div>
                            </td>
                        </tr>

                        {/* <!-- second row --> */}
                        <tr>
                            <td>Algorithm</td>
                            <td className="text-start">
                                There are many variations of passages of Lorem Ipsum available, but
                                the majority have suffered alteration in some form, by injected
                                humour, or randomised words which don&apos;t look even slightly
                                believable. If you are going to use a passage of Lorem Ipsum, you
                                need to be sure there isn&apos;t anything embarrassing hidden in the
                                middle of text.
                            </td>
                            <td>
                                <div className="container-fluid d-flex gap-3 justify-content-center responsive-icons">
                                    <span
                                        className="table-review-edit-icon"
                                        data-bs-toggle="modal"
                                        data-bs-target="#reviewEditorModal"
                                    >
                                        <i className="fa-solid fa-pen-to-square" />
                                    </span>
                                    <span className="table-review-delete-icon">
                                        <i className="fa-solid fa-trash" />
                                    </span>
                                </div>
                            </td>
                        </tr>

                        {/* <!-- third row --> */}
                        <tr>
                            <td>Algorithm</td>
                            <td className="text-start">
                                There are many variations of passages of Lorem Ipsum available, but
                                the majority have suffered alteration in some form, by injected
                                humour, or randomised words which don&apos;t look even slightly
                                believable. If you are going to use a passage of Lorem Ipsum, you
                                need to be sure there isn&apos;t anything embarrassing hidden in the
                                middle of text.
                            </td>
                            <td>
                                <div className="container-fluid gap-3 d-flex justify-content-center responsive-icons">
                                    <span
                                        className="table-review-edit-icon"
                                        data-bs-toggle="modal"
                                        data-bs-target="#reviewEditorModal"
                                    >
                                        <i className="fa-solid fa-pen-to-square" />
                                    </span>
                                    <span className="table-review-delete-icon">
                                        <i className="fa-solid fa-trash" />
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
