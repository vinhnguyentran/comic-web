import React, { useContext } from 'react'
import './ComicDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import ComicItem from '../../Components/ComicItem/ComicItem'
// import { comic_list } from '../../assets/assets'

const ComicDisplay = ({ category }) => {
    const { list_comic } = useContext(StoreContext)
    return (
        <div className='food-display' id='food-display'>
            <h2>Truyện cập nhật</h2>
            <div className="food-display-list">
                {list_comic.map((item, index) => {
                    return <ComicItem key={index} comic={item} />
                })}
            </div>
        </div>
    )
}

export default ComicDisplay
