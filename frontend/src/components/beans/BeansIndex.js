import React from 'react'
import { Container, Row, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { getAllBeans } from '../../lib/api'

import BeansCard from './BeansCard'

class BeansIndex extends React.Component {
  state = {
    beans: null
  }

  async componentDidMount() {
    const response = await getAllBeans()
    this.setState({
      beans: response.data
    })
  }

  render() {
    if (!this.state.beans) return <div>Loading...</div>
    return (
      <>
        <Container className="beans-index-main">
          <Container className="filter-wrapper" xl={2}>
            <Card style={{ width: '12rem' }}>
              <Card.Body>
                <Card.Title>Filter</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Price</ListGroupItem>
                <ListGroupItem>Roaster name</ListGroupItem>
                <ListGroupItem>Roast</ListGroupItem>
              </ListGroup>
            </Card>
          </Container>
          <Container className="beans-index-grid" fluid xl={10}>
            <Row xs={1} md={3} xl={4} >
              { this.state.beans.map(bean => (
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

export default BeansIndex