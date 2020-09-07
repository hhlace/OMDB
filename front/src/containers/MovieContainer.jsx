import React, { Component } from 'react';
import store from '../redux/store';
import { connect } from 'react-redux';
import Movie from '../components/Movie';
import { fetchMovie } from '../redux/action-creator/movies';


class MovieContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchMovie(this.props.id)
    }
    
    render() {
        return(
            <Movie movie={this.props.movie}/>
           //<div>movie</div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovie: (titulo) => ( dispatch(fetchMovie(titulo)))
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.match.params.id,
        movie: state.movies.movie
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);