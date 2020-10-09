import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faWindowClose, faCheckCircle } from '@fortawesome/free-solid-svg-icons'


import { removeItem } from '../../lib/api'

const basket = <FontAwesomeIcon icon={faShoppingBasket} />
const confirm = <FontAwesomeIcon icon={faCheckCircle} />
const cancel = <FontAwesomeIcon icon={faWindowClose} />

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
            <Button variant="success" className="basket-btns" onClick={this.sendRequest}>{confirm}</Button>
            <Button variant="danger" className="basket-btns" onClick={this.cancel}>{cancel}</Button>
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