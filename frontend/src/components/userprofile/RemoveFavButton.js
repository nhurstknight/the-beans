import React from 'react'
import { Button } from 'react-bootstrap'
import { removeFav } from '../../lib/api'




class RemoveFavButton extends React.Component {
  state = {
    data: false,
    product: this.props._id
  }

  sendRequest = async () => {
    await removeFav(this.state.product)
  }

  render() {
    return (
      <>
        <Button variant="danger" className="fav-delete-btn" onClick={this.sendRequest}>Remove item</Button>
      </>
    )
  }
}

export default RemoveFavButton