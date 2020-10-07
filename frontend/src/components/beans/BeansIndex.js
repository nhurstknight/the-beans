import React from 'react'
import { Container, Row, Card, ListGroup, ListGroupItem, Form } from 'react-bootstrap'
import { getAllBeans } from '../../lib/api'

import BeansCard from './BeansCard'

class BeansIndex extends React.Component {
  state = {
    beans: null,
    filteredBeans: null,
    sliderValue: 20
  }

  async componentDidMount() {
    const response = await getAllBeans()
    this.setState({
      beans: response.data
    })
  }

  handleChange(e){
    const sliderValue = {}
    sliderValue[e.target.name] = e.target.value
    this.setState(sliderValue)
    const newFilter = this.state.beans.filter(product => product.price < this.state.sliderValue)
    this.setState({
      beans: newFilter
    })
  }

  // async componentDidUpdate() {
  //   const newFilter = this.state.beans.filter(product => product.price[0] > this.state.sliderValue)
  //   this.setState({
  //     beans: newFilter
  //   })
  // }
  

  render() {
    if (!this.state.beans) return <div>Loading...</div>
    return (
      <>
        <Container fluid className="beans-banner">
          <h1>Shop with us</h1>
        </Container>
        <Container className="beans-index-main">
          <Container className="filter-wrapper" xl={2}>
            <Card style={{ width: '12rem' }}>
              <Card.Body>
                <Card.Title>Filter</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <Form>
                  <Form.Group controlId="formBasicRange">
                    <Form.Label>Price: £{this.state.sliderValue}</Form.Label>
                    <Form.Control type="range"
                      min="0"
                      max="20"
                      name="sliderValue"
                      value={this.state.sliderValue}
                      onChange={(e) => {
                        this.handleChange(e)
                      }}/>
                  </Form.Group>
                </Form>
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