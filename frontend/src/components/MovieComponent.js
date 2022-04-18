import React from 'react';
import { Link } from 'react-router-dom';

export default function Movie({movie, type}) {
    let styling = "";
    if(type === "searched-movie"){
        styling = "col-12 searched-movie"
    } else if(type === "slide") {
        styling = "list-slide"
    } else {
        styling = "col-3 m-2 list-movie"
    }
    return (
        <Link to={`/${movie.title}`} className='col-xs-12 col-sm-6 col-lg-3 col-xl-2 py-3'><img className={styling} src={movie.image} alt={movie.title}/></Link>
    )
}