import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLink';
import SignedOutLinks from './SignedOutLink';
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>;
    return (
        <nav className='nav-wrapper grey darken-3'>
            <div className="container">
                <Link to="/" className="brand-logo">{profile.firstName}'s Plan</Link>
                {links}
            </div>
        </nav>
        )
}

const mapStateToProps = ({firebase}) => {
    return {
        auth: firebase.auth,
        profile: firebase.profile
    }
}

export default connect(mapStateToProps,null)(Navbar);