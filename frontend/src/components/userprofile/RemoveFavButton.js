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

  sendRequest = async () => {
    console.log(this.props)
    try {
      await removeFav(this.props._id)
      toast.info('Item removed from favourites', { position: toast.POSITION.BOTTOM_RIGHT })
    } catch (err) {
      console.log(err)
    }
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