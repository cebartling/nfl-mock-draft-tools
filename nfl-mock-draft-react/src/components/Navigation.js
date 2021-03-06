import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <Link to="/" className="navbar-brand">NFL Mock Drafts</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/teams" className="nav-link">Teams</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/drafts" className="nav-link">Drafts</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navigation;
