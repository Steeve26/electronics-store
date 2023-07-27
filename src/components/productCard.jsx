import React, { useState } from 'react'
import {MdOutlineShoppingCart} from 'react-icons/md'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

export default function productCard() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="product-card">
      <div className="buttons">
        <button><MdOutlineShoppingCart size={20}/></button>
        <button onClick={ () => setLiked(!liked)}>
          { liked ? <AiFillHeart size={20} color={'red'}/> : <AiOutlineHeart size={20}/>}
        </button>
      </div>
    </div>
  )
}
