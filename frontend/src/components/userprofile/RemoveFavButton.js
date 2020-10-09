import React from 'react'
import { Button } from 'react-bootstrap'
import { removeFav } from '../../lib/api'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
class RemoveFavButton extends React.Component {
  state = {
    data: false,
    product: this.props._id
  }

  removeFavouriteToast = () => {
    toast.info('Item removed from favourites', { position: toast.POSITION.BOTTOM_RIGHT })
  }

  sendRequest = async () => {
    await removeFav(this.state.product)
  }

  render() {
    return (
      <>
        <Button variant="danger" className="fav-delete-btn" onClick={this.sendRequest, this.removeFavouriteToast}>Remove Favourite</Button>
      </>
    )
  }
}

export default RemoveFavButton