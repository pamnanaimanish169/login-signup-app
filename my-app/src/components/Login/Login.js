import React from 'react';
import './Login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {FormErrors} from '../../FormErrors';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            email : '',
            password : '',
            // for enabling/disabling submit button
            formErrors : {email : '', password : ''},
            // individual fields validation
            emailValid : false,
            passwordValid : false,
            // Whole form
            formValid : false
        };
    }

    handleSubmit(event) {
        console.log('submit event', event);

        event.preventDefault();
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;

        // callback function for setState which will validate as per the validation rules we specify in it.
        this.setState({[name] : value}, () => { this.validateField(name, value) });
    }

    // define the callback function
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid  =   this.state.emailValid;
        let passwordValid   =   this.state.passwordValid;

        switch(fieldName) {

            // validations for as per the fields,
            // to add more fieds just add the field with the case keyword
            // and mention the regex
            // regex for email format i.e. @,.com,etc
            case 'email' : 
                emailValid  =   value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email =   emailValid  ?   ''  :   'is invalid';
                break;
            case 'password' :
                passwordValid   =   value.length >= 6;
                fieldValidationErrors.password  =   passwordValid   ?   ''  :   'too short';
                break;
            // No condition for default as no fields here in default
            // it will match a single field always
            default :
                break;
        }

        // this.calidateForm -> callback funtion while validating the fields
        this.setState({
            formErrors   :   fieldValidationErrors,
            emailValid  :   emailValid,
            passwordValid   :   passwordValid
        }, this.validateForm)
    }

    validateForm()  {
        // we need to include more field in here function if more field is included in the HTML form
        this.setState({formValid    :   this.state.emailValid   &&  this.state.passwordValid    });
    }

    render() {
        return (
            <div className='container'>
                <Form>
                    <FormErrors formErrors={this.state.formErrors}>

                    </FormErrors>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={(event) => this.handleUserInput(event)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={(event) => this.handleUserInput(event)}/>
                    </Form.Group>

                    {/* Disabled attribute set to validity of the form */}
                    <Button disabled={!this.state.formValid} variant="primary" type="submit" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Login;