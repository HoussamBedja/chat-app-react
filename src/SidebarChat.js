import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'

export default function SidebarChat() {
  return (
    <div className='sidebarChat'>
      <Avatar />
      <div className="sidebarChat__infor">
        <h3>Channel Name</h3>
        <p>Last message sent..</p>
        <small>timestamp</small>
      </div>
    </div>
  )
}
