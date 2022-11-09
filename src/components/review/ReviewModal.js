export default function ReviewModal() {
    return (
        <div
            className="modal fade"
            id="reviewEditorModal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="reviewEditorModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="reviewEditorModalLabel">
                            Service Title
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        <textarea className="form-control" rows="5" />
                        <button type="button" className="btn custom-edit-submit-btn">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
