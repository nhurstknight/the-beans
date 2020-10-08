import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { addFav } from '../../lib/api'

const fav = <FontAwesomeIcon icon={ faHeart } />



class AddFavButton extends React.Component {

  sendRequest = async () => {
    await addFav(this.props.product)
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