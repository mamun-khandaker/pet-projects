import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectDetails from '../ProjectDetails';

const ProjectList = () => {
  const [state] = useState(ProjectDetails);

  return (
    <section className="project-list">
      {
        state.map(project => {
          return (
            <Link key={project.id} to={project.path} className="project">
              <h2 className="project-header">{project.name}</h2>
              <div className="project-details">
                <img src={project.image} alt={project.name} />
              </div>
            </Link>
          )
        })
      }
    </section>
  )
}

export default ProjectList;
