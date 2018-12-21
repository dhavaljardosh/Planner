import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {

    state = {
        firstName:'',
        lastName:'',
        email:'',
        password:''
    }

    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }

    render() {
        const { auth, authError } = this.props;
        console.log(authError)
        if(auth.uid) return <Redirect to='/' />

        return (
            <div className="container">
                <div
                    className="card z-depth-3"
                    style={{
                    padding: "0px 10px"
                }}>
                    <form className="white" onSubmit={this.handleSubmit}>
                        <h5 className="grey-text text-darken-3">
                            Sign Up
                        </h5>
                        <div className="input-field">
                            <label htmlFor='firstName'>First Name</label>
                            <input type='text' id="firstName" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor='lastName'>Last Name</label>
                            <input type='text' id="lastName" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor='email'>Email</label>
                            <input type='email' id="email" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor='password'>Password</label>
                            <input type='password' id="password" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                            { authError.message ? <p style={{color:'red', fontWeight:'bolder'}}>{authError.message}</p> : null}
                        </div>
                        
                    </form>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {authError: state.auth.authError, auth: state.firebase.auth}
}

const mapDispatchToProps = (dispatch) => {
return {
    signUp: (newUser) => dispatch(signUp(newUser))
}
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);