import React, { Component } from 'react';
import store from '../redux/store';
import { connect } from 'react-redux';
import NavBar from '../components/navBar';
import { fetchMovies } from '../redux/action-creator/movies';
import { logout } from '../redux/action-creator/createUsers';

class NavContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({ value });
        console.log(this.state.value)
    }

    handleSubmit(e) {
        this.props.fetchMovies(this.state.value)
        .then(() => this.props.history.push('/movies'))
    }
    handleLogout(){
        this.props.logout()
        .then(() => this.props.history.push('/'))
    }

    render() {
        console.log('user---->', this.props.loggedUser)
        return(
            <div>
                <NavBar
                handleChange={ this.handleChange }
                value={ this.state.value }
                handleSubmit={ this.handleSubmit }
                username={this.props.loggedUser}
                handleLogout={this.handleLogout}
                />
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: (titulo) => ( dispatch(fetchMovies(titulo))),
        logout: () => ( dispatch( logout() ) )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        history: ownProps.history,
        loggedUser: state.user.loggedUser.username
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(NavContainer);