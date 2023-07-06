/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function AdminWrapper() {
    const [services, setServices] = useState([]);
    const [refetch, setRefetch] = useState(false);

    useEffect(() => {
        fetch('https://dream-travel.vercel.app/get-all-services').then((data) => {
            data.json()
                .then((fullData) => {
                    setServices(fullData?.message);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        });
    }, [refetch]);

    const handleDelete = (id) => {
        fetch(`https://dream-travel.vercel.app/delete-service/${id}`, {
            method: 'DELETE',
        })
            .then((result) => {
                result.json().then((upResult) => {
                    console.log(upResult);
                    toast(upResult?.message, {
                        position: 'top-right',
                    });
                    setRefetch(true);
                });
            })
            .catch((err) => {
                console.log(err);
                toast(err.message, {
                    position: 'top-right',
                });
            });
    };

    return (
        <div className="d-flex flex-column flex-lg-row w-75 m-auto">
            {/* <!-- Main content --> */}
            <ToastContainer />
            <div className="h-screen flex-grow-1 overflow-y-lg-auto mt-4">
                {/* <!-- Header --> */}

                <div className="container-fluid">
                    <div className="mb-npx">
                        <div className="row align-items-center">
                            <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                                {/* <!-- Title --> */}
                                <h4 className="mb-0 ls-tight mb-4">Dashboard</h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Main --> */}

                <div className="container-fluid">
                    {/* <!-- Card stats --> */}
                    <div className="row g-6 mb-5">
                        <div className="col-xl-3 col-sm-6 col-12">
                            <div
                                className="card px-4 py-2 shadow border-0"
                                style={{ backgroundColor: '#03EF79' }}
                            >
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <span className="h6 font-semibold text-white text-sm d-block mb-2">
                                                <i className="fa-solid fa-list" /> Total
                                            </span>
                                            <span className="h3 font-bold mb-0">
                                                {services.length} services
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card border-0 mb-7">
                        <div>
                            <h5 className="mb-2">Services</h5>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-hover table-nowrap">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">User</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {services?.map((service) => (
                                        <tr key={service?._id}>
                                            <td>
                                                <p className="text-heading text-center font-semibold">
                                                    {service?.title}
                                                </p>
                                            </td>
                                            <td className="text-center">
                                                <p>{service?.email}</p>
                                            </td>
                                            <td>
                                                <p className="text-heading text-center font-semibold">
                                                    {new Date(
                                                        service?.createdAt
                                                    ).toLocaleDateString()}
                                                </p>
                                            </td>
                                            <td className="text-center">
                                                <button
                                                    className="btn custom-btn"
                                                    type="button"
                                                    onClick={() => handleDelete(service?._id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
