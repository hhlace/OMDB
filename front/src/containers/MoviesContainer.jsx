import React, { Component } from 'react';
import store from '../redux/store';
import { connect } from 'react-redux';
import Movies from '../components/Movies';


class MoviesContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Movies movies={this.props.movies}/>
        );
    }
 
    
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies.movies
    }
}
const mapDispatchToProps = () => {
    return {
        fetchMovie: (titulo) => ( dispatch(fetchMovie(titulo)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);