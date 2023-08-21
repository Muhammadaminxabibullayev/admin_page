import React from 'react'
import People from '../../assets/people.svg'
import Card from '../../assets/warning_card.svg'
import './Nav.css'
const Nav = () => {
  return (
    <nav>
      <div className="num_of_students">
        <div className="group">
          <img src={People} alt="" />
          <div className="num_of_gr">
            <p>Guruhilar soni</p>
            <p>10 <span>ta</span></p>
          </div>
        </div>
        <div className="group">
          <img src={Card} alt="" />
          <div className="num_of_gr">
            <p>To’lov qilmaganlar soni</p>
            <p>16 <span>ta</span></p>
          </div>
        </div>
      </div>
      <div className="lupa">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </nav>
  )
}

export default Nav