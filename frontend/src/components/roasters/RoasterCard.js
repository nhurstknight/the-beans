import React from 'react'
import { Button, Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const RoasterCard = ({ _id, name, logo }) => {
  return (
    <Card
      className="text-center bg-dark text-white"
    >
      <Image className="RoasterImages" src={logo} fluid/>
      <h1>{name}</h1>
      <Link to={`/roasters/${_id}`}>
        <Button variant="primary">Company Page</Button>
      </Link>
    </Card>
  )
}

export default RoasterCard

// <Card 
// style={{ width: '10rem' }}
// bg={'dark'}
// text={'light'}
// >
// <Card.Img variant="top" src={`${logo}`} />
// <Card.Body>
//   <Card.Title>{`Name: ${name}`}</Card.Title>
//   <br></br>
//   <Link to={`/characters/${_id}`}>
//     <Button variant="primary">Roaster Page</Button>
//   </Link>
// </Card.Body>
// </Card>