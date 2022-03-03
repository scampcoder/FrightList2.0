import React from 'react';

export default function Movie({movie}) {
    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <img src={movie.image} alt={movie.title} width="100"/>
        </div>
    )
}