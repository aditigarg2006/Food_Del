import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'

const Navbar = () => {
    const [menu,setmenu]= useState("home")
  return (
    <div className='navbar'>
        <img src={assets.logo} alt='' className='logo' />
        <ul className='navbar-menu'>
            <li onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>Home</li>
            <li onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
            <li onClick={()=>setmenu("mobileApp")} className={menu==="mobileApp"?"active":""}>Mobile App</li>
            <li onClick={()=>setmenu("contactUs")} className={menu==="contactUs"?"active":""}>Contact us</li>
        </ul>
        <div className='navbar-right-menu'>
            <img src={assets.search_icon} alt="" />
            <div className='navbar-search'>
                <img src={assets.basket_icon} alt="" />
                <div className='dot'></div>
            </div>
            <button>Sing in</button>
        </div>

    </div>
  )
}

export default Navbar