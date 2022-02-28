import React from 'react'

export default function Banner() {
    return (
        <>
         {/*Banner*/}
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
    {/*End of Banner*/}
    {/*Mission*/}
    <section id="mission" className="mission">
        <div className="container-fluid bg-blood">
            <div className="row p-4 align-items-center">
                <div className="col-md-4 text-center">
                    <i className="fa fa-users fa-5x text-dark"></i>
                    <h1 className="text-dark mb-3">Community</h1>
                    <div className="underline mb-4"></div>
                    <p className="lead text-white">Add reviews and new movies, chat with friends, and set up watch parties for your favorite scares.</p>
                </div>
                <div className="col-md-4 text-center">
                    <i className="fa fa-clipboard-list fa-5x"></i>
                    <h1 className="text-dark mb-3">Keep Track</h1>
                    <div className="underline mb-4"></div>
                    <p className="lead text-white">Keep lists of what you've watched and what you want to watch all in one place.</p>
                </div>
                <div className="col-md-4 text-center">
                    <i className="fa fa-filter fa-5x"></i>
                    <h1 className="text-dark mb-3">Filter</h1>
                    <div className="underline mb-4"></div>
                    <p className="lead text-white">Do you love thrill, but hate gore? Use our search filters to make sure you're only seeing films that fit your needs.</p>
                </div>
            </div>
        </div>
    </section>
    {/*End of Mission*/}
    </>
    )
}