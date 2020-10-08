import React from 'react'
import { Container, Row, Card, ListGroup } from 'react-bootstrap'

import { getAllFavs } from '../../lib/api'
import FavouriteCard from './FavouriteCard'

class ProfilePage extends React.Component {
  state = {
    favourites: []
  }

  async componentDidMount() {
    const getData = await getAllFavs()
    console.log(getData)
    this.setState({
      favourites: getData.data.favourites
    })
  }

  render() {
    return (
      <>
        <Container fluid className="beans-banner">
          <h1>Your profile page</h1>
        </Container>
        <Container className="beans-index-main">
          <Container className="filter-wrapper" xl={2}>
            <Card style={{ width: '12rem' }}>
              <Card.Body>
                <Card.Title>Profile Navigation</Card.Title>
              </Card.Body>
              <ListGroup as="ul">
                <ListGroup.Item action href="/profile" active> Favourites</ListGroup.Item>
                <ListGroup.Item action href="/profile/account">Account Details</ListGroup.Item>
                <ListGroup.Item action href="/profile/checkout">Checkout Details</ListGroup.Item>
              </ListGroup>
            </Card>
          </Container>
          <Container className="beans-index-grid" fluid xl={10}>
            <Row xs={1} md={3} xl={4} >
              { this.state.favourites.map(item => (
                <FavouriteCard
                  key={item._id}
                  {...item} />
              )) }
            </Row>
          </Container>
        </Container>
      </>
    )
  }
}

export default ProfilePage