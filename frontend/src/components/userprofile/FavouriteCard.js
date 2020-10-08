import React from 'react'
import {  Media } from 'react-bootstrap'

// import RemoveItemButton from './RemoveItemButton'

const FavouriteCard = ({ product: { _id, image, name, price, weight } }) => {
  console.log(_id)
  return (
    <>
    <div className="fav-card">
      <img
        width={120}
        height={120}
        className="mr-3"
        src={ image }
        alt={ name }
      />
        <h5>{ name }</h5>
        </div>
      </>
  )
}

export default FavouriteCard