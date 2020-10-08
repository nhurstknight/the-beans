import React from 'react'
import { Container, Row, Form, Spinner } from 'react-bootstrap'
import BeansCard from './BeansCard'
import { getAllBeans, getRoast } from '../../lib/api'

class BeansIndex extends React.Component {
  state = {
    beans: null,
    filteredBeans: null,
    sliderValue: 20,
    roastType: 'All',
    roasters: null
  }
  
  async componentDidMount() {
    const response = await getAllBeans()
    this.setState({
      beans: response.data,
      roasters: response.data.roaster
    })
  }

  handleChange(e){
    const sliderValue = {}
    sliderValue[e.target.name] = e.target.value
    console.log('sliderValue', sliderValue)
    this.setState(sliderValue) 
    const newFilter = this.state.beans.filter(product => product.price < parseInt(sliderValue.sliderValue))
    const roastFilter = 'All'
    this.setState({
      filteredBeans: newFilter,
      roastType: roastFilter
    })
  }

  async handleChangeRoast(e) {
    const roastFilter = e.target.value
    const response = await getRoast(roastFilter)
    const sliderValue = 20
    this.setState({
      filteredBeans: response.data,
      roastType: roastFilter,
      sliderValue: sliderValue
    })
  }

  async grabAllBeans() {
    const roastFilter = 'All'
    const response = await getAllBeans()
    const sliderValue = 20
    this.setState({
      filteredBeans: response.data,
      roastType: roastFilter,
      sliderValue: sliderValue
    })
  }

  render() {
    const { sliderValue } = this.state
    if (!this.state.beans) return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
    return (
      <>
        <Container fluid className="beans-banner">
          <h1>Shop with us</h1>
        </Container>

        <Container className="beans-index-main">
          <Container className="filter-wrapper">
            <h4>Filter options</h4>
            <h5>Price</h5>
            <Form className="price-filter">
              <Form.Group controlId="form-basic-range">
                <Form.Label>Price: <span>£{sliderValue}</span></Form.Label>
                <Form.Control type="range"
                  min="0"
                  max="20"
                  name="sliderValue"
                  value={sliderValue}
                  onChange={(e) => {
                    this.handleChange(e)
                  }}/>
              </Form.Group>
            </Form>
            <h5>Roast</h5>
            <Form>
              {['radio'].map((type) => (
                <div key='1' className="roast-filter">
                  <Form.Check 
                    type={type}
                    id='All'
                    label='All'
                    value='All'
                    checked={this.state.roastType === 'All'}
                    onChange={() => {
                      this.grabAllBeans()
                    }}/>
                  <Form.Check 
                    type={type}
                    id='Light'
                    label='Light'
                    value='Light'
                    checked={this.state.roastType === 'Light'}
                    onChange={(e) => {
                      this.handleChangeRoast(e)
                    }}/>
                  <Form.Check 
                    type={type}
                    id='Medium-Light'
                    label='Medium-Light'
                    value='Medium-Light'
                    checked={this.state.roastType === 'Medium-Light'}
                    onChange={(e) => {
                      this.handleChangeRoast(e)
                    }}/>
                  <Form.Check 
                    type={type}
                    id='Medium'
                    label='Medium'
                    value='Medium'
                    checked={this.state.roastType === 'Medium'}
                    onChange={(e) => {
                      this.handleChangeRoast(e)
                    }}/>
                  <Form.Check 
                    type={type}
                    id='Dark'
                    label='Dark'
                    value='Dark'
                    checked={this.state.roastType === 'Dark'}
                    onChange={(e) => {
                      this.handleChangeRoast(e)
                    }}/>
                </div>
              ))}
            </Form>
          </Container>  

          <Container className="beans-index-grid">
            <Row xs={1} xl={3}>
              {(this.state.filteredBeans ? this.state.filteredBeans : this.state.beans).map(bean => (
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