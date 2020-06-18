import React from "react";
import { Link } from "react-router-dom";

//const movie {"Title":"Batman","Year":"1989","Rated":"PG-13","Released":"23 Jun 1989","Runtime":"126 min","Genre":"Action, Adventure","Director":"Tim Burton","Writer":"Bob Kane (Batman characters), Sam Hamm (story), Sam Hamm (screenplay), Warren Skaaren (screenplay)","Actors":"Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl","Plot":"The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.","Language":"English, French, Spanish","Country":"USA, UK","Awards":"Won 1 Oscar. Another 8 wins & 26 nominations.","Poster":`https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg`,"Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"72%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"7.5","imdbVotes":"328,278","imdbID":"tt0096895","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"}

export default ({ movie }) => (
  <div className="card" style={{'maxWidth': '500px'}}>
    {movie.Title ?
    (<div>
    <img src={movie.Poster} className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">{movie.Title}</h5>
      <p className="card-text">{movie.Plot}</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Genre: {movie.Genre}</li>
      <li className="list-group-item">Director: {movie.Director}</li>
      <li className="list-group-item">Actors: {movie.Actors}</li>
    </ul>
    </div>)
    :
    (<div>Loading...</div>)
  }
    
  </div>
);
