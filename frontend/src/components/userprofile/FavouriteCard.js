import React from 'react'

import RemoveFavButton from './RemoveFavButton'

const FavouriteCard = ({ product: { _id, image, name } }) => {
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
        <RemoveFavButton></RemoveFavButton>
      </div>
    </>
  )
}

export default FavouriteCard