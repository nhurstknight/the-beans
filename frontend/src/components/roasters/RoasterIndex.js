import React from 'react'
import { Container, Row, Card } from 'react-bootstrap'

import RoasterCard from './RoasterCard'
import { getAllRoasters } from '../../lib/api'


class RoasterIndex extends React.Component {
  state = {
    roasters: null
  }

  async componentDidMount() {
    try {
      const response = await getAllRoasters()
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
      <>
        <Container className="roaster-index-main">
          <Container className="filter-wrapper" xl={2}>
            <Card style={{ width: '12rem' }}>
            </Card>
          </Container>
          <Container className="roaster-index-grid" fluid xl={10}>
            <Row xs={1} md={3} xl={2.25} >
              {roasters && roasters.map(roaster => (
                <RoasterCard key={roaster._id} {...roaster} />
              ))}
            </Row>
          </Container>
        </Container>
      </>
    )
  }
}

export default RoasterIndex


