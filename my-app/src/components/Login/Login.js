import React from 'react';
import './Login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormErrors } from '../../FormErrors';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false
        };

        this.handleSubmit   =   this.handleSubmit.bind(this);
        this.handleUserInput    =   this.handleUserInput.bind(this);
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : 'too short';
                break;
            default:
                break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm)
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    handleSubmit(event) {
        // TO prevent the page from reloading
        event.preventDefault();
    }

    render() {
        return (
            <div className='container'>
                <div>
                    Login
                </div>
                <Form>
                    <div className="panel panel-default">
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>

                    <Form.Group className={`mb-3 form-group ${this.errorClass(this.state.formErrors)}`}>
                        <Form.Control 
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleUserInput}
                        />
                    </Form.Group>

                    <Form.Group className={`mb-3 form-group ${this.errorClass(this.state.formErrors)}`}>
                        <Form.Control
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleUserInput}
                        />

                    </Form.Group>

                    <Button variant="primary" disabled={!this.state.formValid}>Sign Up</Button>
                </Form>
            </div>
        )
    }
}

export default Login;