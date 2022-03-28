import React from 'react';
import { Link } from 'react-router-dom';

export default function Movie({movie}) {
    return (
        <Link to={`/${movie.title}`} className='col-xs-12 col-sm-6 col-lg-3 col-xl-2 py-3'><img className="col-12 searched-movie" src={movie.image} alt={movie.title}/></Link>
    )
}