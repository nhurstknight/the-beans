import React from 'react'
import axios from 'axios'
class App extends React.Component {
  async componentDidMount() {
    try {
      const response = await axios.get('/api/roasters')
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return null
  }
}
export default App