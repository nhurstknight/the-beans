import React from 'react'

// import RemoveItemButton from './RemoveItemButton'

const FavouriteCard = ({ product: { _id, image, name } }) => {
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