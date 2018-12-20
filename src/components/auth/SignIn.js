import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'

class SignIn extends Component {

    state = {
        email: '',
        password: '',
        loading: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({loading: true})
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        setTimeout(function () {
            this
                .props
                .signIn(data);
            this.setState({loading: false})
        }.bind(this), 3000);

    }

    render() {
        const {authError, auth} = this.props;

        if (auth.uid) 
            return <Redirect to='/'/>
        return (
            <div className="container">
                <div
                    className="card z-depth-3"
                    style={{
                    padding: "0px 10px"
                }}>
                    <form className="white" onSubmit={this.handleSubmit}>
                        <h5 className="grey-text text-darken-3">
                            Sign In
                        </h5>
                        <div className="input-field">
                            <label htmlFor='email'>Email</label>
                            <input type='email' id="email" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor='password'>Password</label>
                            <input type='password' id="password" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">
                                {this.state.loading
                                    ? <div
                                            className="preloader-wrapper big active"
                                            style={{
                                            width: 20,
                                            height: 20
                                        }}>
                                            <div className="spinner-layer spinner-blue">
                                                <div className="circle-clipper left">
                                                    <div className="circle"></div>
                                                </div>
                                                <div className="gap-patch">
                                                    <div className="circle"></div>
                                                </div>
                                                <div className="circle-clipper right">
                                                    <div className="circle"></div>
                                                </div>
                                            </div>

                                            <div className="spinner-layer spinner-red">
                                                <div className="circle-clipper left">
                                                    <div className="circle"></div>
                                                </div>
                                                <div className="gap-patch">
                                                    <div className="circle"></div>
                                                </div>
                                                <div className="circle-clipper right">
                                                    <div className="circle"></div>
                                                </div>
                                            </div>

                                            <div className="spinner-layer spinner-yellow">
                                                <div className="circle-clipper left">
                                                    <div className="circle"></div>
                                                </div>
                                                <div className="gap-patch">
                                                    <div className="circle"></div>
                                                </div>
                                                <div className="circle-clipper right">
                                                    <div className="circle"></div>
                                                </div>
                                            </div>

                                            <div className="spinner-layer spinner-green">
                                                <div className="circle-clipper left">
                                                    <div className="circle"></div>
                                                </div>
                                                <div className="gap-patch">
                                                    <div className="circle"></div>
                                                </div>
                                                <div className="circle-clipper right">
                                                    <div className="circle"></div>
                                                </div>
                                            </div>
                                        </div>
                                    : null}
                                Login
                            </button>

                            {authError
                                ? !authError.status
                                    ? <p
                                            style={{
                                            fontWeight: "bolder",
                                            color: 'red'
                                        }}>{authError.message}</p>
                                    : <p
                                            style={{
                                            fontWeight: "bolder",
                                            color: 'green'
                                        }}>{authError.message}</p>
                                : null}
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
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);