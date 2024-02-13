import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container ">
                    <div
                        className="navbar-brand fw-bold fs-4 me-auto "
                        style={{ fontWeight: "bold" }}
                    >
                        MY WEBSITE
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mb-2 mb-lg-0 "  style={{ fontWeight: "bold" }}>
                            <li className="nav-item ">
                                <Link
                                    className="nav-link active mx-3"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item mx-3"  style={{ fontWeight: "bold" }}>
                                <Link className="nav-link" to="/Account">
                                    Account
                                </Link>
                            </li>

                            <form className="d-flex me-2 mx-3"  style={{ fontWeight: "bold" }}>
                                <input
                                    className="form-control"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                            </form>

                            <li className="nav-item mx-3"  style={{ fontWeight: "bold" }}>
                                <Link className="nav-link" to="/Cart">
                                    Cart
                                </Link>
                            </li>

                            <li className="nav-item mx-3">
                                <button className=" btn btn-primary" type="submit"  style={{ fontWeight: "bold" }}>
                                    More
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
