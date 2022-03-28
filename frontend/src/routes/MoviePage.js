import React from "react";
import movies from "../testingMovieData";
import Navbar from '../components/NavbarComponent';
import { useParams } from "react-router-dom";

export default function MoviePage() {
    const { title } = useParams();
    const movie = movies.filter(movie => movie.title === title)[0];
    const genres = movie.genres.map(genre => movie.genres.indexOf(genre) === (movie.genres.length - 1) ? `${genre}` : `${genre}, `)

    return (
        <div>
            <Navbar />
            <div className="movie-pg container">
                <div className="row">
                    <h1 className="col-12">{movie.title}</h1>
                    <p className="col-12">{genres}</p>
                    <img className="col-md-3 col-sm-12" src={movie.image} alt={movie.title}/>
                    <p className="col-12 mt-2">{movie.rating}</p>
                    <p className="col-12">{movie.description}</p>
                </div>
            </div>
        </div>
    )
}