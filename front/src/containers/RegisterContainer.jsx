import React, { Component } from 'react';
import store from '../redux/store';
import { connect } from 'react-redux';
import Register from '../components/Register';
import { userCreate } from '../redux/action-creator/createUsers';


class RegisterContainer extends Component {
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
        this.props.userCreate(this.state)
        .then(() => this.props.history.push('/'))
    }

    render() {
        return(
            <div>
                <Register
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
        userCreate: (userData) => ( dispatch(userCreate(userData)) )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        history: ownProps.history
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(RegisterContainer);