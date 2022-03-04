import React from 'react';

export default function Movie({movie}) {
    return (
        <div>
            <img src={movie.image} alt={movie.title}/>
        </div>
    )
}