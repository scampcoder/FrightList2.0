import React from 'react'
import Movie from '../components/MovieComponent'
import movies from '../testingMovieData'
import Navbar from '../components/NavbarComponent';
import { useSearchParams } from 'react-router-dom';
import Footer from '../components/FooterComponent'

export default function SearchPage() {
    const [moviesData, setMoviesData] = React.useState(movies);
    
    const [searchParams, setSearchParams] = useSearchParams();
    let navSearch = searchParams.get('search');
    
    const [searchTerm, setSearchTerm] = React.useState(navSearch ? navSearch : "");
    
    const [searched, setSearched] = React.useState(navSearch ? true : false);


    function handleSearch(event) {
        const {value} = event.target;
        setSearched(true);
        setSearchTerm(value);
        navSearch = searchTerm
    }
   
    console.log('navSearch =', navSearch)
    console.log('searchTerm = ', searchTerm)
    console.log('searched = ', searched)


    React.useEffect(() => {
        setMoviesData(movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase())))
    }, [searchTerm])

    React.useEffect(() => {
        setSearchTerm(navSearch)
    }, [searchParams])

    
    
    const movieElements = moviesData.map(movie => {return <Movie key={movie.id} movie={movie} type="searched-movie"  />}) 
    const movieRow = moviesData.length >= 1 ? <div className='row'>{movieElements}</div> : <div className='text-muted text-center search-error'><h1 className='text-blood'>Oooh, that's scary.</h1><p>We couldn't find that movie.</p></div>


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
                <button 
                    className="col-md-3 col-sm-12 btn btn-dark search-button-lt text-nowrap"
                    onClick={(event) => handleSearch(event)}
                >
                    Scare Me
                </button>
            </div>
            {searched && movieRow}
            </div>
         <Footer />
        </div>
    )
}