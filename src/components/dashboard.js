import React from 'react'
import Navbar from './Navbar'
import './dashboard.css'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { FaCashRegister } from 'react-icons/fa'
import { AiOutlineLike } from 'react-icons/ai'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { BiBookmarks } from 'react-icons/bi'
import profilepic from './image 1.png'
import LineGraph from './LineGraph'
import Piechart from './Piechart'

function dashboard() {
  return (
    <div>
      <Navbar />
      <div className='dashboard'> Dashboard</div>
      <div className='search'>
  <input type="search" placeholder="Search..." />
  <MdOutlineNotificationsNone className='notif' size={25} style={{paddingLeft: '30px', paddingRight: '20px'}}/>
  <img src={profilepic} />
  </div>
  <div className='revenue'>
    <FaCashRegister className='icons' size={25} />
    <div className='about'>Total Revenues</div>
    <span className='numbers'> $2,129,430</span>

  </div>
  <div className='transactions'>
    <BiBookmarks className='icons' size={25} />
    <div className='about'>Total Transactions</div>
    <span className='numbers'> 1520</span>

  </div>
  <div className='likes'>
    <AiOutlineLike className='icons' size={25} />
    <div className='about'>Total Likes</div>
    <span className='numbers'>9721</span>

  </div>
  <div className='users'>
    <HiOutlineUserCircle className='icons' size={25} />
    <div className='about'>Total Users</div>
    
    <span className='numbers'> 892</span>

  </div>

  <div className='activities'> 
    <div className='heading'>Activities</div>
    <span className='time'>May-June 2021 </span>
    <div className='chart'><LineGraph /></div>
    
  </div>
  <div className='product'>
    <div className='heading'>Top Products</div>
    <Piechart />
  </div>
  <div className='schedule'>
    <div className='heading'>Today's schedule</div>
     <div className='Line1'></div>
     <div className='Line2'></div>
     <div className='content'> Meeting with suppliers</div>
     <div className='timer'>14.00-15.00</div>
     <div className='place'> at Sunset Road</div>
     <div className='content'> Check operation</div>
     <div className='timer'>18.00-20.00</div>
     <div className='place'>at Central Jakarta</div>
  </div>
    </div>
  )
}

export default dashboard