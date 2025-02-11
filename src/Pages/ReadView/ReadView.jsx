import React, { useContext, useEffect, useState } from 'react';
import './ReadView.css';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';

const ReadView = () => {
  const { chapChange, chap, setChap, list_comic } = useContext(StoreContext);

  const [comicImage, setComicImage] = useState(list_comic.find((item) => item._id.toString() === chapChange.toString()).comic[0].images);
  const [chapList, setChapList] = useState(list_comic.find((item) => item._id.toString() === chapChange.toString()).comic);
  const [isImageHidden, setIsImageHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight || window.innerHeight - window.scrollY >= 0) {
        setIsImageHidden(true);
      } else {
        setIsImageHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='read-view'>
      <div className='comic-info-update'>
        <p>Cập Nhât: 20/01/2025</p>
      </div>
      <div className="read-view-header">
        <span className="move-left"> {'<'} </span>
        <div className="dropdown">
          <input type='text' value={chap} />
          <div className="dropdown-content">
            {chapList.map((item, index) => (
              <a className={chap === item.chap ? 'active' : ''} key={index} href={'#' + item.chap} onClick={() => setChap(item.chap)}>{item.chap}</a>
            ))}
          </div>
        </div>
        <span className="move-right"> {'>'} </span>
      </div>
      <h3>Tên truyện: </h3>
      <div className="comic-contetnt">
        <div className="col-2 left-col">
          <img src={assets.standee_default} alt="Description of GIF" className={isImageHidden ? 'hidden' : ''} />
        </div>
        <div className="col-8">
          {comicImage.map((item, index) => (
            <div className='comic-panel' key={index}>
              <img src={item.image} alt={item.name} />
            </div>
          ))}
        </div>
        <div className="col-2 right-col">
          <img src={assets.standee_default} alt="Description of GIF" className={isImageHidden ? 'hidden' : ''} />
        </div>
      </div>
    </div>
  );
}

export default ReadView;
