import React from 'react';
import './Register.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormErrors } from '../../FormErrors';
import { Link } from 'react-router-dom';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirmPassword : '',
            formErrors: { email: '', password: '', confirmPassword : '' },
            emailValid: false,
            passwordValid: false,
            confirmPasswordValid : false,
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

    // Function to validate individual field
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let confirmPasswordValid    =   this.state.confirmPasswordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : 'too short';
                break;
            case 'confirmPassword' :
                console.log(this.state.password);
                console.log(value);
                console.log(value == this.state.password);
                // exact comparison
                // abcdef
                // abcdefghijkl
                // should return false
                confirmPasswordValid    =   value == this.state.password;
                console.log(confirmPasswordValid);

                fieldValidationErrors.confirmPassword   =   confirmPasswordValid   ?   ''  :   'should be same as Password';
                break;
            default:
                break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
            confirmPasswordValid    :   confirmPasswordValid
        }, this.validateForm)
    }

    // Function to validate the whole form
    validateForm() {

        // console.log(this.state.emailValid );
        // console.log(this.state.passwordValid);
        // console.log(this.state.confirmPasswordValid);

        this.setState({ formValid: this.state.emailValid && this.state.passwordValid && this.state.confirmPasswordValid });
    }

    errorClass(error)   {
        return  (error.length   === 0   ?   ''  :   'has-error');
    }

    handleSubmit(event) {
        // To prevent the page from reloading on submit
        event.preventDefault();
    }

    render() {
        return (
            <div className='container'>
                <div>
                    SignUp
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

                    <Form.Group className={`mb-3 form-group ${this.errorClass(this.state.formErrors)}`}>
                        <Form.Control
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        value={this.state.confirmPassword}
                        onChange={this.handleUserInput}
                        />

                    </Form.Group>

                    <Button variant="primary" disabled={!this.state.formValid}>SignUp</Button>

                    <br />
                    <Link to='/login'>Already a User?</Link>
                </Form>
            </div>
        )
    }
}

export default Register;