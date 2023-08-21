import React from 'react'
import './Sidebar.css'
import Logo from '../../assets/logo.svg'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="img">
          <img src={Logo} alt="" />
        </div>
        <div className="john">
          <div className="circle"></div>
          <p>John Doe</p>
        </div>
        <div className="menu">
          <div className="menu_item">
            <i class="fa-solid fa-bars"></i>
            <p>Boshqaruv</p>
          </div>
          <div className="menu_item">
            <i class="fa-solid fa-dollar-sign"></i>
            <p>To’lov</p>
          </div>
          <div className="menu_item">
            <i class="fa-solid fa-graduation-cap"></i>  
            <p>O’qituvchilar</p>
          </div>
          <div className="menu_item">
            <i class="fa-solid fa-table-list"></i>
            <p>Dars jadvali</p>
          </div>
          <div className="menu_item">
            <i class="fa-solid fa-calendar-days"></i>
            <p>Davomat</p>
          </div>
          <div className="menu_item">
            <i class="fa-solid fa-gear"></i>
            <p>Sozlamalar</p>
          </div>
        </div>
        <div className="made_in">
          <small>© 2022 All rights reserved!</small>
          <small>Made by Edify Team</small>
        </div>
    </div>
  )
}

export default Sidebar