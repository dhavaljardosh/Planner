import React from 'react'

const ProjectSummary = (props) => {
    console.log(props)
    return (
            <div className="card  z-depth-0 project-summary" style={{marginBottom:0}}>
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{props.project.title}</span>
                    <p>{props.project.content}</p>
                    <p className="grey-text">3rd September 2018, 2 PM</p>
                </div>
            </div>
    )
}

export default ProjectSummary;