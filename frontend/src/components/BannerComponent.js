import React from 'react'

export default function Banner() {
    return (
        <section className="banner">
        <div className="video-container">
            <video className="bg-video" autoplay loop muted>
                <source src='./images/fog.mp4' type="video/mp4"/>
            </video>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="text-blood text-center banner-text">
                        <h1 className="display-4 banner-heading fw-bold">Your #1 Place for Horror</h1>
                        <p className="lead fw-bold">Search by title or filter by category to create your perfect horror watch-list.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}