import React from "react";
import Navbar from "../components/NavbarComponent";
import Movie from '../components/MovieComponent'
import userData from '../dummyUserData.js'

export default function MyLists() {
    let watchList = userData[0].lists.watchList;
    let previouslyWatched = userData[0].lists.previouslyWatched;

    function listComponent(movies) {
        return (
            <div>
                {movies.map(movie => {return <Movie key={movie.id} movie={movie} type="list-movie"  />})}
            </div>
        )
    }

    return (
        <div>
            <Navbar />
            <div className="container mt-4">
            <section className="row">
                <div className="col-6 text-center">
                    <i className="fas fa-skull d-lg-block text-white"></i>
                    <h1 className="text-light">Watch List</h1>
                    {listComponent(watchList)}
                </div>
                <div className="col-6 text-center">
                    <i className="fas fa-skull-crossbones d-lg-block text-white"></i>
                    <h1 className="text-light">Previously Watched</h1>
                    {listComponent(previouslyWatched)}
                </div>
            </section>
            </div>
        </div>
        
    )
}