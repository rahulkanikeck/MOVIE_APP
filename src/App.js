import React,{useEffect, useState} from 'react'
import MovieList from './Components/MovieList'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import MovieListHeading from './Components/MovieListHeading'
import SearchBox from './Components/SearchBox'
import AddFavoruites from './Components/AddFavoruites'
export default function App()  {
  const [movies,setMovies] = useState([])
  const [searchValue,setSearchValue] = useState('')
  const getMovieRequest = async (searchValue) =>{
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=c803a13f`

    const response = await fetch(url)
    const responseJson = await response.json()
   if(responseJson.Search){
    setMovies(responseJson.Search)
   }
   

  }
  useEffect(()=>{
    getMovieRequest(searchValue)
  },[searchValue])
  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='movies'/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='row'>
      <MovieList movies = {movies} FavouriteComponent={AddFavoruites}/>
      </div>
      
    </div>
  )
}