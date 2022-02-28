import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-dark px-5">
        <div className="container-fluid">
          <div className="row text-light py-4 justify-content-around">
            <div className="col-lg-4 col-sm-6">
              <h5 className="pb-3">About Us</h5>
              <p className="small">We are a small development team with a passion for all things spooky, campy and sometimes terrifying. Thank you for using Fright List and a Happy Halloween from your friendly neighborhood "Goregle"!</p>
            </div>
            <div className="col-lg-4 col-sm-6">
              <h5 className="pb-3">Stay Connected</h5>
              <p className="small">Want movie recommendations and invites to watch parties? We got you.</p>
              <form className="mb-3">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Email Address"/>
                  <div className="input-group-append">
                    <button className="btn btn-outline-danger text-uppercase fw-bold" type="button">Sign Up</button>
                  </div>
                </div>
              </form>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <i className="fab fa-facebook-square fa-2x text-primary"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-instagram fa-2x instagram"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-twitter fa-2x text-info"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-youtube fa-2x text-danger"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col text-center text-danger border-top pt-3">
              <p>&copy; 2021 Copyright, Made by scampcoder<br/>All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    )
}