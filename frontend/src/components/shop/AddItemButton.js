import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faWindowClose, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import { addItem } from '../../lib/api'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const basket = <FontAwesomeIcon icon={faShoppingBasket} />
const confirm = <FontAwesomeIcon icon={faCheckCircle} />
const cancel = <FontAwesomeIcon icon={faWindowClose} />

toast.configure()
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
    toast.success('Added to basket!', { position: toast.POSITION.BOTTOM_LEFT })
  }

  render() {
    return (
      <>
        {this.state.isConfirming ?
          <>
            <Button className="basket-btns" onClick={this.sendRequest}>{confirm}</Button>
            <Button className="basket-btns" onClick={this.cancel}>{cancel}</Button>
          </>
          :
          <Button
            onClick={this.handleClick}
            variant="primary"
            type="submit"
            className="add-btn basket-btns">
            { basket }
          </Button>
        }
      </>
    )
  }
}

export default AddItemButton