import projects from '../data/projects.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom'


export default function Project(props) {
  let {id} = useParams()
  
  let projectInfo = projects.filter((project) => project.id == id )
  console.log(projectInfo)

  let {title, image, description, github, deployed} = projectInfo[0];
    
  return (
    <div className='container project-detail mt-5' key={id}>
      <h1 className='mb-5'>- Project detail -</h1>
      <div className='d-flex justify-content-center'>
      <Card className='d-flex justify-content-center'>
      <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Text>{description}</Card.Text>
          <Card.Link href={github} target='_blank'>View the GitHub repo</Card.Link>
          <span>  |  </span>
          <Card.Link href={deployed} target='_blank'>View the deployed site</Card.Link>
        </Card.Body>
      </Card>
      </div>
    </div>
  )



}