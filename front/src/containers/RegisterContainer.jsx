import React, { Component } from 'react';
import store from '../redux/store';
import { connect } from 'react-redux';
import Register from '../components/Register';
import { userCreate, checkAvailabilty } from '../redux/action-creator/createUsers';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class RegisterContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            password2: '',
            formErrors: {
                username: '',
                password: ''
            }
        }
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangePassword2 = this.handleChangePassword2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkUsername = this.checkUsername.bind(this);
    }

    handleChangeUsername(e) {
        const username = e.target.value;
        this.setState({ username });
        let formErrors = this.state.formErrors;
        formErrors.username = emailRegex.test(username) && username.length > 3 ? 'ok' : 'It must be an email';
        this.setState({ formErrors}, () => console.log(formErrors))
    }

    handleChangePassword(e) {
        const password = e.target.value;
        this.setState({ password });
    }

    handleChangePassword2(e) {
        const password2 = e.target.value;
        this.setState({ password2 });
    }
    
    checkUsername() {
        checkAvailabilty(this.state.username)
        if(this.props.avilability) alert('User already exists')
    }

    handleSubmit(e) {
        this.props.userCreate({
            username: this.state.username,
            password: this.state.password
        })
        this.props.history.push('/')
    }

    render() {
        return(
            <div>
                <Register
                handleChangeUsername={ this.handleChangeUsername }
                handleChangePassword={ this.handleChangePassword }
                handleChangePassword2={ this.handleChangePassword2 }
                checkUsername={ this.checkUsername }
                username={ this.state.username }
                password={ this.state.password }
                password2={ this.state.password2 }
                formErrors={ this.state.formErrors }
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
        history: ownProps.history,
        user: state.user.loggedUser,
        avilability: state.user.unavailableEmail
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(RegisterContainer);