import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import SearchIcon from '@material-ui/icons/Search'
import { RateReviewOutlined } from '@material-ui/icons'
import SidebarChat from './SidebarChat'


export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar__header">
        <Avatar className="sidebar__avatar" />
        <div className="sidebar__input">
          <SearchIcon />
          <input placeholder="Search"/>
        </div>
        <IconButton variant='outlined' className='sidebar__inputButton'>
          <RateReviewOutlined />
        </IconButton>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  )
}