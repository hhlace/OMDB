import React from 'react';
import MovieCard from './MovieCard';
import CircularProgress from '@material-ui/core/CircularProgress';

export default ({movies}) => (


      <div className='container'>
        <br></br>
        <div className='row'>

          {movies ? (movies.map(movie => (
            <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'>
              <MovieCard movie={movie}/>
            </div>
            
          ))) :(<CircularProgress />)
          }
        </div>
      </div>


  );


