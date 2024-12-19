import React from 'react'
import './HotMenu.css'
import { list_comic } from '../../assets/assets'
const HotMenu = ({category,setCategory}) => {
  const sortComic = () => {
    const list_sort = list_comic.sort((a , b) => b.view-a.view).slice(0,5)
    return list_sort
  }
  return (
    <div className='HotMenu' id='HotMenu'>
      <h1>Truyện Hot</h1>
      {/* <p className='HotMenu-text'>The Explore Menu is show all menu of us, about image, description, price & some detail infomation</p> */}
      <div className='HotMenu-list'>
          {sortComic().map((item, index) => {
            return(
              <div  key={index} className='HotMenu-list-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name.length > 20 ? item.name.slice(0, 20) + '...' : item.name}</p>

              </div>
            )
          })}
      </div>
    </div>
  )
}

export default HotMenu
