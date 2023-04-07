import React from 'react'
import './Navbar.css'
import { FiPieChart , FiSettings } from 'react-icons/fi'
import { BiBookmarks } from 'react-icons/bi'
import { TbCalendarTime } from 'react-icons/tb'
import { HiOutlineUserCircle } from 'react-icons/hi'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='board'>Board.</div>
        <ul className='menu'>
            <li><FiPieChart size={20}  /><span style={{ paddingLeft: '20px' }}>Dashboard</span></li>
            <li><BiBookmarks size={20} /><span style={{ paddingLeft: '20px' }}>Transactions</span></li>
            <li><TbCalendarTime size={20}  /><span style={{ paddingLeft: '20px' }}>Schedules</span></li>
            <li><HiOutlineUserCircle size={20}  /><span style={{ paddingLeft: '20px' }}>Users</span></li>
            <li><FiSettings size={20} /><span style={{ paddingLeft: '20px' }}>Settings</span></li>

        </ul>
        <ul className='help'>
            <li style={{paddingBottom: '20px'}}>Help</li>
            <li>Contact us</li>
        </ul>


    </div>
  )
}

export default Navbar