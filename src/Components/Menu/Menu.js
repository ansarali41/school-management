import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">My School</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/registration" className="nav-link">Registration</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Menu;