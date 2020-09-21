import React, { Component } from 'react';
import store from '../redux/store';
import { connect } from 'react-redux';
import Movies from '../components/Movies';
import { addToFav, deleteFromFav } from '../redux/action-creator/createUsers';


class MoviesContainer extends Component {
    constructor(props) {
        super(props)
        this.handleAddFav = this.handleAddFav.bind(this);
        this.handleRemoveFav = this.handleRemoveFav.bind(this);
        this.handleToMovie = this.handleToMovie.bind(this);
    }

    handleToMovie(movieId) {
        this.props.history.push(`/movies/${movieId}`)
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
        return(
            <Movies movies={this.props.movies} favs={this.props.favs} userId={this.props.userId} addFav={this.handleAddFav} rmFav={this.handleRemoveFav} handleToMovie={this.handleToMovie}/>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        history: ownProps.history,
        movies: state.movies.movies,
        userId: state.user.loggedUser.id,
        favs: state.user.loggedUser.favs
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovie: (titulo) => ( dispatch(fetchMovie(titulo))),
        addToFav: (movieId) => ( dispatch( addToFav(movieId))),
        deleteFromFav: (rmFavObj) => ( dispatch( deleteFromFav(rmFavObj)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);