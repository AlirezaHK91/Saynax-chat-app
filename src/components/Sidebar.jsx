import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Serach'
import Chat from './chat'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
      <Chat/>
    </div>
  )
}

export default Sidebar