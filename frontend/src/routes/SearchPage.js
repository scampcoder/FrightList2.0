import React from 'react'
import Movie from '../components/MovieComponent'
import movies from '../testingMovieData'
import Navbar from '../components/NavbarComponent';

export default function SearchPage() {
    const [moviesData, setMoviesData] = React.useState(movies);
    
    const [searchTerm, setSearchTerm] = React.useState('');
    
    
    function handleSearch(event) {
        const {value} = event.target;
        setSearchTerm(value);
    }
    
    const movieElements = moviesData.map(movie => {return <Movie key={movie.id} movie={movie} />})
    
    return (
        <div>
            <Navbar />
            <input 
                placeholder='Scare Me' 
                type='text'
                name='searchTerm'
                value={searchTerm}
                onChange={handleSearch}
            />
            <button>Scare Me</button>
            {movieElements}
        </div>
    )
}