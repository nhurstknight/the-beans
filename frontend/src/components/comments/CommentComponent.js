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