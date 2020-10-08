import React from 'react'
// import { Form, Container, Button, Col } from 'react-bootstrap'

const CommentComponent = ({ handleSubmit, handleChange, value }) => {
  return (
    <form onSubmit={handleSubmit}>
      <p>
        Please leave a comment!
      </p>
      <input 
        type="number"
        onChange={handleChange} 
        name="rating"
        value={value.rating}
        min='1'
        max='5'
      />
      <input 
        type="text"
        onChange={handleChange}  
        name="text"
        value={value.text}
      />
      <input 
        type="submit"
        value="Submit"
      />
    </form>
  )
}

export default CommentComponent

//form input text

{/* <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Please leave your comment</Form.Label>
        <Form.Control as="textarea" rows="3" 
          type="text"
          onChange={handleChange}  
          name="text"
          value={value.text}
        />
      </Form.Group> */}

{/* <form onSubmit={handleSubmit}>
      <p>
        Please leave a comment!
      </p>
      <input 
        type="number"
        onChange={handleChange} 
        name="rating"
        value={value.rating}
        min='1'
        max='5'
      />
      <input 
        type="text"
        onChange={handleChange}  
        name="text"
        value={value.text}
      />
      <input 
        type="submit"
        value="Submit"
      />
    </form>
  )
} */}


{/* <Container>
        <h5>
          Leave a review
        </h5>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Please leave a rating from 1-5</Form.Label>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check inline label="1" type={number} id={`inline-${type}-1`} />
                <Form.Check inline label="2" type={number} id={`inline-${type}-2`} />
                <Form.Check inline label="3" type={number} id={`inline-${type}-3`} />
                <Form.Check inline label="4" type={number} id={`inline-${type}-4`} />
                <Form.Check inline label="5" type={number} id={`inline-${type}-5`} />
              </div>
            ))}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Please leave your comment</Form.Label>
            <Form.Control as="textarea" rows="3" 
              type="text"
              onChange={handleChange}  
              name="text"
              value={value.text}
            />
          </Form.Group>
          <Button variant="primary" 
            type="submit"
            value="submit">
          </Button>
        </Form>
      </Container> */}


    //   <Container>
    //   <h5>
    //     Leave a review
    //   </h5>
    //   <Form onSubmit={handleSubmit}>
    //     <Form.Group>
    //       <Col xs="auto">
    //         <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
    //           Rating
    //         </Form.Label>
    //         <Form.Control
    //           value={value.rating}
    //           onChange={handleChange} 
    //           as="select"
    //           className="mr-sm-2"
    //           id="inlineFormCustomSelect"
    //         >
    //           <option value="default">select your rating</option>
    //           <option value="1" >1</option>
    //           <option value="2" >2</option>
    //           <option value="3" >3</option>
    //           <option value="4" >4</option>
    //           <option value="5" >5</option>
    //         </Form.Control>
    //       </Col>
    //     </Form.Group>
    //     <Form.Group controlId="exampleForm.ControlTextarea1">
    //       <Form.Label>Please leave your comment</Form.Label>
    //       <Form.Control 
    //         as="textarea" 
    //         rows="3" 
    //         type="text"
    //         onChange={handleChange}  
    //         name="text"
    //         value={value.text}
    //       />
    //     </Form.Group>
    //     <Button variant="primary" 
    //       type="submit"
    //       value="submit">
    //         Submit
    //     </Button>
    //   </Form>
    // </Container> 