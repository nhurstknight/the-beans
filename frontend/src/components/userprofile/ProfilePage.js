import React from 'react'
import { Container, Row, Card, ListGroup } from 'react-bootstrap'

import { getID } from '../../lib/auth'
import { getSingleUser, getAllBeans } from '../../lib/api'
import BeansCard from '../beans/BeansCard'



class ProfilePage extends React.Component {
  state = {
    profileDetails: null,
    tempData: []
  }

  async componentDidMount() {
    const userId = getID()
    console.log(userId)
    const response = await getSingleUser(userId)
    const tempData = await getAllBeans()
    console.log(response)
    this.setState({
      profileDetails: response.data,
      tempData: tempData.data
    })
  }

  render() {
    const { tempData } = this.state
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
              {tempData.map(bean => (
                <BeansCard
                  key={bean._id}
                  {...bean} />
              ))}
            </Row>
          </Container>
        </Container>
      </>
    )
  }
}

export default ProfilePage