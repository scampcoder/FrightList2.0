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
            <div className="container-fluid">
            <div className='lg-search row justify-content-center mx-auto my-4'>
                <input 
                    className="search-bar-lt col-md-5 col-sm-12 me-md-4"
                    placeholder='Find a Film...' 
                    type='text'
                    name='searchTerm'
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button className="col-md-3 col-sm-12 btn btn-dark search-button-lt text-nowrap">Scare Me</button>
            </div>
            <div className='row'>
                {movieElements}
            </div>
            </div>
         
        </div>
    )
}