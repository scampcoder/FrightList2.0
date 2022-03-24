import React from 'react';

export default function Movie({movie}) {
    return (
        <img className="searched-movie col-2 py-3" src={movie.image} alt={movie.title}/>
    )
}