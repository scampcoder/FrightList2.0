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
            <div className="container lists-container mt-4">
            <section className="row lists-row">
                <div className="col-6">
                    <i className="fas fa-skull d-lg-block text-white text-center"></i>
                    <h1 className="text-light text-center">Watch List</h1>
                    {listComponent(watchList)}
                </div>
                <div className="col-6">
                    <i className="fas fa-skull-crossbones d-lg-block text-white text-center"></i>
                    <h1 className="text-light text-center">Previously Watched</h1>
                    {listComponent(previouslyWatched)}
                </div>
            </section>
            </div>
        </div>
        
    )
}