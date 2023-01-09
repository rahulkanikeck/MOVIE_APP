import React from "react"


const MovieList = (props) =>{
    const FavouriteComponent = props.FavouriteComponent
    
    return(
        <>
        {props.movies.map((movie,index) => <div className='image container d-flex justify-content-start m-3'>
            <img src={movie.Poster} alt='movie'></img>
            <div className="over lay d-flex align items-center justify-content-venter">
                <FavouriteComponent/>
            </div>
        </div>)}
        </>
    )
}
export default MovieList;