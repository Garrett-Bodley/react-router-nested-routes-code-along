import React from 'react'
import { Link } from 'react-router-dom'
import MovieShow from '../components/MovieShow';

const MoviesList = ({ movies }) => {

  const renderMovies = Object.keys(movies).map(movieID => {
    return <li key={`li-` + movieID}><Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link></li>
  });

  return (
    <div key="MovieList">
      {renderMovies}
    </div>
  )
}

export default MoviesList