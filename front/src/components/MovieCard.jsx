import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import './styles/movieCard.scss'



const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    height: 425,
    margin: 5
  },
  media: {
    height: 230,
  },
});

export default function MediaCard({ movie, isFav, userId, addFav, rmFav }) {
  const classes = useStyles();
  const addToFav = () => {
    addFav(movie.imdbID)
  }

  const removeFromFav = () => {
    rmFav(movie.imdbID)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/movies/${movie.imdbID}`} > 
        <CardMedia
          className={classes.media}
          image={movie.Poster}
          title={movie.Title}
        />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="p" component="p">
          {movie.Title}
          </Typography>
          <Typography variant="p" color="textSecondary" component="p">
            Type: {movie.Type}
          </Typography>
          <Typography variant="p" color="textSecondary" component="p">
            Year: {movie.Year}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <IconButton color="secondary" aria-label="add to favourites">
        {isFav ? (<FavoriteIcon onClick={removeFromFav}/>) : (<FavoriteBorderIcon onClick={addToFav}/>)}
      </IconButton>
        <Button size="small"  color="primary" href={`/movies/${movie.imdbID}`}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}