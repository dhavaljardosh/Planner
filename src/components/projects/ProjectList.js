import React from 'react';
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
            {projects && projects.map(project=>{
                return (
                    <Link to={'/project/'+project.id} key={project.id}>
                        <ProjectSummary project={project} />
                    </Link>
                )
            })}
            {projects ? null: <p>NO PROJECTS TO DISPLAY</p>}
        </div>
    )
}

export default ProjectList;