import React, { Component } from 'react';
import store from '../redux/store';
import { connect } from 'react-redux';
import Movie from '../components/Movie';
import { fetchMovie } from '../redux/action-creator/movies';
import { addToFav, deleteFromFav } from '../redux/action-creator/createUsers';


class MovieContainer extends Component {
    constructor(props) {
        super(props)
        this.handleAddFav = this.handleAddFav.bind(this);
        this.handleRemoveFav = this.handleRemoveFav.bind(this);
    }

    componentDidMount() {
        this.props.fetchMovie(this.props.id)
    }

    handleAddFav(movieId){
        const favObj = {
            userId: this.props.userId,
            fav: movieId
        }
        this.props.addToFav(favObj);
    }

    handleRemoveFav(movieId){
        const rmFavObj ={
            userId: this.props.userId,
            fav: movieId
        }
        this.props.deleteFromFav(rmFavObj);
    }
    
    render() {
        const isFav = this.props.favs ? this.props.favs.includes(movie.imdbID) : null;
        return(
            <Movie movie={this.props.movie} isFav={isFav} userId={this.props.userId} addFav={this.handleAddFav} rmFav={this.handleRemoveFav}/>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovie: (titulo) => ( dispatch(fetchMovie(titulo))),
        addToFav: (movieId) => ( dispatch( addToFav(movieId))),
        deleteFromFav: (rmFavObj) => ( dispatch( deleteFromFav(rmFavObj)))
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.match.params.id,
        movie: state.movies.movie,
        userId: state.user.loggedUser.id,
        favs: state.user.loggedUser.favs
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);