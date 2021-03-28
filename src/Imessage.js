import React from 'react'
import Chat from './Chat'
import './Imessage.css'
import Sidebar from './Sidebar'

export default function Imessage() {
  return (
    <div className='imessage'>
      <Sidebar/>
      <Chat />
    </div>
  )
}
