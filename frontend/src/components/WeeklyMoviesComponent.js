import React from 'react'
import movies from '../testingMovieData'
import Movie from './MovieComponent'

export default function WeeklyMovies() {
    const movieElements = movies.map(movie => {
      return (
        <div className="col-md-4 text-center align-self-center">
          <Movie />
        </div>
      )
    })

    return (
        <section id="weekly-movies">
        <div className="container-fluid p-5">
           {/*title*/}
            <div className="row">
                <div className="col text-center py-5">
                    <h1>Our Favorite Movies This Week</h1>
                </div>
            </div>
            {/*end of title*/}
            <div className="row" id="weekly-movies-tri">
                <div className="col-md-4 text-center align-self-center">
                    <img src="https://m.media-amazon.com/images/I/A1Vmrrc2S+L._SL1500_.jpg" alt="Rosemary's Baby"/>
                </div>
                <div className="col-md-4 text-center align-self-center">
                    <img src="https://m.media-amazon.com/images/M/MV5BYzY0ZjJlNmMtMGU3NC00Yjk3LTk0N2ItMDNlMDVhZjA4OTFmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg" alt="The Return of the Living Dead"/>
                </div>
                <div className="col-md-4 text-center align-self-center">
                    <img src="https://m.media-amazon.com/images/I/81UoLziAh8L._SY445_.jpg" alt="Behind the Mask"/>
                </div>
            </div>
            <div className="row" id="weekly-movies-carousel">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="https://m.media-amazon.com/images/I/A1Vmrrc2S+L._SL1500_.jpg" className="d-block w-50 m-auto h-auto" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src="https://m.media-amazon.com/images/M/MV5BYzY0ZjJlNmMtMGU3NC00Yjk3LTk0N2ItMDNlMDVhZjA4OTFmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg" className="d-block w-50 m-auto h-auto" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src="https://m.media-amazon.com/images/I/81UoLziAh8L._SY445_.jpg" className="d-block w-50 m-auto h-auto" alt="..."/>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
            </div>
        </div>
    </section>
    )
}