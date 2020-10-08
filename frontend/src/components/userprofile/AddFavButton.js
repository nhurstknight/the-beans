import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { addFav } from '../../lib/api'

const fav = <FontAwesomeIcon icon={ faHeart } />



class AddFavButton extends React.Component {
  // state = {
  //   isConfirming: false
  // }

  // handleClick = () => {
  //   this.setState({ isConfirming: true })
  // }

  // cancel = () => {
  //   this.setState({ isConfirming: false })
  // }

  sendRequest = async () => {
    await addFav(this.props.product)
    // this.setState({ isConfirming: false })
  }

  render() {
    return (
      <>
        <Button className="fav-btns" onClick={this.sendRequest}>{ fav }</Button>
      </>
    )
  }
}

export default AddFavButton