import React from 'react'

import { Form, Button } from 'react-bootstrap'

const CommentComponent = ({ handleSubmit, handleChange, value }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="text-comment-form">
        <Form.Label className="review-labels">Please leave your comment</Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          type="text"
          onChange={handleChange}
          name="text"
          value={value.text}
        />
      </Form.Group>
      <Form.Group controlId="rating-radio-btn">
        <Form.Label className="review-labels">Please leave a rating from 1-5</Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check inline label="1" value="1" name="rating" type={type} id={`inline-${type}-1`} onChange={handleChange}/>
            <Form.Check inline label="2" value="2" name="rating" type={type} id={`inline-${type}-2`} onChange={handleChange}/>
            <Form.Check inline label="3" value="3" name="rating" type={type} id={`inline-${type}-2`} onChange={handleChange}/>
            <Form.Check inline label="4" value="4" name="rating" type={type} id={`inline-${type}-2`} onChange={handleChange}/>
            <Form.Check inline label="5" value="5" name="rating" type={type} id={`inline-${type}-2`} onChange={handleChange}/>
          </div>
        ))}
      </Form.Group>
      <Button variant= "primary" type="submit" value="Submit">Submit</Button>
    </Form>
  )
}

export default CommentComponent
