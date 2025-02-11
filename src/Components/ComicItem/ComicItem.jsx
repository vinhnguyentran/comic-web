import React, { useContext } from 'react'
import './ComicItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import { Link } from 'react-router-dom';
const ComicItem = ({ comic }) => {
  const { cartItem, addToCart, removeCartItem, viewer, token, setChapChange, chap } = useContext(StoreContext)
  return (
    <Link to={'/readview?='+comic.name} onClick={()=> setChapChange(comic._id)} className='comic-item'>
      <div className="comic-item-img-container">
        {/* <img className='comic-item-image' src={url+ '/images/'+ image} alt={name} /> */}
        <img className='comic-item-image' src={comic.image} alt={comic.name} />
      </div>
      <div className="comic-item-info">

        <p>{comic.name}</p>
        <p>{viewer(comic.view)} Người Xem</p>
        <p>{comic.rating} điểm</p>
        <p>{comic.chap} chapter</p>

      </div>
    </Link>
  )
}

export default ComicItem
