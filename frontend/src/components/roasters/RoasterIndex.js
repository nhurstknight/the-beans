import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import RoasterCard from './RoasterCard'
import { getAllRoasters } from '../../lib/api'


class RoasterIndex extends React.Component {
  state = {
    roasters: null
  }

  async componentDidMount() {
    try {
      const response = await getAllRoasters()
      console.log(response)
      this.setState({
        roasters: response.data
      })
    } catch (err) {
      console.log(err)
    }
  }


  render() {
    const { roasters } = this.state
    if (!this.state.roasters ) return null
    return (
      <Container fluid>
        <Row>
          <Col xs>
            {roasters && roasters.map(roaster => (
              <RoasterCard key={roaster._id} {...roaster} />
            ))}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default RoasterIndex