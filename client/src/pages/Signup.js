import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../firebase';
import * as routes from '../constants/routes';


const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
};

const Signup = ({ history }) => (
    <div>
        <h2>this is the signup page</h2>
        <SignUpForm history={history}/>
    </div>
)

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class SignUpForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            INITIAL_STATE
        };
    }

    onSubmit = (event) => {
        const {
            username,
            email,
            passwordOne,
          } = this.state;

          const {
            history,
          } = this.props;

          {
            console.log("clicked submit");
            console.log("this.state: ", this.state);
            console.log("this.props: ", this.props);
            console.log("about to redirect to homepage");
            // history.push(routes.LANDING);
        }
      
          auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
              this.setState(() => ({ ...INITIAL_STATE }));
              console.log("about to redirect to homepage");
            //   history.push(routes.LANDING);
            })
            .catch(error => {
              this.setState(byPropKey('error', error));
            });
      
          event.preventDefault();
    }

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';
        
        // this is to check this.state every time the page is rendered
        {console.log(this.state);}

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    value={username || ''}
                    onChange={event => this.setState(byPropKey('username', event.target.value))}
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    value={email || ''}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    value={passwordOne || ''}
                    onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                    type="password"
                    placeholder="Password"
                />
                <input
                    value={passwordTwo || ''}
                    onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button disabled={isInvalid} type="submit">
                    Sign Up
        </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account ?
        {' '}
        <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>
)

export default withRouter(Signup);

export {
    SignUpForm,
    SignUpLink
}