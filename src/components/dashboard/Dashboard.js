import React, {Component} from 'react'
import Notification from './Notifications'
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

class Dashboard extends Component {

    render() {
        console.log(this.props)
        let projects = this.props.projects;

        return (
            <div className="dashboard container">
                <div className="row">
                    <div
                        className="col s12 m6"
                        style={{
                        marginTop: 0
                    }}>
                        <ProjectList projects={projects}/>
                    </div>
                    <div
                        className="col s12 m5 offset-m1"
                        style={{
                        marginTop: 0
                    }}>
                        <Notification/>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {projects: state.firestore.ordered.projects};
}

export default compose(connect(mapStateToProps), firestoreConnect([
    {
        collection: 'projects'
    }
]))(Dashboard);
