import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function ProjectCard(props) {
  return (
    <Link to={`/project/${props.id}`}>
    <Card >
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary" href={props.github}>Go somehwere</Button>
      </Card.Body>
    </Card>
    </Link>
  );
}





