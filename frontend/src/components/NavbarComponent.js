import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-blood nav-menu sticky-top">
            <div className="container-fluid">
            <h1 className="navbar-brand fs-3 scary-font me-4"> Fright List</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item me-3">
                    <a className="nav-link active fw-bold" aria-current="page" href="index.html"><i className="fas fa-home d-lg-none"></i> Home</a>
                </li>
                <li className="nav-item me-3">
                    <a className="nav-link" href="profile_template.html"><i className="fas fa-user d-lg-none"></i> Profile</a>
                </li>
                <li className="nav-item me-3">
                    <a className="nav-link" href="my_lists_template.html"><i className="fas fa-list d-lg-none"></i> My Lists</a>
                </li>
                </ul>
                <form className="d-flex me-5">
                <input className="form-control search-bar" type="search" placeholder="Find a Film..." aria-label="Search"/>
                <button className="btn btn-dark search-button text-nowrap" type="submit">Scare Me</button>
                </form>
            </div>
            </div>
        </nav>

    )
}