import React from 'react'
import { Button } from 'react-bootstrap'
import { removeItem } from '../../lib/api'

class DeleteItemButton extends React.Component {
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
    await removeItem(this.props.product)
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
            variant="danger"
            type="submit">
            Delete item
          </Button>
        }
      </>
    )
  }
}

export default DeleteItemButton