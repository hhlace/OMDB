import React from 'react';
import{ Link } from 'react-router-dom';

export default ({movies}) => (
    <div className="container-fluid">
      <h3>Movies</h3>
      <div className="row">
        {movies.length > 1 ? (movies.map(movie => (
          <div key={movie.imdbID} className="col-xs-4">
            <Link className="thumbnail" to={`/movies/${movie.imdbID}`}>
              <img src={movie.Poster} />
              <div className="caption">
                <h5>
                  <span>{movie.Title}</span>
                </h5>
                <small>Year {movie.Year}</small>
              </div>
            </Link>
          </div>
        ))) :(<div>loading</div>)
        }
      </div>
    </div>
  );