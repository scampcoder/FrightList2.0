import React from 'react'
import testingMovieData from '../testingMovieData'
import ListCarousel from './ListCarousel'


export default function ProfileLists() {
    const tempWatchedMovies = testingMovieData.slice(6, 10);
    const tempWatchlistMovies = testingMovieData.slice(16, 20);

    
    return (         
        <div className="col-6 col-lg-8 my-lists ms-4">
            <h3 className="text-blood fw-bold text-center mb-3">My Lists</h3>
            <div className="row">
                <ListCarousel movies={tempWatchlistMovies} title="Watchlist" />
                <ListCarousel movies={tempWatchedMovies} title="Previously Watched" />
            </div>
        </div>                  
    )
}