import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home')
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
  const navigate = useNavigate()
  const [endWith, setEndWith] = useState(false)

  const logout = () => {
    localStorage.removeItem('token')
    setToken("")
    navigate('/')
  }
  const checkUrl = () => {
    setTimeout(() => {
      const urlEndPonit = window.location.href.endsWith('/')
      setEndWith(urlEndPonit ? "" : "none")
    }, 100);
  }


  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt='' className="logo" onClick={() => checkUrl()} /></Link>
      <ul className='navbar-menu'>
        <Link style={{ display: endWith }} to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>Home</Link>
        <Link style={{ display: endWith }} to='/list' onClick={() => setMenu('list')} className={menu === 'list' ? 'active' : ''}>Danh Sách</Link>
        <Link style={{ display: endWith }} to='/type' onClick={() => setMenu('type')} className={menu === 'type' ? 'active' : ''}>Thể Loại</Link>
        <Link style={{ display: endWith }} to='/chapter' onClick={() => setMenu('chapter')} className={menu === 'chapter' ? 'active' : ''}>Chương</Link>
      </ul>
      <div className='navbar-right'>
        {/* <img className='search' style={{ display: endWith }} src={assets.search} alt="" /> */}
        {/* {token ? <div className='navbar-search-icon'>
          <Link to='/cart' onClick={() => checkUrl()}><img className='cart-icon' src={assets.carts} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
        </div> : ''} */}
        {!token ? <button onClick={() => setShowLogin(true)}>Signin</button> :
          <div className='navbar-profile'>
            <img className='avatar' src={assets.profile_icon} alt='' />
            <ul className="nav-profile-dropdown">
              <li><Link to='/order' onClick={() => checkUrl()}><img src={assets.bag_icon} alt='' />Order</Link></li>
              <hr />
              <li onClick={() => logout()}><img src={assets.logout_icon} alt='' />Logout</li>
            </ul>
          </div>}
      </div>
    </div>
  )
}

export default Navbar;
