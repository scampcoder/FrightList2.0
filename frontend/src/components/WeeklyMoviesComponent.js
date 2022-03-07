import React from 'react'
import movies from '../weeklyMoviesData'
import Movie from './MovieComponent'

export default function WeeklyMovies() {
    const movieElements = movies.map(movie => {
      return (
        <div className="col-md-4 text-center align-self-center">
          <Movie movie={movie} key={movie.id} />
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
                {movieElements}
            </div>
        </div>
    </section>
    )
}