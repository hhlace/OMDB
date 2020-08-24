import React from 'react';
import MovieCard from './MovieCard';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default ({movies}) => (


      <div className='container'>
        <h3>search for: </h3>
        <br></br>
        <div className='row'>

          {movies.length > 1 ? (movies.map(movie => (
            <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'>
              <MovieCard movie={movie}/>
            </div>
            
          ))) :(<div>loading</div>)
          }
        </div>
      </div>


  );


