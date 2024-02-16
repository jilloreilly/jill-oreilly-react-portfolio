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
    <div>
      <h1>Project Gallery</h1>
      <div className="row">
        {projectList}
      </div>
    </div>
  )
}

export default ProjectGallery