import React from 'react'
import Movie from './MovieComponent'
import APIKey from './apiKey'

export default function SearchPage() {
    const [moviesData, setMoviesData] = React.useState([]);
    
    const [searchTerm, setSearchTerm] = React.useState('');
    
    function getSearchResults () {
        fetch(`https://imdb-api.com/API/Search/${APIKey}/${searchTerm}`)
        .then(res => res.json())
        .then(data => setMoviesData(data.results))
        console.log(moviesData)
    }
    
    function handleSearch(event) {
        const {value} = event.target;
        setSearchTerm(value);
    }
    
    const movieElements = moviesData.map(movie => {return <Movie key={movie.id} movie={movie} />})
    
    return (
        <div>
            <input 
                placeholder='Scare Me' 
                type='text'
                name='searchTerm'
                value={searchTerm}
                onChange={handleSearch}
            />
            <button onClick={getSearchResults}>Scare Me</button>
            {movieElements}
        </div>
    )
}