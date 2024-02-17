import ProjectCard from "../components/ProjectCard"
import projects from "../data/projects.json"

function ProjectGallery() {
  let projectList = projects.map((project) => (
    <ProjectCard
      title={project.title}
      id={project.id}
      key={project.id}
      image={project.image}
      description={project.description}
      github={project.github}  />
  ))
  return (
    <div className="container">
      <h1>Project Portfolio</h1>
      
        <div className="row row-cols-2">
          <div className="col">
            {projectList}
          </div>
        </div>
      
    </div>
  )
}

export default ProjectGallery