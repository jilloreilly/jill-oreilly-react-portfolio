import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {

  return (
    <>
      <div className="contact container mt-5">
        <h1 className='mb-5'>- Get in touch -</h1>
        <div className="d-flex justify-content-center">
        <Form className='p-4'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="name" placeholder="Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Message:</Form.Label>
            <Form.Control
            as="textarea"
            placeholder="Leave a message here"
            style={{ height: '100px' }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">Submit</Button>
        </Form>
        </div> 
      </div>
    </>
  )

  
}

export default Contact
