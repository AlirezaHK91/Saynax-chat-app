import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Serach'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
    </div>
  )
}

export default Sidebar