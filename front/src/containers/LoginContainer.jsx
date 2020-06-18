import React, { Component } from 'react';
import store from '../redux/store';
import { connect } from 'react-redux';
import Login from '../components/Login';
import { loginUser } from '../redux/action-creator/createUsers';


class LoginContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeUsername(e) {
        const username = e.target.value;
        this.setState({ username });
    }

    handleChangePassword(e) {
        const password = e.target.value;
        this.setState({ password });
    }

    handleSubmit(e) {
        e.preventDefault();
        //console.log('state-->', this.state)
        this.props.loginUser(this.state)
        this.props.history.push('/logueado')
    }

    render() {
        return(
            <div>
                <Login
                handleChangeUsername={ this.handleChangeUsername }
                handleChangePassword={ this.handleChangePassword }
                username={ this.state.username }
                password={ this.state.password }
                handleSubmit={ this.handleSubmit }
                />
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: userData =>  dispatch(loginUser(userData)) 
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        history: ownProps.history
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(LoginContainer);