import React from 'react'
import { Button } from 'react-bootstrap'
import { addItem } from '../../lib/api'

class AddItemButton extends React.Component {
  state = {
    isConfirming: false
  }

  handleClick = () => {
    this.setState({ isConfirming: true })
  }

  cancel = () => {
    this.setState({ isConfirming: false })
  }

  sendRequest = async () => {
    await addItem(this.props.product)
    this.setState({ isConfirming: false })
  }

  render() {
    return (
      <>
        {this.state.isConfirming ?
          <>
            <Button onClick={this.sendRequest}> Confirm</Button>
            <Button onClick={this.cancel}>Cancel</Button>
          </>
          :
          <Button
            onClick={this.handleClick}
            variant="primary"
            type="submit">
            Add to basket
          </Button>
        }
      </>
    )
  }
}

export default AddItemButton