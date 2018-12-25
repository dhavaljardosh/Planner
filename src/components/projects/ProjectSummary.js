import React from 'react'
import moment from 'moment';

const ProjectSummary = (props) => {
    console.log(props)
    return (
            <div className="card  z-depth-0 project-summary" style={{marginBottom:0}}>
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{props.project.title}</span>
                    <p>{props.project.content}</p>
                    <p className="grey-text">{moment(props.project.createdAt.toDate()).calendar()}</p>
                </div>
            </div>
    )
}

export default ProjectSummary;