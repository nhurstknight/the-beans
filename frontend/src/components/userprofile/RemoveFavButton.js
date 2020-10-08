import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { removeFav } from '../../lib/api'

// const fav = <FontAwesomeIcon icon={ faHeart } />



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
        <Button variant="danger" className="fav-delete-btn" onClick={this.sendRequest}>Remove Favourite</Button>
      </>
    )
  }
}

export default RemoveFavButton