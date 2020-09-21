import React from "react";
import { Link } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Alert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import './styles/movie.scss';

export default function  Movie({ movie, isFav, userId, addFav, rmFav }) {
  const addToFav = () => {
    if(userId) return addFav(movie.imdbID)
    return <Alert severity="warning">This is a warning alert — check it out!</Alert>
  }

  const removeFromFav = () => {
    rmFav(movie.imdbID)
  }
  return (
    <Grid container >
    
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
          <br />
        <Button startIcon={isFav ? <FavoriteIcon onClick={removeFromFav} /> : <FavoriteBorderIcon onClick={addToFav} /> } color="secondary">
          Add to Favourites
          </Button>
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
} 
