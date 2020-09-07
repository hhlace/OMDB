import React, { Component } from 'react';
import store from '../redux/store';
import { connect } from 'react-redux';
import Movies from '../components/Movies';
import { addToFav } from '../redux/action-creator/createUsers';


class MoviesContainer extends Component {
    constructor(props) {
        super(props)
        this.handleAddFav = this.handleAddFav.bind(this);
    }

    handleAddFav(movieId){
        console.log('agregando a fav', movieId)
        const favObj ={
            userId: this.props.userId,
            fav: movieId
        }
        console.log(favObj);
        addToFav(favObj);
    }

    render() {
        return(
            <Movies movies={this.props.movies} favs={this.props.favs} userId={this.props.userId} addFav={this.handleAddFav}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies.movies,
        userId: state.user.loggedUser.id,
        favs: state.user.loggedUser.favs
    }
}
const mapDispatchToProps = () => {
    return {
        fetchMovie: (titulo) => ( dispatch(fetchMovie(titulo))),
        addToFav: (movieId) => ( dispatch( addToFav(movieId)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);