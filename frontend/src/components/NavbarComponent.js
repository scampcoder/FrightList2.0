import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [navSearch, setNavSearch] = React.useState('')

    function handleNavSearch() {
        setNavSearch(document.getElementById('nav-search').value);
    }

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
                    <Link className="nav-link active fw-bold" aria-current="page" to="/"><i className="fas fa-home d-lg-none"></i> Home</Link>
                </li>
                <li className="nav-item me-3">
                    <Link className="nav-link" to="/profile"><i className="fas fa-user d-lg-none"></i> Profile</Link>
                </li>
                <li className="nav-item me-3">
                    <Link className="nav-link" to="/lists"><i className="fas fa-list d-lg-none"></i> My Lists</Link>
                </li>
                </ul>
                <form className="d-flex me-5">
                <input className="form-control search-bar" type="search" placeholder="Find a Film..." aria-label="Search" id="nav-search" onChange={handleNavSearch}/>
                <Link to={`/search?search=${navSearch}`}><button className="btn btn-dark search-button text-nowrap" type="submit">Scare Me</button></Link>
                </form>
            </div>
            </div>
        </nav>

    )
}