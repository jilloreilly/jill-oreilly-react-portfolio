import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function ProjectCard(props) {
  return (
    <div className='col'>
      <Link to={`/project/${props.id}`}>
        <Card className="text-white">
          <Card.Img src={props.image} alt={props.title} />
          <Card.ImgOverlay>
            <Card.Title>{props.title}</Card.Title>
            {/* <Card.Text>{props.description}</Card.Text> */}
          </Card.ImgOverlay>
        </Card>
      </Link>
    </div>
  );
}





