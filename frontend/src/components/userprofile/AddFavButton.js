import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { addFav } from '../../lib/api'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const fav = <FontAwesomeIcon icon={ faHeart } />


toast.configure()
class AddFavButton extends React.Component {

  sendRequest = async () => {
    await addFav(this.props.product)
    toast.success('Added to favourites!', { position: toast.POSITION.BOTTOM_LEFT })
  }


  render() {
    return (
      <>
        <Button className="fav-btn" onClick={this.sendRequest}>{ fav }</Button>
      </>
    )
  }
}

export default AddFavButton