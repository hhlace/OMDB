import React from "react";
import { Link } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import './styles/movie.scss';

export default ({ movie }) => (
  
  <Grid container spacing={2}>
  
      {movie.Title ?
      (<>
      <Grid item xs={12} sm={6} md={4}>

        <img src={movie.Poster} className="poster" />
      </Grid>
      <Grid item xs={12} sm={6} md={6} className='description'>

          <h5 className="card-title">{movie.Title}</h5>
          <p className="list-group-item">{movie.Plot}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Genre: {movie.Genre}</li>
          <li className="list-group-item">Director: {movie.Director}</li>
          <li className="list-group-item">Actors: {movie.Actors}</li>
        </ul>
      </Grid>
      </>)
      :
      (<div className='loading'>
        <CircularProgress />
      </div>
      )
    }
      
  </Grid>
);
