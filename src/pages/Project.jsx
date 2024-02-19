import projects from '../data/projects.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { useParams } from 'react-router-dom'

export default function Project(props) {
  // let params = useParams()
  
  let projectInfo = projects.filter((project) => (
    project.id === props.id ? project : null
  ))
    
  let listProject = projectInfo.map((item, i) => {

    let {title, image, description, github, deployed} = item;

      return (
        <div key={i}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              {/* <Button variant="primary" href={item.github}>Go somehwere</Button>
              <Button variant="primary" href={item.github}>Go somehwere</Button> */}
              <Card.Link href={item.github}>View the GitHub repo</Card.Link>
              <Card.Link href={item.deployed}>View the deployed site</Card.Link>
            </Card.Body>
          </Card>
        </div>
      )
    }) 

    return (
      <div>{listProject}</div>
    )

}