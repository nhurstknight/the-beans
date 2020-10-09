import React from 'react'
import {  Media } from 'react-bootstrap'

import RemoveItemButton from './RemoveItemButton'

const BasketItem = ({ _id, product: { image, name, price, weight } }) => {
  return (
    <Media className="basket-item">
      <img
        width={120}
        height={120}
        className="mr-3"
        src={ image }
        alt={ name }
      />
      <Media.Body>
        <h5>{ name }</h5>
        <ul>
          <li>{`£${price[0]}`}</li>
          <li>{`${weight[0]}g`}</li>
        </ul>
        <RemoveItemButton
          className="delete-item-button"
          product={ _id }> 
        </RemoveItemButton>
      </Media.Body>

    </Media>
  )
}

export default BasketItem