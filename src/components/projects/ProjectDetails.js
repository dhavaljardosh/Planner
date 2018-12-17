import React from 'react'

const ProjectDetails = (props) => {
    console.log(props)
  return (
    <div className="container section project-details">
      <div className="card z-depth-3">
          <div className="card-content">
              <div className='card-title'>
                  Project Title - {props.match.params.id}
              </div>
              <p>Contnt Contnt Contnt Contnt Contnt Contnt Contnt Contnt Contnt Contnt Contnt Contnt Contnt Contnt Contnt Contnt Contnt </p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
              <div>Posted by Dhaval Jardosh</div>
              <div>2nd Sept, 3 PM</div>
          </div>
      </div>
    </div>
  )
}

export default ProjectDetails
