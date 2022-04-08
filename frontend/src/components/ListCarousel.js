import React from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import Movie from './MovieComponent'

export default function ListCarousel({movies, title}) {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const length = movies.length;

    const nextSlide = () => {
        setActiveIndex(activeIndex === length - 1 ? 0 : activeIndex + 1)
    }
    
    const prevSlide = () => {
        setActiveIndex(activeIndex === 0 ? length - 1 : activeIndex - 1)
    }

    if(!Array.isArray(movies) || length <= 0) {
        return null
    }

    console.log(activeIndex)
    
    
    const textDecor = title === "Watchlist" ? "fas fa-skull d-lg-block text-white" : "fas fa-skull-crossbones d-lg-block text-white"

    return (
        <div className='col-6'>  
            <div className='carousel-header'>
                <i className={textDecor}></i>
                <h3 className="text-white text-decoration-none">{title}</h3>
            </div>      
            <div className='carousel'>
                <FaChevronLeft className="left-arrow text-white" onClick={prevSlide} />    
                {movies.map((movie, index) => {
                    return (
                        <div className={index === activeIndex ? "slide active" : "slide"}>
                            {index === activeIndex && (
                                <Movie key={index} movie={movie} type="slide" />
                            )}
                        </div>
                    )
                })}
                <FaChevronRight className="right-arrow text-white" onClick={nextSlide} />
            </div>
        </div>                
    )
}