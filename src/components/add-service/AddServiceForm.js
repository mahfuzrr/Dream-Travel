/* eslint-disable jsx-a11y/label-has-associated-control */
export default function AddServiceForm() {
    return (
        <div className="container-fluid overflow-hidden min-vh-100" id="add-service-content">
            <div className="container" id="add-service-all">
                <h4 className="text-center">Add a service</h4>
                <form action="#" id="add-service-form">
                    <div className="form-group">
                        <input type="text" className="form-control" name="title" required />
                        <label className="form-label" htmlFor="title">
                            Title
                        </label>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="price" required />
                        <label className="form-label" htmlFor="price">
                            Price
                        </label>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="url" required />
                        <label className="form-label" htmlFor="url">
                            Photo Url
                        </label>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" id="descr" rows="3" />
                        <label className="form-label" htmlFor="descr">
                            Description
                        </label>
                    </div>

                    <button type="button" className="btn custom-add-service-btn">
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
}
