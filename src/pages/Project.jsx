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
      <div>
        <div key={id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              {/* <Button variant="primary" href={item.github}>Go somehwere</Button>
              <Button variant="primary" href={item.github}>Go somehwere</Button> */}
              <Card.Link href={github}>View the GitHub repo</Card.Link>
              <Card.Link href={deployed}>View the deployed site</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    )

}