import React from 'react';
import MovieCard from './MovieCard';
import CircularProgress from '@material-ui/core/CircularProgress';

export default ({movies, favs, userId, addFav, rmFav, handleToMovie}) => {
  
  return (
    <div className='container'>
        <br></br>
        <div className='row'>

          {movies ? (movies.map(movie => {
            const isFav = favs ? favs.includes(movie.imdbID) : null;
            return (
            <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2' key={movie.imdbID}>
              <MovieCard movie={movie} isFav={isFav} userId={userId} addFav={addFav} rmFav={rmFav} handleToMovie={handleToMovie}/>
            </div>
            
          )})) :(<CircularProgress />)
          }
        </div>
      </div>
  )
};


